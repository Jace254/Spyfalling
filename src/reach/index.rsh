/* eslint-disable */
'reach 0.1';

const playerFuncs = Struct([["join", UInt],["wager", UInt]]);
const PFO = playerFuncs.fromObject({join: 1, wager: 2});

assert(Struct.toObject(PFO).join     == 1  ||
      Struct.toObject(PFO).wager     == 2   );

//The function reps
const join = Struct.toObject(PFO).join;
const wager = Struct.toObject(PFO).wager;

const gameParams = Object({ numPlayers: UInt, amt: UInt, rounds: UInt});


export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const Admin = Participant('Admin', {
    setParams: gameParams,
    ready: Fun([], Null)
  });

  const Game = Participant('Game', {
    getWinner: Fun([], Address),
  });

  const Player = API('Player', {
    join: Fun([], Null),
    wager: Fun([], Null),
  });

  const Phase = Data({Joining: Null, Wagering: Null,Paying: Null,Finished: Null})
  const GP = Events('GamePhase', { phase: [ Phase ]});
  init();
  
  Admin.only(() => {
    const { numPlayers, amt, rounds } = declassify(interact.setParams);
  });

  Admin.publish( numPlayers, amt, rounds);
  commit();
  Admin.publish();
  Admin.interact.ready();

  commit();
  Game.publish();


  var remainingRounds = rounds;
  invariant(balance() == 0) 
  while(remainingRounds > 0) {
    // Maps and sets of in game concepts
    const playersM = new Set();

    const awaitAdminPlayerAPI = (apiFunc) => {
      
      if  (apiFunc == 1) {

        const [ [], k ] = 
        call(Player.join)
        .assume(() => check(this == Admin && !playersM.member(this)))
        check(this == Admin && !playersM.member(this));
        k(null);
        playersM.insert(this);
        
      } else  {

        const [[], k] = 
        call(Player.wager)
        .pay(() => amt)
        .assume(() => check(this == Admin && playersM.member(this)));
        check(this == Admin && playersM.member(this));
        k(null);
        return amt;

      }   
    } 
    
    GP.phase(Phase.Joining());
    commit();
    awaitAdminPlayerAPI(join);
    
    const [playersJoined] =
    parallelReduce([ 0 ])
    .invariant(balance() == 0)
    .invariant(playersJoined <= numPlayers-1)
    .while(playersJoined < numPlayers-1)
    .api_(Player.join, () => {
      check(!playersM.member(this));
      return [ (k) => {
        k(null);
        playersM.insert(this);
        return [playersJoined + 1];
      }]
    })
    .timeout(false);

    GP.phase(Phase.Wagering());
    commit();
    const adminWager = awaitAdminPlayerAPI(wager);

    const [totalWager, wageringPlayers] = 
    parallelReduce([ adminWager, playersJoined ])
      .invariant(balance() == totalWager)
      .invariant(wageringPlayers <= playersJoined)
      .while(wageringPlayers > 0)
      .api_(Player.wager, () => {
        check(playersM.member(this))
        return [amt,  (k) => {
          k(null);
          return [totalWager + amt, wageringPlayers - 1];
        }]
      })
      .timeout(false)

    GP.phase(Phase.Paying());
    commit();
    Game.only(() => {
      const winner = declassify(interact.getWinner())
    });
    Game.publish(winner);

    transfer(totalWager).to(winner);

    remainingRounds = remainingRounds - 1
    continue;
  }

  GP.phase(Phase.Finished());
  commit()
  exit();
});



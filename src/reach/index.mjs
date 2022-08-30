import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

(async () => {
  const startingBalance = stdlib.parseCurrency(100);
  const startingBalanceG = stdlib.parseCurrency(10000);

  console.log('Hidden Role Game[spy]')
  console.log('Version: 1.0');
  console.log(`\nCreating Admin and Game Accounts`)
  const accAdmin = await stdlib.newTestAccount(startingBalance);
  const accGame = await stdlib.newTestAccount(startingBalanceG);
  
  const ctcAdmin = accAdmin.contract(backend);
  const ctcGame = accGame.contract(backend, ctcAdmin.getInfo());

  const gameParams = {
    numPlayers: 10, // This is exclusive of the admin(who will join later as a player too).
    amt: stdlib.parseCurrency(5),
    rounds: 3
  }

  console.log(`\nCreating Player Accounts`)
  const accPlayers = await stdlib.newTestAccounts(gameParams.numPlayers, startingBalance);
  const ctcPlayers = accPlayers.map((P) => P.contract(backend, ctcAdmin.getInfo()));

  const fmt = (amt) => stdlib.formatCurrency(amt, 2)
  const printBalances = async (numPlayers) => {
    const printBalance = async (name, acc) => {
        const balance = await stdlib.balanceOf(acc);
        console.log(`  [+] ${name} has ${fmt(balance)} ${stdlib.standardUnit}`);
    }

    await printBalance('Game', accGame);
    await printBalance('Admin/Player #1', accAdmin);
    for (let i = 0; i < numPlayers; i++) {
        await printBalance(`Player #${i+2}`, accPlayers[i]);
    }
  }

  console.log(`\nStarting Balances: `);
  await printBalances(gameParams.numPlayers);

  const numsArr = Array.from({length: gameParams.range}, (_, i) => i + 1);

  const enemyCount = (playerNum) => ((playerNum == 5 || playerNum == 6) ? 2 : (playerNum == 7 || playerNum == 8) ? 3 : 4);
  const spyCard = {role: 0}
  const crewCard = {role: 1}

  const cardArrayf = (crewNum,spyNum) => {
    const crewCardArray = Array(crewNum).fill(crewCard);
    const spyCardArray = Array(spyNum).fill(spyCard);
    const cardArray = crewCardArray.concat(spyCardArray);
    return cardArray;
  }

  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const spyNum = enemyCount(gameParams.numPlayers + 1);
  const crewNum = (gameParams.numPlayers + 1) - spyNum;

  // cards created
  const cardArray = cardArrayf(crewNum,spyNum);
  const shuffledCardArray = shuffle(cardArray);

  const cards = shuffledCardArray;

  const roles = ["SPY","CREW"];

  let WRole = 1;

  console.log(`\nStarting backends ...`)
  await stdlib.withDisconnect(() => Promise.all([
    ctcAdmin.p.Admin({
      setParams: gameParams,
      ready: () => {
        console.log(`Admin disconnected as Participant`)
        stdlib.disconnect(null);
      }// Admin leaves the contract
    }),
    ctcGame.p.Game({
      showWinningRole: () => {
        const WinRole = Math.floor(Math.random() * 2);
        console.log(`\nThe Winning Role is ${roles[WRole]}\n`);
        WRole = WinRole;
      }
    })
  ]));

  let phase;
  do{

    const ev = await ctcAdmin.events.GamePhase.phase.next();
    phase = ev.what[0][0];
    switch(phase){
      case 'Joining':
        await ctcAdmin.apis.Player.join();

        console.log(`Admin joined in as Player #1`);
    
        for(const [ i , ctc ] of ctcPlayers.entries()){
          try{
            await ctc.apis.Player.join();
            console.log(`Player #${i+2} joined the Game`)
          } catch (e) {
            console.log(e);
          }
        }
        break;

      case 'Wagering': 
        // const randomWager = stdlib.parseCurrency(Math.floor(Math.random() * (7-1) + 1));
        
        await ctcAdmin.apis.Player.wager();

        console.log(`\nAdmin/Player #1 wagered ${fmt(gameParams.amt)} ${stdlib.standardUnit}`)
        for(const [ i , ctc ] of ctcPlayers.entries()){
          // const randomWager = stdlib.parseCurrency(Math.floor(Math.random() * (7-1) + 1));
          try{ 
            await ctc.apis.Player.wager();

            console.log(`Player #${i+2}  wagered ${fmt(gameParams.amt)} ${stdlib.standardUnit}`);
          } catch (e) {
            console.log(e);
          }
        }
        break;
        
      case 'PickingRoles':
        var numsRange = gameParams.numPlayers;
        const randomIndex = Math.floor(Math.random() * numsRange);
        const adminRole = cards[randomIndex].role
        await ctcAdmin.apis.Player.getRole(adminRole);

        cards.splice(randomIndex,1);
        numsRange = numsRange - 1;

        console.log(`\nAdmin/Player #1 picked a card`);

        for(const [ i , ctc ] of ctcPlayers.entries()){
          const randomIndex = Math.floor(Math.random() * numsRange);
          const playerRole = cards[randomIndex].role;
          try{
            await ctc.apis.Player.getRole(playerRole);

            cards.splice(randomIndex,1);
            numsRange = numsRange - 1;

            console.log(`Player #${i+2} picked a card`);
          } catch (e) {
            console.log(e);
          }
        }
        break;
        
      case 'CheckingWin':
        const isAdminWinner = await ctcAdmin.apis.Player.seeWinner(WRole);
        if(isAdminWinner) {
          console.log(`\nAdmin/Player #1 won the game!`);
        } else {
          console.log(`Better luck next time Player #1`)
        }
        for(const [ i, ctc ] of ctcPlayers.entries()){
          try{
            const isPlayerWinner = await ctc.apis.Player.seeWinner(WRole);
            if(isPlayerWinner){
              console.log(`Player #${i+2} won the game`);
            } else {
              console.log(`Better luck next time Player #${i+2}`);
            }
          } catch (e) {
            console.log(e);
          }
        }
        break;

      case 'PayingWinners':
        await ctcAdmin.apis.Player.receivePay();
        for(const [i,ctc] of ctcPlayers.entries()){
          try{
            await ctc.apis.Player.receivePay();
          } catch(e) {
            console.log(e);
          }
        }
        break;

      case 'Finished':
        console.log('\nFinishing balances: ')
        printBalances(gameParams.numPlayers);

        break;

    }
  } while (phase != 'Finished')
  
})();


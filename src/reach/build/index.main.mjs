// Automatically generated with Reach 0.1.11 (f33abc3d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f33abc3d)';
export const _backendVersion = 23;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    Finished: ctc0,
    Joining: ctc0,
    Wagering: ctc0
    });
  return {
    GamePhase: {
      phase: [ctc1]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      10: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    amt: ctc2,
    numPlayers: ctc2,
    rounds: ctc2
    });
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v505 = stdlib.protect(ctc3, interact.setParams, 'for Admin\'s interact field setParams');
  const v506 = v505.amt;
  const v507 = v505.numPlayers;
  const v508 = v505.rounds;
  
  const txn1 = await (ctc.sendrecv({
    args: [v507, v506, v508],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:40:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v515, v516, v517], secs: v519, time: v518, didSend: v35, from: v514 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v515, v516, v517], secs: v519, time: v518, didSend: v35, from: v514 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v514, v515, v516, v517],
    evt_cnt: 0,
    funcNum: 1,
    lct: v518,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v522, time: v521, didSend: v40, from: v520 } = txn2;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v522, time: v521, didSend: v40, from: v520 } = txn2;
  ;
  const v523 = stdlib.addressEq(v514, v520);
  stdlib.assert(v523, {
    at: './index.rsh:42:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:43:23:application',
    fs: ['at ./index.rsh:43:23:application call to [unknown function] (defined at: ./index.rsh:43:23:function exp)', 'at ./index.rsh:43:23:application call to "liftedInteract" (defined at: ./index.rsh:43:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v527, time: v526, didSend: v48, from: v525 } = txn3;
  ;
  let v528 = v517;
  let v529 = v526;
  
  while (await (async () => {
    const v539 = stdlib.gt(v528, stdlib.checkedBigNumberify('./index.rsh:51:27:decimal', stdlib.UInt_max, '0'));
    
    return v539;})()) {
    const v540 = ['Joining', null];
    null;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v552], secs: v554, time: v553, didSend: v92, from: v551 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v555 = stdlib.addressEq(v551, v514);
    const v556 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v551), null);
    const v557 = {
      None: 0,
      Some: 1
      }[v556[0]];
    const v558 = stdlib.eq(v557, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v559 = v558 ? false : true;
    const v560 = v555 ? v559 : false;
    stdlib.assert(v560, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:63:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:82:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:56:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v562 = null;
    await txn4.getOutput('Player_join', 'v562', ctc0, v562);
    await stdlib.mapSet(map0, v551, null);
    let v569 = stdlib.checkedBigNumberify('./index.rsh:85:22:decimal', stdlib.UInt_max, '0');
    let v570 = v553;
    
    while (await (async () => {
      const v581 = stdlib.lt(v569, v515);
      
      return v581;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 10,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v593], secs: v595, time: v594, didSend: v201, from: v592 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v597 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v592), null);
      const v598 = {
        None: 0,
        Some: 1
        }[v597[0]];
      const v599 = stdlib.eq(v598, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v600 = v599 ? false : true;
      stdlib.assert(v600, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:91:20:application call to [unknown function] (defined at: ./index.rsh:91:20:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v602 = null;
      await txn5.getOutput('Player_join', 'v602', ctc0, v602);
      await stdlib.mapSet(map0, v592, null);
      const v609 = stdlib.safeAdd(v569, stdlib.checkedBigNumberify('./index.rsh:94:33:decimal', stdlib.UInt_max, '1'));
      const cv569 = v609;
      const cv570 = v594;
      
      v569 = cv569;
      v570 = cv570;
      
      continue;
      
      }
    const v611 = ['Wagering', null];
    null;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v622], secs: v624, time: v623, didSend: v273, from: v621 } = txn5;
    undefined /* setApiDetails */;
    ;
    const v627 = stdlib.addressEq(v621, v514);
    const v628 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v621), null);
    const v629 = {
      None: 0,
      Some: 1
      }[v628[0]];
    const v630 = stdlib.eq(v629, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v631 = v627 ? v630 : false;
    stdlib.assert(v631, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:73:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:56:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v633 = null;
    await txn5.getOutput('Player_wager', 'v633', ctc0, v633);
    let v639 = v516;
    let v640 = v569;
    let v641 = v623;
    
    while (await (async () => {
      const v652 = stdlib.gt(v640, stdlib.checkedBigNumberify('./index.rsh:107:32:decimal', stdlib.UInt_max, '0'));
      
      return v652;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 9,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v667], secs: v669, time: v668, didSend: v420, from: v666 } = txn6;
      undefined /* setApiDetails */;
      const v671 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v666), null);
      const v672 = {
        None: 0,
        Some: 1
        }[v671[0]];
      const v673 = stdlib.eq(v672, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v673, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:109:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:108:30:application call to [unknown function] (defined at: ./index.rsh:108:30:function exp)', 'at ./index.rsh:108:30:application call to [unknown function] (defined at: ./index.rsh:108:30:function exp)'],
        msg: null,
        who: 'Admin'
        });
      ;
      const v681 = null;
      await txn6.getOutput('Player_wager', 'v681', ctc0, v681);
      const v687 = stdlib.safeAdd(v639, v516);
      const v688 = stdlib.safeSub(v640, stdlib.checkedBigNumberify('./index.rsh:112:55:decimal', stdlib.UInt_max, '1'));
      const cv639 = v687;
      const cv640 = v688;
      const cv641 = v668;
      
      v639 = cv639;
      v640 = cv640;
      v641 = cv641;
      
      continue;
      
      }
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v694], secs: v696, time: v695, didSend: v461, from: v693 } = txn6;
    ;
    const v697 = stdlib.addressEq(v525, v693);
    stdlib.assert(v697, {
      at: './index.rsh:122:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    ;
    const v702 = stdlib.safeSub(v528, stdlib.checkedBigNumberify('./index.rsh:126:41:decimal', stdlib.UInt_max, '1'));
    const cv528 = v702;
    const cv529 = v695;
    
    v528 = cv528;
    v529 = cv529;
    
    continue;
    
    
    
    
    
    }
  const v703 = ['Finished', null];
  null;
  return;
  
  
  
  
  
  
  };
export async function Game(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Game expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Game expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc2, ctc2, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v515, v516, v517], secs: v519, time: v518, didSend: v35, from: v514 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v522, time: v521, didSend: v40, from: v520 } = txn2;
  ;
  const v523 = stdlib.addressEq(v514, v520);
  stdlib.assert(v523, {
    at: './index.rsh:42:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Game'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v514, v515, v516, v517],
    evt_cnt: 0,
    funcNum: 2,
    lct: v521,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v527, time: v526, didSend: v48, from: v525 } = txn3;
      
      ;
      const v528 = v517;
      const v529 = v526;
      
      if (await (async () => {
        const v539 = stdlib.gt(v528, stdlib.checkedBigNumberify('./index.rsh:51:27:decimal', stdlib.UInt_max, '0'));
        
        return v539;})()) {
        const v540 = ['Joining', null];
        null;
        sim_r.isHalt = false;
        }
      else {
        const v703 = ['Finished', null];
        null;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v527, time: v526, didSend: v48, from: v525 } = txn3;
  ;
  let v528 = v517;
  let v529 = v526;
  
  while (await (async () => {
    const v539 = stdlib.gt(v528, stdlib.checkedBigNumberify('./index.rsh:51:27:decimal', stdlib.UInt_max, '0'));
    
    return v539;})()) {
    const v540 = ['Joining', null];
    null;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v552], secs: v554, time: v553, didSend: v92, from: v551 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v555 = stdlib.addressEq(v551, v514);
    const v556 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v551), null);
    const v557 = {
      None: 0,
      Some: 1
      }[v556[0]];
    const v558 = stdlib.eq(v557, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v559 = v558 ? false : true;
    const v560 = v555 ? v559 : false;
    stdlib.assert(v560, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:63:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:82:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:56:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v562 = null;
    await txn4.getOutput('Player_join', 'v562', ctc0, v562);
    await stdlib.mapSet(map0, v551, null);
    let v569 = stdlib.checkedBigNumberify('./index.rsh:85:22:decimal', stdlib.UInt_max, '0');
    let v570 = v553;
    
    while (await (async () => {
      const v581 = stdlib.lt(v569, v515);
      
      return v581;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 10,
        out_tys: [ctc3],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v593], secs: v595, time: v594, didSend: v201, from: v592 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v597 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v592), null);
      const v598 = {
        None: 0,
        Some: 1
        }[v597[0]];
      const v599 = stdlib.eq(v598, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v600 = v599 ? false : true;
      stdlib.assert(v600, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:91:20:application call to [unknown function] (defined at: ./index.rsh:91:20:function exp)'],
        msg: null,
        who: 'Game'
        });
      const v602 = null;
      await txn5.getOutput('Player_join', 'v602', ctc0, v602);
      await stdlib.mapSet(map0, v592, null);
      const v609 = stdlib.safeAdd(v569, stdlib.checkedBigNumberify('./index.rsh:94:33:decimal', stdlib.UInt_max, '1'));
      const cv569 = v609;
      const cv570 = v594;
      
      v569 = cv569;
      v570 = cv570;
      
      continue;
      
      }
    const v611 = ['Wagering', null];
    null;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v622], secs: v624, time: v623, didSend: v273, from: v621 } = txn5;
    undefined /* setApiDetails */;
    ;
    const v627 = stdlib.addressEq(v621, v514);
    const v628 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v621), null);
    const v629 = {
      None: 0,
      Some: 1
      }[v628[0]];
    const v630 = stdlib.eq(v629, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v631 = v627 ? v630 : false;
    stdlib.assert(v631, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:73:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:56:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v633 = null;
    await txn5.getOutput('Player_wager', 'v633', ctc0, v633);
    let v639 = v516;
    let v640 = v569;
    let v641 = v623;
    
    while (await (async () => {
      const v652 = stdlib.gt(v640, stdlib.checkedBigNumberify('./index.rsh:107:32:decimal', stdlib.UInt_max, '0'));
      
      return v652;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 9,
        out_tys: [ctc3],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v667], secs: v669, time: v668, didSend: v420, from: v666 } = txn6;
      undefined /* setApiDetails */;
      const v671 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v666), null);
      const v672 = {
        None: 0,
        Some: 1
        }[v671[0]];
      const v673 = stdlib.eq(v672, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v673, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:109:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:108:30:application call to [unknown function] (defined at: ./index.rsh:108:30:function exp)', 'at ./index.rsh:108:30:application call to [unknown function] (defined at: ./index.rsh:108:30:function exp)'],
        msg: null,
        who: 'Game'
        });
      ;
      const v681 = null;
      await txn6.getOutput('Player_wager', 'v681', ctc0, v681);
      const v687 = stdlib.safeAdd(v639, v516);
      const v688 = stdlib.safeSub(v640, stdlib.checkedBigNumberify('./index.rsh:112:55:decimal', stdlib.UInt_max, '1'));
      const cv639 = v687;
      const cv640 = v688;
      const cv641 = v668;
      
      v639 = cv639;
      v640 = cv640;
      v641 = cv641;
      
      continue;
      
      }
    const v692 = stdlib.protect(ctc4, await interact.getWinner(), {
      at: './index.rsh:120:51:application',
      fs: ['at ./index.rsh:119:14:application call to [unknown function] (defined at: ./index.rsh:119:18:function exp)'],
      msg: 'getWinner',
      who: 'Game'
      });
    
    const txn6 = await (ctc.sendrecv({
      args: [v514, v515, v516, v525, v528, v639, v692],
      evt_cnt: 1,
      funcNum: 8,
      lct: v641,
      onlyIf: true,
      out_tys: [ctc4],
      pay: [stdlib.checkedBigNumberify('./index.rsh:122:10:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [v694], secs: v696, time: v695, didSend: v461, from: v693 } = txn6;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v694,
          tok: undefined /* Nothing */
          });
        const v702 = stdlib.safeSub(v528, stdlib.checkedBigNumberify('./index.rsh:126:41:decimal', stdlib.UInt_max, '1'));
        const cv528 = v702;
        const cv529 = v695;
        
        await (async () => {
          const v528 = cv528;
          const v529 = cv529;
          
          if (await (async () => {
            const v539 = stdlib.gt(v528, stdlib.checkedBigNumberify('./index.rsh:51:27:decimal', stdlib.UInt_max, '0'));
            
            return v539;})()) {
            const v540 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
            const v703 = ['Finished', null];
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [v694], secs: v696, time: v695, didSend: v461, from: v693 } = txn6;
    ;
    const v697 = stdlib.addressEq(v525, v693);
    stdlib.assert(v697, {
      at: './index.rsh:122:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Game'
      });
    ;
    const v702 = stdlib.safeSub(v528, stdlib.checkedBigNumberify('./index.rsh:126:41:decimal', stdlib.UInt_max, '1'));
    const cv528 = v702;
    const cv529 = v695;
    
    v528 = cv528;
    v529 = cv529;
    
    continue;
    
    
    
    
    
    }
  const v703 = ['Finished', null];
  null;
  return;
  
  
  
  
  
  
  };
export async function _Player_join5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_join5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_join5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v514, v515, v516, v525, v528] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc3, ctc3, ctc2, ctc3]);
  const v541 = ctc.selfAddress();
  const v543 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:60:9:application',
    fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:9:function exp)', 'at ./index.rsh:82:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:56:43:function exp)'],
    msg: 'in',
    who: 'Player_join'
    });
  const v544 = stdlib.addressEq(v541, v514);
  const v545 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v541), null);
  const v546 = {
    None: 0,
    Some: 1
    }[v545[0]];
  const v547 = stdlib.eq(v546, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v548 = v547 ? false : true;
  const v549 = v544 ? v548 : false;
  stdlib.assert(v549, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:62:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:62:20:function exp)', 'at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:9:function exp)', 'at ./index.rsh:82:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:56:43:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v514, v515, v516, v525, v528, v543],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v552], secs: v554, time: v553, didSend: v92, from: v551 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_join"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v551), null);
      const v562 = null;
      const v563 = await txn1.getOutput('Player_join', 'v562', ctc0, v562);
      
      await stdlib.simMapSet(sim_r, 0, v551, null);
      const v963 = stdlib.checkedBigNumberify('./index.rsh:85:22:decimal', stdlib.UInt_max, '0');
      const v965 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:85:22:decimal', stdlib.UInt_max, '0'), v515);
      if (v965) {
        sim_r.isHalt = false;
        }
      else {
        const v966 = ['Wagering', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc2, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v552], secs: v554, time: v553, didSend: v92, from: v551 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v555 = stdlib.addressEq(v551, v514);
  const v556 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v551), null);
  const v557 = {
    None: 0,
    Some: 1
    }[v556[0]];
  const v558 = stdlib.eq(v557, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v559 = v558 ? false : true;
  const v560 = v555 ? v559 : false;
  stdlib.assert(v560, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:63:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:82:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:56:43:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  const v562 = null;
  const v563 = await txn1.getOutput('Player_join', 'v562', ctc0, v562);
  stdlib.protect(ctc0, await interact.out(v552, v563), {
    at: './index.rsh:60:9:application',
    fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:9:function exp)', 'at ./index.rsh:64:10:application call to "k" (defined at: ./index.rsh:60:9:function exp)', 'at ./index.rsh:82:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:56:43:function exp)'],
    msg: 'out',
    who: 'Player_join'
    });
  
  await stdlib.mapSet(map0, v551, null);
  const v963 = stdlib.checkedBigNumberify('./index.rsh:85:22:decimal', stdlib.UInt_max, '0');
  const v965 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:85:22:decimal', stdlib.UInt_max, '0'), v515);
  if (v965) {
    return;
    }
  else {
    const v966 = ['Wagering', null];
    null;
    return;
    }
  
  
  };
export async function _Player_join11(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_join11 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_join11 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v514, v515, v516, v525, v528, v569] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc2, ctc3, ctc3, ctc2, ctc3, ctc3]);
  const v582 = ctc.selfAddress();
  const v584 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:89:27:application call to [unknown function] (defined at: ./index.rsh:89:27:function exp)', 'at ./index.rsh:89:27:application call to [unknown function] (defined at: ./index.rsh:89:27:function exp)'],
    msg: 'in',
    who: 'Player_join'
    });
  const v585 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v582), null);
  const v586 = {
    None: 0,
    Some: 1
    }[v585[0]];
  const v587 = stdlib.eq(v586, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v588 = v587 ? false : true;
  stdlib.assert(v588, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:89:27:application call to [unknown function] (defined at: ./index.rsh:89:27:function exp)', 'at ./index.rsh:89:27:application call to [unknown function] (defined at: ./index.rsh:89:27:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v514, v515, v516, v525, v528, v569, v584],
    evt_cnt: 1,
    funcNum: 10,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:89:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v593], secs: v595, time: v594, didSend: v201, from: v592 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_join"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v592), null);
      const v602 = null;
      const v603 = await txn1.getOutput('Player_join', 'v602', ctc0, v602);
      
      await stdlib.simMapSet(sim_r, 0, v592, null);
      const v609 = stdlib.safeAdd(v569, stdlib.checkedBigNumberify('./index.rsh:94:33:decimal', stdlib.UInt_max, '1'));
      const v1002 = v609;
      const v1004 = stdlib.lt(v609, v515);
      if (v1004) {
        sim_r.isHalt = false;
        }
      else {
        const v1005 = ['Wagering', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc2, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v593], secs: v595, time: v594, didSend: v201, from: v592 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v597 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v592), null);
  const v598 = {
    None: 0,
    Some: 1
    }[v597[0]];
  const v599 = stdlib.eq(v598, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v600 = v599 ? false : true;
  stdlib.assert(v600, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:91:20:application call to [unknown function] (defined at: ./index.rsh:91:20:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  const v602 = null;
  const v603 = await txn1.getOutput('Player_join', 'v602', ctc0, v602);
  if (v201) {
    stdlib.protect(ctc0, await interact.out(v593, v603), {
      at: './index.rsh:89:11:application',
      fs: ['at ./index.rsh:89:11:application call to [unknown function] (defined at: ./index.rsh:89:11:function exp)', 'at ./index.rsh:92:10:application call to "k" (defined at: ./index.rsh:91:20:function exp)', 'at ./index.rsh:91:20:application call to [unknown function] (defined at: ./index.rsh:91:20:function exp)'],
      msg: 'out',
      who: 'Player_join'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v592, null);
  const v609 = stdlib.safeAdd(v569, stdlib.checkedBigNumberify('./index.rsh:94:33:decimal', stdlib.UInt_max, '1'));
  const v1002 = v609;
  const v1004 = stdlib.lt(v609, v515);
  if (v1004) {
    return;
    }
  else {
    const v1005 = ['Wagering', null];
    null;
    return;
    }
  
  
  };
export async function _Player_wager7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_wager7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_wager7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v514, v515, v516, v525, v528, v569] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc2, ctc3, ctc3, ctc2, ctc3, ctc3]);
  const v612 = ctc.selfAddress();
  const v614 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:69:9:application',
    fs: ['at ./index.rsh:69:9:application call to [unknown function] (defined at: ./index.rsh:69:9:function exp)', 'at ./index.rsh:101:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:56:43:function exp)'],
    msg: 'in',
    who: 'Player_wager'
    });
  const v615 = stdlib.addressEq(v612, v514);
  const v616 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v612), null);
  const v617 = {
    None: 0,
    Some: 1
    }[v616[0]];
  const v618 = stdlib.eq(v617, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v619 = v615 ? v618 : false;
  stdlib.assert(v619, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:72:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:69:9:application call to [unknown function] (defined at: ./index.rsh:72:20:function exp)', 'at ./index.rsh:69:9:application call to [unknown function] (defined at: ./index.rsh:69:9:function exp)', 'at ./index.rsh:101:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:56:43:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v514, v515, v516, v525, v528, v569, v614],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v516, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v622], secs: v624, time: v623, didSend: v273, from: v621 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_wager"
        });
      sim_r.txns.push({
        amt: v516,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v621), null);
      const v633 = null;
      const v634 = await txn1.getOutput('Player_wager', 'v633', ctc0, v633);
      
      const v1041 = v516;
      const v1042 = v569;
      const v1044 = stdlib.gt(v569, stdlib.checkedBigNumberify('./index.rsh:107:32:decimal', stdlib.UInt_max, '0'));
      if (v1044) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc2, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v622], secs: v624, time: v623, didSend: v273, from: v621 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v627 = stdlib.addressEq(v621, v514);
  const v628 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v621), null);
  const v629 = {
    None: 0,
    Some: 1
    }[v628[0]];
  const v630 = stdlib.eq(v629, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v631 = v627 ? v630 : false;
  stdlib.assert(v631, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:73:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:56:43:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  const v633 = null;
  const v634 = await txn1.getOutput('Player_wager', 'v633', ctc0, v633);
  stdlib.protect(ctc0, await interact.out(v622, v634), {
    at: './index.rsh:69:9:application',
    fs: ['at ./index.rsh:69:9:application call to [unknown function] (defined at: ./index.rsh:69:9:function exp)', 'at ./index.rsh:74:10:application call to "k" (defined at: ./index.rsh:69:9:function exp)', 'at ./index.rsh:101:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:56:43:function exp)'],
    msg: 'out',
    who: 'Player_wager'
    });
  
  const v1041 = v516;
  const v1042 = v569;
  const v1044 = stdlib.gt(v569, stdlib.checkedBigNumberify('./index.rsh:107:32:decimal', stdlib.UInt_max, '0'));
  if (v1044) {
    return;
    }
  else {
    return;
    }
  
  
  };
export async function _Player_wager10(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_wager10 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_wager10 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v514, v515, v516, v525, v528, v639, v640] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), [ctc2, ctc3, ctc3, ctc2, ctc3, ctc3, ctc3]);
  const v653 = ctc.selfAddress();
  const v655 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:108:30:application call to [unknown function] (defined at: ./index.rsh:108:30:function exp)', 'at ./index.rsh:108:30:application call to [unknown function] (defined at: ./index.rsh:108:30:function exp)'],
    msg: 'in',
    who: 'Player_wager'
    });
  const v656 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v653), null);
  const v657 = {
    None: 0,
    Some: 1
    }[v656[0]];
  const v658 = stdlib.eq(v657, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v658, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:109:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:108:30:application call to [unknown function] (defined at: ./index.rsh:108:30:function exp)', 'at ./index.rsh:108:30:application call to [unknown function] (defined at: ./index.rsh:108:30:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v514, v515, v516, v525, v528, v639, v640, v655],
    evt_cnt: 1,
    funcNum: 9,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v516, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v667], secs: v669, time: v668, didSend: v420, from: v666 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_wager"
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v666), null);
      sim_r.txns.push({
        amt: v516,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v681 = null;
      const v682 = await txn1.getOutput('Player_wager', 'v681', ctc0, v681);
      
      const v687 = stdlib.safeAdd(v639, v516);
      const v688 = stdlib.safeSub(v640, stdlib.checkedBigNumberify('./index.rsh:112:55:decimal', stdlib.UInt_max, '1'));
      const v1052 = v687;
      const v1053 = v688;
      const v1055 = stdlib.gt(v688, stdlib.checkedBigNumberify('./index.rsh:107:32:decimal', stdlib.UInt_max, '0'));
      if (v1055) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc2, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v667], secs: v669, time: v668, didSend: v420, from: v666 } = txn1;
  undefined /* setApiDetails */;
  const v671 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v666), null);
  const v672 = {
    None: 0,
    Some: 1
    }[v671[0]];
  const v673 = stdlib.eq(v672, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v673, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:109:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:108:30:application call to [unknown function] (defined at: ./index.rsh:108:30:function exp)', 'at ./index.rsh:108:30:application call to [unknown function] (defined at: ./index.rsh:108:30:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  ;
  const v681 = null;
  const v682 = await txn1.getOutput('Player_wager', 'v681', ctc0, v681);
  if (v420) {
    stdlib.protect(ctc0, await interact.out(v667, v682), {
      at: './index.rsh:108:13:application',
      fs: ['at ./index.rsh:108:13:application call to [unknown function] (defined at: ./index.rsh:108:13:function exp)', 'at ./index.rsh:111:12:application call to "k" (defined at: ./index.rsh:110:27:function exp)', 'at ./index.rsh:110:27:application call to [unknown function] (defined at: ./index.rsh:110:27:function exp)'],
      msg: 'out',
      who: 'Player_wager'
      });
    }
  else {
    }
  
  const v687 = stdlib.safeAdd(v639, v516);
  const v688 = stdlib.safeSub(v640, stdlib.checkedBigNumberify('./index.rsh:112:55:decimal', stdlib.UInt_max, '1'));
  const v1052 = v687;
  const v1053 = v688;
  const v1055 = stdlib.gt(v688, stdlib.checkedBigNumberify('./index.rsh:107:32:decimal', stdlib.UInt_max, '0'));
  if (v1055) {
    return;
    }
  else {
    return;
    }
  
  
  };
export async function Player_join(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_join expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_join expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Player_join5(ctcTop, interact);}
  if (step == 11) {return _Player_join11(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_wager(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_wager expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_wager expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Player_wager7(ctcTop, interact);}
  if (step == 10) {return _Player_wager10(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Player_join()byte[0]`, `Player_wager()byte[0]`, `_Player_join10()byte[0]`, `_Player_join4()byte[0]`, `_Player_wager6()byte[0]`, `_Player_wager9()byte[0]`],
    pure: [],
    sigs: [`Player_join()byte[0]`, `Player_wager()byte[0]`, `_Player_join10()byte[0]`, `_Player_join4()byte[0]`, `_Player_wager6()byte[0]`, `_Player_wager9()byte[0]`]
    },
  appApproval: `BiAVAAEgKAoJUAJYCAQGBdDx1cIM/ob39Q3F/MCsDsH7wMcIwvb++gsLBzAmAwEAAAEBIjUAMRhBBVspZEkiWzUBIQlbNQIxGSMSQQAIMQAoKGZCBSk2GgAXSUEAgyI1BCM1BkkhDQxAADlJIQ4MQAAqSSEPDEAACCEPEkQpQgJGIQ4SRDQBSSEEDEAAByEEEkRCAAshChJEQv/hIQ0SRClCAGNJIRAMQAAqSSERDEAACCEREkQpQgCyIRASRDQBSSEFDEAAByEFEkRC/+ghCxJEQgAIgZvm054FEkQpQgFkNhoCFzUENhoDNhoBF0khCwxAAcBJIQUMQADfSSEEDEAAaCEEEkQhEjQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AE33TyOjT/ULAxAIgEhCJVIxNEgAgAAAAAAAACWrApNQcxACgqZjQDVwAgNAMkWzQDJVs0A1cwIDQDIQZbNAMhCFsjCDIGQgMCSCEENAESRDQESSISTDQCEhFEKGRJNQMlWzX/STUFNf6ABIXjoNA0/lCwMQCIBBoiVSMSRDT/iAQdgAgAAAAAAAACqbApNQc0A1cAIDQDJFs0/zQDVzAgNAMhBls0AyEIWzT/CDQDgWBbIwkyBkIDAEkhCQxAAF9IIQU0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/STUFNf6ABK3Elqs0/lCwNP8xABJEsSKyATQDIQhbsggjshA0/rIHszQDVwAgNAMkWzQDJVs0/zQDIQZbIwkyBkIB4iELEkQhEzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/kk1BTX9gATJ6I0MNP1QsDT+iANIMQA0/xIxAIgDMSJVIxIQRIAIAAAAAAAAAnmwKTUHNP80AyRbNP40A1cwIDQDIQZbNP40AyEIWzIGQgImSSEHDEAAq0khCgxAAGshChJEIQw0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFNf6ABNTgGC00/lCwMQA0/xIxAIgCuSJVIxMQRIAIAAAAAAAAAjKwKTUHMQAoKmY0/zQDJFs0AyVbNANXMCA0AyEGWyIyBkIBPyEHEkQhBzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wNANXACA0AyRbNAMlWzEANAMhFFsyBkIAvEkjDEAAWEgjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JFs1/iVbNf0hFFs1/IAEmouRdLA0/zEAEkQ0/zT+FlA0/RZQNPwWUChLAVcAOGdIIQc1ATIGNQJCAZ1IgaCNBogB9CI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hCVs1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsDEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgE/Nf81/jX9Nfw1+zX6NP4iDUEALIAF1RDwzAGwNPo0+xZQNPwWUDT9UDT+FlAoSwFXAFhnSCEMNQEyBjUCQgEAgAXVEPDMALBCANk1/zX+Nf01/DX7Nfo1+TT+NPoMQQAoNPk0+hZQNPsWUDT8UDT9FlA0/hZQKEsBVwBgZ0ghEjUBMgY1AkIAt4AF1RDwzAKwNPk0+hZQNPsWUDT8UDT9FlA0/hZQKEsBVwBgZ0ghEzUBMgY1AkIAhzX/Nf41/TX8Nfs1+jX5Nfg0/iINQQAsNPg0+RZQNPoWUDT7UDT8FlA0/RZQNP4WUChLAVcAaGdIIQQ1ATIGNQJCAEQ0+DT5FlA0+hZQNPtQNPwWUDT9FlAoSwFXAGBnSCEFNQEyBjUCQgAcMRkhDBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEHMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAADSCiJKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 104,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v515",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v516",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v517",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T9",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_Finished",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Joining",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Wagering",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "GamePhase_phase",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v515",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v516",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v517",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v593",
                "type": "bool"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v552",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v622",
                "type": "bool"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v694",
                "type": "address"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v667",
                "type": "bool"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v562",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v602",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v633",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v681",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Player_join",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Player_wager",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Player_join10",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Player_join4",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Player_wager6",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Player_wager9",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v593",
                "type": "bool"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v552",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v622",
                "type": "bool"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v694",
                "type": "address"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v667",
                "type": "bool"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200272038038062002720833981016040819052620000269162000255565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a162000095341560076200014e565b620000ca604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a0909301905281516200014592600292019062000178565b50505062000329565b81620001745760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200018690620002ec565b90600052602060002090601f016020900481019282620001aa5760008555620001f5565b82601f10620001c557805160ff1916838001178555620001f5565b82800160010185558215620001f5579182015b82811115620001f5578251825591602001919060010190620001d8565b506200020392915062000207565b5090565b5b8082111562000203576000815560010162000208565b604051606081016001600160401b03811182821017156200024f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200026957600080fd5b604080519081016001600160401b03811182821017156200029a57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002b457600080fd5b620002be6200021e565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200030157607f821691505b602082108114156200032357634e487b7160e01b600052602260045260246000fd5b50919050565b6123e780620003396000396000f3fe6080604052600436106100f65760003560e01c806379aba1231161008f578063a98bf22311610061578063a98bf223146101ff578063ab53f2c614610212578063c855f5d014610235578063edd136c61461023d578063f32009651461024557005b806379aba123146101bc5780637eea518c146101cf57806383230757146101e2578063a802f0aa146101f757005b80633bc5b7bf116100c85780633bc5b7bf14610161578063414574941461018e5780636da017a0146101965780637435894e146101a957005b806318e67cf3146100ff5780631e93b0f1146101125780632c10a159146101365780633750b4621461014957005b366100fd57005b005b6100fd61010d366004611d26565b61024d565b34801561011e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100fd610144366004611d26565b610271565b610151610291565b604051901515815260200161012d565b34801561016d57600080fd5b5061018161017c366004611d5e565b610370565b60405161012d9190611d91565b61015161039c565b6100fd6101a4366004611d26565b6103cb565b6100fd6101b7366004611d26565b6103eb565b6100fd6101ca366004611d26565b61040b565b6100fd6101dd366004611d26565b61042b565b3480156101ee57600080fd5b50600154610123565b61015161044b565b6100fd61020d366004611d26565b61047a565b34801561021e57600080fd5b5061022761049a565b60405161012d929190611dca565b610151610537565b6101516105ea565b610151610619565b610255611ab1565b61026d61026736849003840184611f18565b82610648565b5050565b610279611ab1565b61026d61028b36849003840184611f34565b82610862565b60008054600614806102a557506000546009145b6102ae57600080fd5b6000546006141561032257306001600160a01b031663edd136c66040518163ffffffff1660e01b81526004016020604051808303816000875af11580156102f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031d9190611f6c565b905090565b6000546009141561036d57306001600160a01b031663a802f0aa6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156102f9573d6000803e3d6000fd5b90565b604080516060810182526000808252602082018190529181019190915261039682610a5a565b92915050565b60006103a6611ae6565b6020810151600090526103b7611ab1565b6103c18282610b32565b6040015192915050565b6103d3611ab1565b61026d6103e536849003840184611f18565b82610d43565b6103f3611ab1565b61026d61040536849003840184611f89565b82610f4d565b610413611ab1565b61026d61042536849003840184611f18565b82610b32565b610433611ab1565b61026d61044536849003840184611f34565b8261113f565b6000610455611ae6565b602081015160009052610466611ab1565b6104708282610648565b60a0015192915050565b610482611ab1565b61026d61049436849003840184611f18565b826112b7565b6000606060005460028080546104af9061200f565b80601f01602080910402602001604051908101604052809291908181526020018280546104db9061200f565b80156105285780601f106104fd57610100808354040283529160200191610528565b820191906000526020600020905b81548152906001019060200180831161050b57829003601f168201915b50505050509050915091509091565b600080546004148061054b5750600054600a145b61055457600080fd5b6000546004141561059f57306001600160a01b031663f32009656040518163ffffffff1660e01b81526004016020604051808303816000875af11580156102f9573d6000803e3d6000fd5b600054600a141561036d57306001600160a01b031663414574946040518163ffffffff1660e01b81526004016020604051808303816000875af11580156102f9573d6000803e3d6000fd5b60006105f4611ae6565b602081015160009052610605611ab1565b61060f8282610d43565b6080015192915050565b6000610623611ae6565b602081015160009052610634611ab1565b61063e82826112b7565b6020015192915050565b610658600a60005414601d6114d0565b815161067390158061066c57508251600154145b601e6114d0565b6000808055600280546106859061200f565b80601f01602080910402602001604051908101604052809291908181526020018280546106b19061200f565b80156106fe5780601f106106d3576101008083540402835291602001916106fe565b820191906000526020600020905b8154815290600101906020018083116106e157829003601f168201915b50505050508060200190518101906107169190612044565b90507f19623dd1c8e630acb28c50c4139a0e2042f380ee519bb2621ddfa8e7ca13d9b633846040516107499291906120ea565b60405180910390a1610779600161075f33610a5a565b51600181111561077157610771611d7b565b14601b6114d0565b61078a81604001513414601c6114d0565b604051600081527f5b4072a458cf5f38e84d797a03f1d3d511d09f119b42a81888e3b8b5c0e657729060200160405180910390a1600060608301526107cd611b15565b815181516001600160a01b039182169052602080840151835190910152604080840180518451909201919091526060808501518451931692019190915260808084015183519091015260a0830151905161082791906114f6565b60208201515260c082015161083d906001611543565b6020808301805190910191909152514360409091015261085c81611592565b50505050565b610872600160005414600a6114d0565b815161088d90158061088657508251600154145b600b6114d0565b60008080556002805461089f9061200f565b80601f01602080910402602001604051908101604052809291908181526020018280546108cb9061200f565b80156109185780601f106108ed57610100808354040283529160200191610918565b820191906000526020600020905b8154815290600101906020018083116108fb57829003601f168201915b50505050508060200190518101906109309190612114565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a1610987341560086114d0565b805161099f906001600160a01b0316331460096114d0565b6109d3604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b031680825260208084015181840190815260408086015181860190815260608088015181880190815260026000554360015583519586019690965292519184019190915251908201529051608082015260a00160405160208183030381529060405260029080519060200190610a53929190611b51565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610aa657610aa6611d7b565b1415610b23576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610ae757610ae7611d7b565b6001811115610af857610af8611d7b565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b610b42600b6000541460216114d0565b8151610b5d901580610b5657508251600154145b60226114d0565b600080805560028054610b6f9061200f565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9b9061200f565b8015610be85780601f10610bbd57610100808354040283529160200191610be8565b820191906000526020600020905b815481529060010190602001808311610bcb57829003601f168201915b5050505050806020019051810190610c00919061222f565b90507f23ab25ff90ab175f27c06d9c6f572bd8c6711034b3bf4029a9427fb5a21a29cc3384604051610c339291906120ea565b60405180910390a1610c473415601f6114d0565b610c7d6001610c5533610a5a565b516001811115610c6757610c67611d7b565b14610c73576001610c76565b60005b60206114d0565b604051600081527f058fbe4ada3dea6de927f08ea8e4231d2e71ff6a1476fbdfe4b030ec3830dfb59060200160405180910390a16000808352338152600460205260409020805462ff00ff19166001179055610cd7611bd5565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a0820151610d299060016114f6565b602080830180519290925290514391015261085c81611792565b610d5360076000541460156114d0565b8151610d6e901580610d6757508251600154145b60166114d0565b600080805560028054610d809061200f565b80601f0160208091040260200160405190810160405280929190818152602001828054610dac9061200f565b8015610df95780601f10610dce57610100808354040283529160200191610df9565b820191906000526020600020905b815481529060010190602001808311610ddc57829003601f168201915b5050505050806020019051810190610e11919061222f565b90507f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe3384604051610e449291906120ea565b60405180910390a1610e5d8160400151341460136114d0565b8051610e9f906001600160a01b03163314610e79576000610e98565b6001610e8433610a5a565b516001811115610e9657610e96611d7b565b145b60146114d0565b604051600081527f22171ef65f82bd21bc248a17c2e298aac3c8a00a01d93f31e3e552ffce971a589060200160405180910390a160006060830152610ee2611b15565b815181516001600160a01b039182169052602080840151835182015260408085018051855183015260608087015186519516940193909352608080860151855190910152915181840180519190915260a0850151815190920191909152514391015261085c81611592565b610f5d60096000541460196114d0565b8151610f78901580610f7157508251600154145b601a6114d0565b600080805560028054610f8a9061200f565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb69061200f565b80156110035780601f10610fd857610100808354040283529160200191611003565b820191906000526020600020905b815481529060010190602001808311610fe657829003601f168201915b505050505080602001905181019061101b919061222f565b604080513381528551602080830191909152860151516001600160a01b03168183015290519192507fde25463286f3c1ec7009263458ab87644651eb394df9e9a00198d884924404a2919081900360600190a161107a341560176114d0565b6060810151611095906001600160a01b0316331460186114d0565b60208301515160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156110d6573d6000803e3d6000fd5b506110df611c0a565b815181516001600160a01b039182169052602080840151835190910152604080840151835190910152606080840151835192169101526080820151611125906001611543565b602080830180519290925290514391015261085c81611917565b61114f600260005414600d6114d0565b815161116a90158061116357508251600154145b600e6114d0565b60008080556002805461117c9061200f565b80601f01602080910402602001604051908101604052809291908181526020018280546111a89061200f565b80156111f55780601f106111ca576101008083540402835291602001916111f5565b820191906000526020600020905b8154815290600101906020018083116111d857829003601f168201915b505050505080602001905181019061120d9190612114565b60408051338152855160208083019190915286015115158183015290519192507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950919081900360600190a16112643415600c6114d0565b61126c611c0a565b815181516001600160a01b0390911690526020808301518251820152604080840151835190910152815133606091820152830151818301805191909152514391015261085c81611917565b6112c760056000541460116114d0565b81516112e29015806112db57508251600154145b60126114d0565b6000808055600280546112f49061200f565b80601f01602080910402602001604051908101604052809291908181526020018280546113209061200f565b801561136d5780601f106113425761010080835404028352916020019161136d565b820191906000526020600020905b81548152906001019060200180831161135057829003601f168201915b5050505050806020019051810190611385919061224b565b90507f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b9433846040516113b89291906120ea565b60405180910390a16113cc3415600f6114d0565b805161141b906001600160a01b031633146113e8576000611414565b60016113f333610a5a565b51600181111561140557611405611d7b565b14611411576001611414565b60005b60106114d0565b604051600081527f1632494ea0cbc5ce3c4a565209eba21836fbe091d17cea72fd35572d28fe3a9d9060200160405180910390a16000808352338152600460205260409020805462ff00ff19166001179055611475611bd5565b815181516001600160a01b039182169052602080840151835182015260408085015184519091015260608085015184519316920191909152608080840151835190910152808201805160009052514391015261085c81611792565b8161026d5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008261150383826122f0565b91508110156103965760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016114ed565b6000826115508382612308565b91508111156103965760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016114ed565b6020808201510151156116dd576115f16040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b03908116825282516020908101518184015283516040908101518185015284516060908101519093169284019290925283516080908101519084015280840180515160a08501525181015160c0840152600a6000554360015590516116b49183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b604051602081830303815290604052600290805190602001906116d8929190611b51565b505050565b6117286040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931692840192909252835160809081015190840152808401515160a084015260096000554360015590516116b49183910161231f565b50565b6040805160a081018252600060208201818152928201819052606082018190526080820152908152815160209081015190830151511015611860576117d5611c3a565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252845160809081015190840152808501515160a0840152600b60005543600155905161183c9183910161231f565b6040516020818303038152906040526002908051906020019061085c929190611b51565b8051600290528051600060609091015280516040517fd305b69f1a84af7e1e87efce73a36b43e6a8ef68c46e5ee0ccd7c379fa9700b5916118a09161236c565b60405180910390a16118b0611c3a565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252845160809081015190840152808501515160a0840152600760005543600155905161183c9183910161231f565b61196f6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526040805160808101825260008082526020828101829052928201819052606082015291015290565b60208201515115611a4e5780516001905280516000604091820152815190517fd305b69f1a84af7e1e87efce73a36b43e6a8ef68c46e5ee0ccd7c379fa9700b5916119b99161236c565b60405180910390a16119c9611c82565b8251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b0151516080808b019182526005600055436001558551978801989098529451938601939093529051908401525190931691810191909152905160a082015260c00161183c565b60208181018051600090819052815190920191909152516040517fd305b69f1a84af7e1e87efce73a36b43e6a8ef68c46e5ee0ccd7c379fa9700b591611a939161236c565b60405180910390a16000808055600181905561026d90600290611cc3565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b604051806040016040528060008152602001611b1060405180602001604052806000151581525090565b905290565b6040518060400160405280611b28611c82565b8152602001611b1060405180606001604052806000815260200160008152602001600081525090565b828054611b5d9061200f565b90600052602060002090601f016020900481019282611b7f5760008555611bc5565b82601f10611b9857805160ff1916838001178555611bc5565b82800160010185558215611bc5579182015b82811115611bc5578251825591602001919060010190611baa565b50611bd1929150611cf9565b5090565b6040518060400160405280611be8611c82565b8152602001611b10604051806040016040528060008152602001600081525090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190611be8565b6040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b508054611ccf9061200f565b6000825580601f10611cdf575050565b601f01602090049060005260206000209081019061178f91905b5b80821115611bd15760008155600101611cfa565b600060408284031215611d2057600080fd5b50919050565b600060408284031215611d3857600080fd5b611d428383611d0e565b9392505050565b6001600160a01b038116811461178f57600080fd5b600060208284031215611d7057600080fd5b8135611d4281611d49565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611da857611da8611d7b565b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b81811015611dfe57858101830151858201606001528201611de2565b81811115611e10576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff81118282101715611e5857634e487b7160e01b600052604160045260246000fd5b60405290565b801515811461178f57600080fd5b6000818303604080821215611e8057600080fd5b805181810167ffffffffffffffff8282108183111715611eb057634e487b7160e01b600052604160045260246000fd5b818452829550863583526020601f1986011215611ecc57600080fd5b835194506020850191508482108183111715611ef857634e487b7160e01b600052604160045260246000fd5b50909152602084013590611f0b82611e5e565b9082526020015292915050565b600060408284031215611f2a57600080fd5b611d428383611e6c565b600060408284031215611f4657600080fd5b611f4e611e27565b823581526020830135611f6081611e5e565b60208201529392505050565b600060208284031215611f7e57600080fd5b8151611d4281611e5e565b60008183036040811215611f9c57600080fd5b611fa4611e27565b833581526020601f1983011215611fba57600080fd5b60405191506020820182811067ffffffffffffffff82111715611fed57634e487b7160e01b600052604160045260246000fd5b6040526020840135611ffe81611d49565b825260208101919091529392505050565b600181811c9082168061202357607f821691505b60208210811415611d2057634e487b7160e01b600052602260045260246000fd5b600060e0828403121561205657600080fd5b60405160e0810181811067ffffffffffffffff8211171561208757634e487b7160e01b600052604160045260246000fd5b604052825161209581611d49565b80825250602083015160208201526040830151604082015260608301516120bb81611d49565b806060830152506080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b038316815260608101611d42602083018480518252602090810151511515910152565b60006080828403121561212657600080fd5b6040516080810181811067ffffffffffffffff8211171561215757634e487b7160e01b600052604160045260246000fd5b604052825161216581611d49565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b600060c082840312156121a357600080fd5b60405160c0810181811067ffffffffffffffff821117156121d457634e487b7160e01b600052604160045260246000fd5b806040525080915082516121e781611d49565b808252506020830151602082015260408301516040820152606083015161220d81611d49565b806060830152506080830151608082015260a083015160a08201525092915050565b600060c0828403121561224157600080fd5b611d428383612191565b600060a0828403121561225d57600080fd5b60405160a0810181811067ffffffffffffffff8211171561228e57634e487b7160e01b600052604160045260246000fd5b604052825161229c81611d49565b80825250602083015160208201526040830151604082015260608301516122c281611d49565b60608201526080928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612303576123036122da565b500190565b60008282101561231a5761231a6122da565b500390565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c08101610396565b815160808201906003811061238357612383611d7b565b808352506020830151151560208301526040830151151560408301526060830151151560608301529291505056fea2646970667358221220382f9091eb98e2c499d9c230e72110698954501d52ec048c4caeb534817c606664736f6c634300080c0033`,
  BytecodeLen: 10016,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:41:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:45:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:131:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:81:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:100:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:118:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:104:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:85:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Game": Game,
  "Player_join": Player_join,
  "Player_wager": Player_wager
  };
export const _APIs = {
  Player: {
    join: Player_join,
    wager: Player_wager
    }
  };

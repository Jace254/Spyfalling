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
    Paying: ctc0,
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
  
  
  const v508 = stdlib.protect(ctc3, interact.setParams, 'for Admin\'s interact field setParams');
  const v509 = v508.amt;
  const v510 = v508.numPlayers;
  const v511 = v508.rounds;
  
  const txn1 = await (ctc.sendrecv({
    args: [v510, v509, v511],
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
      
      const {data: [v518, v519, v520], secs: v522, time: v521, didSend: v35, from: v517 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v518, v519, v520], secs: v522, time: v521, didSend: v35, from: v517 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v517, v518, v519, v520],
    evt_cnt: 0,
    funcNum: 1,
    lct: v521,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v525, time: v524, didSend: v40, from: v523 } = txn2;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v525, time: v524, didSend: v40, from: v523 } = txn2;
  ;
  const v526 = stdlib.addressEq(v517, v523);
  stdlib.assert(v526, {
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
  const {data: [], secs: v530, time: v529, didSend: v48, from: v528 } = txn3;
  ;
  let v531 = v520;
  let v532 = v529;
  
  while (await (async () => {
    const v542 = stdlib.gt(v531, stdlib.checkedBigNumberify('./index.rsh:51:27:decimal', stdlib.UInt_max, '0'));
    
    return v542;})()) {
    const v543 = ['Joining', null];
    null;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v555], secs: v557, time: v556, didSend: v92, from: v554 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v558 = stdlib.addressEq(v554, v517);
    const v559 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v554), null);
    const v560 = {
      None: 0,
      Some: 1
      }[v559[0]];
    const v561 = stdlib.eq(v560, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v562 = v561 ? false : true;
    const v563 = v558 ? v562 : false;
    stdlib.assert(v563, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:62:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:55:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v565 = null;
    await txn4.getOutput('Player_join', 'v565', ctc0, v565);
    await stdlib.mapSet(map0, v554, null);
    let v572 = stdlib.checkedBigNumberify('./index.rsh:84:22:decimal', stdlib.UInt_max, '0');
    let v573 = v556;
    
    while (await (async () => {
      const v585 = stdlib.safeSub(v518, stdlib.checkedBigNumberify('./index.rsh:87:39:decimal', stdlib.UInt_max, '1'));
      const v586 = stdlib.lt(v572, v585);
      
      return v586;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 10,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v598], secs: v600, time: v599, didSend: v203, from: v597 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v602 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v597), null);
      const v603 = {
        None: 0,
        Some: 1
        }[v602[0]];
      const v604 = stdlib.eq(v603, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v605 = v604 ? false : true;
      stdlib.assert(v605, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:89:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:90:20:application call to [unknown function] (defined at: ./index.rsh:90:20:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v607 = null;
      await txn5.getOutput('Player_join', 'v607', ctc0, v607);
      await stdlib.mapSet(map0, v597, null);
      const v614 = stdlib.safeAdd(v572, stdlib.checkedBigNumberify('./index.rsh:93:33:decimal', stdlib.UInt_max, '1'));
      const cv572 = v614;
      const cv573 = v599;
      
      v572 = cv572;
      v573 = cv573;
      
      continue;
      
      }
    const v616 = ['Wagering', null];
    null;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v627], secs: v629, time: v628, didSend: v275, from: v626 } = txn5;
    undefined /* setApiDetails */;
    ;
    const v632 = stdlib.addressEq(v626, v517);
    const v633 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v626), null);
    const v634 = {
      None: 0,
      Some: 1
      }[v633[0]];
    const v635 = stdlib.eq(v634, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v636 = v632 ? v635 : false;
    stdlib.assert(v636, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:72:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:100:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:55:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v638 = null;
    await txn5.getOutput('Player_wager', 'v638', ctc0, v638);
    let v644 = v519;
    let v645 = v572;
    let v646 = v628;
    
    while (await (async () => {
      const v657 = stdlib.gt(v645, stdlib.checkedBigNumberify('./index.rsh:106:32:decimal', stdlib.UInt_max, '0'));
      
      return v657;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 9,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v672], secs: v674, time: v673, didSend: v422, from: v671 } = txn6;
      undefined /* setApiDetails */;
      const v676 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v671), null);
      const v677 = {
        None: 0,
        Some: 1
        }[v676[0]];
      const v678 = stdlib.eq(v677, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v678, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:108:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:107:30:application call to [unknown function] (defined at: ./index.rsh:107:30:function exp)', 'at ./index.rsh:107:30:application call to [unknown function] (defined at: ./index.rsh:107:30:function exp)'],
        msg: null,
        who: 'Admin'
        });
      ;
      const v686 = null;
      await txn6.getOutput('Player_wager', 'v686', ctc0, v686);
      const v692 = stdlib.safeAdd(v644, v519);
      const v693 = stdlib.safeSub(v645, stdlib.checkedBigNumberify('./index.rsh:111:55:decimal', stdlib.UInt_max, '1'));
      const cv644 = v692;
      const cv645 = v693;
      const cv646 = v673;
      
      v644 = cv644;
      v645 = cv645;
      v646 = cv646;
      
      continue;
      
      }
    const v695 = ['Paying', null];
    null;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v700], secs: v702, time: v701, didSend: v464, from: v699 } = txn6;
    ;
    const v703 = stdlib.addressEq(v528, v699);
    stdlib.assert(v703, {
      at: './index.rsh:121:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    ;
    const v708 = stdlib.safeSub(v531, stdlib.checkedBigNumberify('./index.rsh:125:41:decimal', stdlib.UInt_max, '1'));
    const cv531 = v708;
    const cv532 = v701;
    
    v531 = cv531;
    v532 = cv532;
    
    continue;
    
    
    
    
    
    }
  const v709 = ['Finished', null];
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
  const {data: [v518, v519, v520], secs: v522, time: v521, didSend: v35, from: v517 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v525, time: v524, didSend: v40, from: v523 } = txn2;
  ;
  const v526 = stdlib.addressEq(v517, v523);
  stdlib.assert(v526, {
    at: './index.rsh:42:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Game'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v517, v518, v519, v520],
    evt_cnt: 0,
    funcNum: 2,
    lct: v524,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v530, time: v529, didSend: v48, from: v528 } = txn3;
      
      ;
      const v531 = v520;
      const v532 = v529;
      
      if (await (async () => {
        const v542 = stdlib.gt(v531, stdlib.checkedBigNumberify('./index.rsh:51:27:decimal', stdlib.UInt_max, '0'));
        
        return v542;})()) {
        const v543 = ['Joining', null];
        null;
        sim_r.isHalt = false;
        }
      else {
        const v709 = ['Finished', null];
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
  const {data: [], secs: v530, time: v529, didSend: v48, from: v528 } = txn3;
  ;
  let v531 = v520;
  let v532 = v529;
  
  while (await (async () => {
    const v542 = stdlib.gt(v531, stdlib.checkedBigNumberify('./index.rsh:51:27:decimal', stdlib.UInt_max, '0'));
    
    return v542;})()) {
    const v543 = ['Joining', null];
    null;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v555], secs: v557, time: v556, didSend: v92, from: v554 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v558 = stdlib.addressEq(v554, v517);
    const v559 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v554), null);
    const v560 = {
      None: 0,
      Some: 1
      }[v559[0]];
    const v561 = stdlib.eq(v560, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v562 = v561 ? false : true;
    const v563 = v558 ? v562 : false;
    stdlib.assert(v563, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:62:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:55:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v565 = null;
    await txn4.getOutput('Player_join', 'v565', ctc0, v565);
    await stdlib.mapSet(map0, v554, null);
    let v572 = stdlib.checkedBigNumberify('./index.rsh:84:22:decimal', stdlib.UInt_max, '0');
    let v573 = v556;
    
    while (await (async () => {
      const v585 = stdlib.safeSub(v518, stdlib.checkedBigNumberify('./index.rsh:87:39:decimal', stdlib.UInt_max, '1'));
      const v586 = stdlib.lt(v572, v585);
      
      return v586;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 10,
        out_tys: [ctc3],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v598], secs: v600, time: v599, didSend: v203, from: v597 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v602 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v597), null);
      const v603 = {
        None: 0,
        Some: 1
        }[v602[0]];
      const v604 = stdlib.eq(v603, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v605 = v604 ? false : true;
      stdlib.assert(v605, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:89:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:90:20:application call to [unknown function] (defined at: ./index.rsh:90:20:function exp)'],
        msg: null,
        who: 'Game'
        });
      const v607 = null;
      await txn5.getOutput('Player_join', 'v607', ctc0, v607);
      await stdlib.mapSet(map0, v597, null);
      const v614 = stdlib.safeAdd(v572, stdlib.checkedBigNumberify('./index.rsh:93:33:decimal', stdlib.UInt_max, '1'));
      const cv572 = v614;
      const cv573 = v599;
      
      v572 = cv572;
      v573 = cv573;
      
      continue;
      
      }
    const v616 = ['Wagering', null];
    null;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v627], secs: v629, time: v628, didSend: v275, from: v626 } = txn5;
    undefined /* setApiDetails */;
    ;
    const v632 = stdlib.addressEq(v626, v517);
    const v633 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v626), null);
    const v634 = {
      None: 0,
      Some: 1
      }[v633[0]];
    const v635 = stdlib.eq(v634, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v636 = v632 ? v635 : false;
    stdlib.assert(v636, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:72:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:100:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:55:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v638 = null;
    await txn5.getOutput('Player_wager', 'v638', ctc0, v638);
    let v644 = v519;
    let v645 = v572;
    let v646 = v628;
    
    while (await (async () => {
      const v657 = stdlib.gt(v645, stdlib.checkedBigNumberify('./index.rsh:106:32:decimal', stdlib.UInt_max, '0'));
      
      return v657;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 9,
        out_tys: [ctc3],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v672], secs: v674, time: v673, didSend: v422, from: v671 } = txn6;
      undefined /* setApiDetails */;
      const v676 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v671), null);
      const v677 = {
        None: 0,
        Some: 1
        }[v676[0]];
      const v678 = stdlib.eq(v677, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v678, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:108:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:107:30:application call to [unknown function] (defined at: ./index.rsh:107:30:function exp)', 'at ./index.rsh:107:30:application call to [unknown function] (defined at: ./index.rsh:107:30:function exp)'],
        msg: null,
        who: 'Game'
        });
      ;
      const v686 = null;
      await txn6.getOutput('Player_wager', 'v686', ctc0, v686);
      const v692 = stdlib.safeAdd(v644, v519);
      const v693 = stdlib.safeSub(v645, stdlib.checkedBigNumberify('./index.rsh:111:55:decimal', stdlib.UInt_max, '1'));
      const cv644 = v692;
      const cv645 = v693;
      const cv646 = v673;
      
      v644 = cv644;
      v645 = cv645;
      v646 = cv646;
      
      continue;
      
      }
    const v695 = ['Paying', null];
    null;
    const v698 = stdlib.protect(ctc4, await interact.getWinner(), {
      at: './index.rsh:119:51:application',
      fs: ['at ./index.rsh:118:14:application call to [unknown function] (defined at: ./index.rsh:118:18:function exp)'],
      msg: 'getWinner',
      who: 'Game'
      });
    
    const txn6 = await (ctc.sendrecv({
      args: [v517, v518, v519, v528, v531, v644, v698],
      evt_cnt: 1,
      funcNum: 8,
      lct: v646,
      onlyIf: true,
      out_tys: [ctc4],
      pay: [stdlib.checkedBigNumberify('./index.rsh:121:10:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [v700], secs: v702, time: v701, didSend: v464, from: v699 } = txn6;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v700,
          tok: undefined /* Nothing */
          });
        const v708 = stdlib.safeSub(v531, stdlib.checkedBigNumberify('./index.rsh:125:41:decimal', stdlib.UInt_max, '1'));
        const cv531 = v708;
        const cv532 = v701;
        
        await (async () => {
          const v531 = cv531;
          const v532 = cv532;
          
          if (await (async () => {
            const v542 = stdlib.gt(v531, stdlib.checkedBigNumberify('./index.rsh:51:27:decimal', stdlib.UInt_max, '0'));
            
            return v542;})()) {
            const v543 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
            const v709 = ['Finished', null];
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
    const {data: [v700], secs: v702, time: v701, didSend: v464, from: v699 } = txn6;
    ;
    const v703 = stdlib.addressEq(v528, v699);
    stdlib.assert(v703, {
      at: './index.rsh:121:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Game'
      });
    ;
    const v708 = stdlib.safeSub(v531, stdlib.checkedBigNumberify('./index.rsh:125:41:decimal', stdlib.UInt_max, '1'));
    const cv531 = v708;
    const cv532 = v701;
    
    v531 = cv531;
    v532 = cv532;
    
    continue;
    
    
    
    
    
    }
  const v709 = ['Finished', null];
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
  
  
  const [v517, v518, v519, v528, v531] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc3, ctc3, ctc2, ctc3]);
  const v544 = ctc.selfAddress();
  const v546 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:59:9:application',
    fs: ['at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:9:function exp)', 'at ./index.rsh:81:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:55:43:function exp)'],
    msg: 'in',
    who: 'Player_join'
    });
  const v547 = stdlib.addressEq(v544, v517);
  const v548 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v544), null);
  const v549 = {
    None: 0,
    Some: 1
    }[v548[0]];
  const v550 = stdlib.eq(v549, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v551 = v550 ? false : true;
  const v552 = v547 ? v551 : false;
  stdlib.assert(v552, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:61:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:61:20:function exp)', 'at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:9:function exp)', 'at ./index.rsh:81:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:55:43:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v517, v518, v519, v528, v531, v546],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v555], secs: v557, time: v556, didSend: v92, from: v554 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_join"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v554), null);
      const v565 = null;
      const v566 = await txn1.getOutput('Player_join', 'v565', ctc0, v565);
      
      await stdlib.simMapSet(sim_r, 0, v554, null);
      const v971 = stdlib.checkedBigNumberify('./index.rsh:84:22:decimal', stdlib.UInt_max, '0');
      const v973 = stdlib.safeSub(v518, stdlib.checkedBigNumberify('./index.rsh:87:39:decimal', stdlib.UInt_max, '1'));
      const v974 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:84:22:decimal', stdlib.UInt_max, '0'), v973);
      if (v974) {
        sim_r.isHalt = false;
        }
      else {
        const v975 = ['Wagering', null];
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
  const {data: [v555], secs: v557, time: v556, didSend: v92, from: v554 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v558 = stdlib.addressEq(v554, v517);
  const v559 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v554), null);
  const v560 = {
    None: 0,
    Some: 1
    }[v559[0]];
  const v561 = stdlib.eq(v560, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v562 = v561 ? false : true;
  const v563 = v558 ? v562 : false;
  stdlib.assert(v563, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:62:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:55:43:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  const v565 = null;
  const v566 = await txn1.getOutput('Player_join', 'v565', ctc0, v565);
  stdlib.protect(ctc0, await interact.out(v555, v566), {
    at: './index.rsh:59:9:application',
    fs: ['at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:9:function exp)', 'at ./index.rsh:63:10:application call to "k" (defined at: ./index.rsh:59:9:function exp)', 'at ./index.rsh:81:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:55:43:function exp)'],
    msg: 'out',
    who: 'Player_join'
    });
  
  await stdlib.mapSet(map0, v554, null);
  const v971 = stdlib.checkedBigNumberify('./index.rsh:84:22:decimal', stdlib.UInt_max, '0');
  const v973 = stdlib.safeSub(v518, stdlib.checkedBigNumberify('./index.rsh:87:39:decimal', stdlib.UInt_max, '1'));
  const v974 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:84:22:decimal', stdlib.UInt_max, '0'), v973);
  if (v974) {
    return;
    }
  else {
    const v975 = ['Wagering', null];
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
  
  
  const [v517, v518, v519, v528, v531, v572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc2, ctc3, ctc3, ctc2, ctc3, ctc3]);
  const v587 = ctc.selfAddress();
  const v589 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:88:27:application call to [unknown function] (defined at: ./index.rsh:88:27:function exp)', 'at ./index.rsh:88:27:application call to [unknown function] (defined at: ./index.rsh:88:27:function exp)'],
    msg: 'in',
    who: 'Player_join'
    });
  const v590 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v587), null);
  const v591 = {
    None: 0,
    Some: 1
    }[v590[0]];
  const v592 = stdlib.eq(v591, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v593 = v592 ? false : true;
  stdlib.assert(v593, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:89:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:88:27:application call to [unknown function] (defined at: ./index.rsh:88:27:function exp)', 'at ./index.rsh:88:27:application call to [unknown function] (defined at: ./index.rsh:88:27:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v517, v518, v519, v528, v531, v572, v589],
    evt_cnt: 1,
    funcNum: 10,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:88:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v598], secs: v600, time: v599, didSend: v203, from: v597 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_join"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v597), null);
      const v607 = null;
      const v608 = await txn1.getOutput('Player_join', 'v607', ctc0, v607);
      
      await stdlib.simMapSet(sim_r, 0, v597, null);
      const v614 = stdlib.safeAdd(v572, stdlib.checkedBigNumberify('./index.rsh:93:33:decimal', stdlib.UInt_max, '1'));
      const v1012 = v614;
      const v1014 = stdlib.safeSub(v518, stdlib.checkedBigNumberify('./index.rsh:87:39:decimal', stdlib.UInt_max, '1'));
      const v1015 = stdlib.lt(v614, v1014);
      if (v1015) {
        sim_r.isHalt = false;
        }
      else {
        const v1016 = ['Wagering', null];
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
  const {data: [v598], secs: v600, time: v599, didSend: v203, from: v597 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v602 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v597), null);
  const v603 = {
    None: 0,
    Some: 1
    }[v602[0]];
  const v604 = stdlib.eq(v603, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v605 = v604 ? false : true;
  stdlib.assert(v605, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:89:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:90:20:application call to [unknown function] (defined at: ./index.rsh:90:20:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  const v607 = null;
  const v608 = await txn1.getOutput('Player_join', 'v607', ctc0, v607);
  if (v203) {
    stdlib.protect(ctc0, await interact.out(v598, v608), {
      at: './index.rsh:88:11:application',
      fs: ['at ./index.rsh:88:11:application call to [unknown function] (defined at: ./index.rsh:88:11:function exp)', 'at ./index.rsh:91:10:application call to "k" (defined at: ./index.rsh:90:20:function exp)', 'at ./index.rsh:90:20:application call to [unknown function] (defined at: ./index.rsh:90:20:function exp)'],
      msg: 'out',
      who: 'Player_join'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v597, null);
  const v614 = stdlib.safeAdd(v572, stdlib.checkedBigNumberify('./index.rsh:93:33:decimal', stdlib.UInt_max, '1'));
  const v1012 = v614;
  const v1014 = stdlib.safeSub(v518, stdlib.checkedBigNumberify('./index.rsh:87:39:decimal', stdlib.UInt_max, '1'));
  const v1015 = stdlib.lt(v614, v1014);
  if (v1015) {
    return;
    }
  else {
    const v1016 = ['Wagering', null];
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
  
  
  const [v517, v518, v519, v528, v531, v572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc2, ctc3, ctc3, ctc2, ctc3, ctc3]);
  const v617 = ctc.selfAddress();
  const v619 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:68:9:application',
    fs: ['at ./index.rsh:68:9:application call to [unknown function] (defined at: ./index.rsh:68:9:function exp)', 'at ./index.rsh:100:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:55:43:function exp)'],
    msg: 'in',
    who: 'Player_wager'
    });
  const v620 = stdlib.addressEq(v617, v517);
  const v621 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v617), null);
  const v622 = {
    None: 0,
    Some: 1
    }[v621[0]];
  const v623 = stdlib.eq(v622, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v624 = v620 ? v623 : false;
  stdlib.assert(v624, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:71:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:9:application call to [unknown function] (defined at: ./index.rsh:71:20:function exp)', 'at ./index.rsh:68:9:application call to [unknown function] (defined at: ./index.rsh:68:9:function exp)', 'at ./index.rsh:100:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:55:43:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v517, v518, v519, v528, v531, v572, v619],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v519, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v627], secs: v629, time: v628, didSend: v275, from: v626 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_wager"
        });
      sim_r.txns.push({
        amt: v519,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v626), null);
      const v638 = null;
      const v639 = await txn1.getOutput('Player_wager', 'v638', ctc0, v638);
      
      const v1053 = v519;
      const v1054 = v572;
      const v1056 = stdlib.gt(v572, stdlib.checkedBigNumberify('./index.rsh:106:32:decimal', stdlib.UInt_max, '0'));
      if (v1056) {
        sim_r.isHalt = false;
        }
      else {
        const v1057 = ['Paying', null];
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
  const {data: [v627], secs: v629, time: v628, didSend: v275, from: v626 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v632 = stdlib.addressEq(v626, v517);
  const v633 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v626), null);
  const v634 = {
    None: 0,
    Some: 1
    }[v633[0]];
  const v635 = stdlib.eq(v634, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v636 = v632 ? v635 : false;
  stdlib.assert(v636, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:72:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:100:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:55:43:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  const v638 = null;
  const v639 = await txn1.getOutput('Player_wager', 'v638', ctc0, v638);
  stdlib.protect(ctc0, await interact.out(v627, v639), {
    at: './index.rsh:68:9:application',
    fs: ['at ./index.rsh:68:9:application call to [unknown function] (defined at: ./index.rsh:68:9:function exp)', 'at ./index.rsh:73:10:application call to "k" (defined at: ./index.rsh:68:9:function exp)', 'at ./index.rsh:100:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:55:43:function exp)'],
    msg: 'out',
    who: 'Player_wager'
    });
  
  const v1053 = v519;
  const v1054 = v572;
  const v1056 = stdlib.gt(v572, stdlib.checkedBigNumberify('./index.rsh:106:32:decimal', stdlib.UInt_max, '0'));
  if (v1056) {
    return;
    }
  else {
    const v1057 = ['Paying', null];
    null;
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
  
  
  const [v517, v518, v519, v528, v531, v644, v645] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), [ctc2, ctc3, ctc3, ctc2, ctc3, ctc3, ctc3]);
  const v658 = ctc.selfAddress();
  const v660 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:107:30:application call to [unknown function] (defined at: ./index.rsh:107:30:function exp)', 'at ./index.rsh:107:30:application call to [unknown function] (defined at: ./index.rsh:107:30:function exp)'],
    msg: 'in',
    who: 'Player_wager'
    });
  const v661 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v658), null);
  const v662 = {
    None: 0,
    Some: 1
    }[v661[0]];
  const v663 = stdlib.eq(v662, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v663, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:108:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:107:30:application call to [unknown function] (defined at: ./index.rsh:107:30:function exp)', 'at ./index.rsh:107:30:application call to [unknown function] (defined at: ./index.rsh:107:30:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v517, v518, v519, v528, v531, v644, v645, v660],
    evt_cnt: 1,
    funcNum: 9,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v519, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v672], secs: v674, time: v673, didSend: v422, from: v671 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_wager"
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v671), null);
      sim_r.txns.push({
        amt: v519,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v686 = null;
      const v687 = await txn1.getOutput('Player_wager', 'v686', ctc0, v686);
      
      const v692 = stdlib.safeAdd(v644, v519);
      const v693 = stdlib.safeSub(v645, stdlib.checkedBigNumberify('./index.rsh:111:55:decimal', stdlib.UInt_max, '1'));
      const v1065 = v692;
      const v1066 = v693;
      const v1068 = stdlib.gt(v693, stdlib.checkedBigNumberify('./index.rsh:106:32:decimal', stdlib.UInt_max, '0'));
      if (v1068) {
        sim_r.isHalt = false;
        }
      else {
        const v1069 = ['Paying', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc2, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v672], secs: v674, time: v673, didSend: v422, from: v671 } = txn1;
  undefined /* setApiDetails */;
  const v676 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v671), null);
  const v677 = {
    None: 0,
    Some: 1
    }[v676[0]];
  const v678 = stdlib.eq(v677, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v678, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:108:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:107:30:application call to [unknown function] (defined at: ./index.rsh:107:30:function exp)', 'at ./index.rsh:107:30:application call to [unknown function] (defined at: ./index.rsh:107:30:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  ;
  const v686 = null;
  const v687 = await txn1.getOutput('Player_wager', 'v686', ctc0, v686);
  if (v422) {
    stdlib.protect(ctc0, await interact.out(v672, v687), {
      at: './index.rsh:107:13:application',
      fs: ['at ./index.rsh:107:13:application call to [unknown function] (defined at: ./index.rsh:107:13:function exp)', 'at ./index.rsh:110:12:application call to "k" (defined at: ./index.rsh:109:27:function exp)', 'at ./index.rsh:109:27:application call to [unknown function] (defined at: ./index.rsh:109:27:function exp)'],
      msg: 'out',
      who: 'Player_wager'
      });
    }
  else {
    }
  
  const v692 = stdlib.safeAdd(v644, v519);
  const v693 = stdlib.safeSub(v645, stdlib.checkedBigNumberify('./index.rsh:111:55:decimal', stdlib.UInt_max, '1'));
  const v1065 = v692;
  const v1066 = v693;
  const v1068 = stdlib.gt(v693, stdlib.checkedBigNumberify('./index.rsh:106:32:decimal', stdlib.UInt_max, '0'));
  if (v1068) {
    return;
    }
  else {
    const v1069 = ['Paying', null];
    null;
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
  appApproval: `BiAVAAEgKAoJUAJYCAQGBdDx1cIM/ob39Q3F/MCsDsH7wMcIwvb++gsLBzAmAwEAAAEBIjUAMRhBBWUpZEkiWzUBIQlbNQIxGSMSQQAIMQAoKGZCBTM2GgAXSUEAgyI1BCM1BkkhDQxAADlJIQ4MQAAqSSEPDEAACCEPEkQpQgJGIQ4SRDQBSSEEDEAAByEEEkRCAAshChJEQv/hIQ0SRClCAGNJIRAMQAAqSSERDEAACCEREkQpQgCyIRASRDQBSSEFDEAAByEFEkRC/+ghCxJEQgAIgZvm054FEkQpQgFkNhoCFzUENhoDNhoBF0khCwxAAcBJIQUMQADfSSEEDEAAaCEEEkQhEjQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AE33TyOjT/ULAxAIgEjiJVIxNEgAgAAAAAAAACX7ApNQcxACgqZjQDVwAgNAMkWzQDJVs0A1cwIDQDIQZbNAMhCFsjCDIGQgMCSCEENAESRDQESSISTDQCEhFEKGRJNQMlWzX/STUFNf6ABIXjoNA0/lCwMQCIBCQiVSMSRDT/iAQngAgAAAAAAAACrrApNQc0A1cAIDQDJFs0/zQDVzAgNAMhBls0AyEIWzT/CDQDgWBbIwkyBkIDAkkhCQxAAF9IIQU0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/STUFNf6ABK3Elqs0/lCwNP8xABJEsSKyATQDIQhbsggjshA0/rIHszQDVwAgNAMkWzQDJVs0/zQDIQZbIwkyBkIB4iELEkQhEzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/kk1BTX9gATJ6I0MNP1QsDT+iANSMQA0/xIxAIgDOyJVIxIQRIAIAAAAAAAAAn6wKTUHNP80AyRbNP40A1cwIDQDIQZbNP40AyEIWzIGQgIoSSEHDEAAq0khCgxAAGshChJEIQw0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFNf6ABNTgGC00/lCwMQA0/xIxAIgCwyJVIxMQRIAIAAAAAAAAAjWwKTUHMQAoKmY0/zQDJFs0AyVbNANXMCA0AyEGWyIyBkIBPyEHEkQhBzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wNANXACA0AyRbNAMlWzEANAMhFFsyBkIAvEkjDEAAWEgjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JFs1/iVbNf0hFFs1/IAEmouRdLA0/zEAEkQ0/zT+FlA0/RZQNPwWUChLAVcAOGdIIQc1ATIGNQJCAadIgaCNBogB/iI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hCVs1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsDEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgFJNf81/jX9Nfw1+zX6NP4iDUEALIAF1RDwzAGwNPo0+xZQNPwWUDT9UDT+FlAoSwFXAFhnSCEMNQEyBjUCQgEKgAXVEPDMALBCAOM1/zX+Nf01/DX7Nfo1+TT+NPojCQxBACg0+TT6FlA0+xZQNPxQNP0WUDT+FlAoSwFXAGBnSCESNQEyBjUCQgC/gAXVEPDMA7A0+TT6FlA0+xZQNPxQNP0WUDT+FlAoSwFXAGBnSCETNQEyBjUCQgCPNf81/jX9Nfw1+zX6Nfk1+DT+Ig1BACw0+DT5FlA0+hZQNPtQNPwWUDT9FlA0/hZQKEsBVwBoZ0ghBDUBMgY1AkIATIAF1RDwzAKwNPg0+RZQNPoWUDT7UDT8FlA0/RZQKEsBVwBgZ0ghBTUBMgY1AkIAHDEZIQwSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBzE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAAA0goiShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "name": "v518",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v519",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v520",
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
            "name": "_Paying",
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
                "name": "v518",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v519",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v520",
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
                "name": "v598",
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
                "name": "v555",
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
                "name": "v627",
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
                "name": "v700",
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
                "name": "v672",
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
    "name": "_reach_oe_v565",
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
    "name": "_reach_oe_v607",
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
    "name": "_reach_oe_v638",
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
    "name": "_reach_oe_v686",
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
                "name": "v598",
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
                "name": "v555",
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
                "name": "v627",
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
                "name": "v700",
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
                "name": "v672",
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
  Bytecode: `0x60806040526040516200277538038062002775833981016040819052620000269162000255565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a162000095341560076200014e565b620000ca604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a0909301905281516200014592600292019062000178565b50505062000329565b81620001745760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200018690620002ec565b90600052602060002090601f016020900481019282620001aa5760008555620001f5565b82601f10620001c557805160ff1916838001178555620001f5565b82800160010185558215620001f5579182015b82811115620001f5578251825591602001919060010190620001d8565b506200020392915062000207565b5090565b5b8082111562000203576000815560010162000208565b604051606081016001600160401b03811182821017156200024f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200026957600080fd5b604080519081016001600160401b03811182821017156200029a57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002b457600080fd5b620002be6200021e565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200030157607f821691505b602082108114156200032357634e487b7160e01b600052602260045260246000fd5b50919050565b61243c80620003396000396000f3fe6080604052600436106100f65760003560e01c806379aba1231161008f578063a98bf22311610061578063a98bf223146101ff578063ab53f2c614610212578063c855f5d014610235578063edd136c61461023d578063f32009651461024557005b806379aba123146101bc5780637eea518c146101cf57806383230757146101e2578063a802f0aa146101f757005b80633bc5b7bf116100c85780633bc5b7bf14610161578063414574941461018e5780636da017a0146101965780637435894e146101a957005b806318e67cf3146100ff5780631e93b0f1146101125780632c10a159146101365780633750b4621461014957005b366100fd57005b005b6100fd61010d366004611d4f565b61024d565b34801561011e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100fd610144366004611d4f565b610271565b610151610291565b604051901515815260200161012d565b34801561016d57600080fd5b5061018161017c366004611d87565b610370565b60405161012d9190611dba565b61015161039c565b6100fd6101a4366004611d4f565b6103cb565b6100fd6101b7366004611d4f565b6103eb565b6100fd6101ca366004611d4f565b61040b565b6100fd6101dd366004611d4f565b61042b565b3480156101ee57600080fd5b50600154610123565b61015161044b565b6100fd61020d366004611d4f565b61047a565b34801561021e57600080fd5b5061022761049a565b60405161012d929190611df3565b610151610537565b6101516105ea565b610151610619565b610255611ad3565b61026d61026736849003840184611f41565b82610648565b5050565b610279611ad3565b61026d61028b36849003840184611f5d565b82610862565b60008054600614806102a557506000546009145b6102ae57600080fd5b6000546006141561032257306001600160a01b031663edd136c66040518163ffffffff1660e01b81526004016020604051808303816000875af11580156102f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031d9190611f95565b905090565b6000546009141561036d57306001600160a01b031663a802f0aa6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156102f9573d6000803e3d6000fd5b90565b604080516060810182526000808252602082018190529181019190915261039682610a5a565b92915050565b60006103a6611b08565b6020810151600090526103b7611ad3565b6103c18282610b32565b6040015192915050565b6103d3611ad3565b61026d6103e536849003840184611f41565b82610d43565b6103f3611ad3565b61026d61040536849003840184611fb2565b82610f4d565b610413611ad3565b61026d61042536849003840184611f41565b82610b32565b610433611ad3565b61026d61044536849003840184611f5d565b8261113f565b6000610455611b08565b602081015160009052610466611ad3565b6104708282610648565b60a0015192915050565b610482611ad3565b61026d61049436849003840184611f41565b826112b7565b6000606060005460028080546104af90612038565b80601f01602080910402602001604051908101604052809291908181526020018280546104db90612038565b80156105285780601f106104fd57610100808354040283529160200191610528565b820191906000526020600020905b81548152906001019060200180831161050b57829003601f168201915b50505050509050915091509091565b600080546004148061054b5750600054600a145b61055457600080fd5b6000546004141561059f57306001600160a01b031663f32009656040518163ffffffff1660e01b81526004016020604051808303816000875af11580156102f9573d6000803e3d6000fd5b600054600a141561036d57306001600160a01b031663414574946040518163ffffffff1660e01b81526004016020604051808303816000875af11580156102f9573d6000803e3d6000fd5b60006105f4611b08565b602081015160009052610605611ad3565b61060f8282610d43565b6080015192915050565b6000610623611b08565b602081015160009052610634611ad3565b61063e82826112b7565b6020015192915050565b610658600a60005414601d6114d0565b815161067390158061066c57508251600154145b601e6114d0565b60008080556002805461068590612038565b80601f01602080910402602001604051908101604052809291908181526020018280546106b190612038565b80156106fe5780601f106106d3576101008083540402835291602001916106fe565b820191906000526020600020905b8154815290600101906020018083116106e157829003601f168201915b5050505050806020019051810190610716919061206d565b90507f19623dd1c8e630acb28c50c4139a0e2042f380ee519bb2621ddfa8e7ca13d9b63384604051610749929190612113565b60405180910390a1610779600161075f33610a5a565b51600181111561077157610771611da4565b14601b6114d0565b61078a81604001513414601c6114d0565b604051600081527f752e9b1578068ee3ce599a3db28034d334a1e3613cce9f0ebd87e7a2c1180b899060200160405180910390a1600060608301526107cd611b37565b815181516001600160a01b039182169052602080840151835190910152604080840180518451909201919091526060808501518451931692019190915260808084015183519091015260a0830151905161082791906114f6565b60208201515260c082015161083d906001611543565b6020808301805190910191909152514360409091015261085c81611592565b50505050565b610872600160005414600a6114d0565b815161088d90158061088657508251600154145b600b6114d0565b60008080556002805461089f90612038565b80601f01602080910402602001604051908101604052809291908181526020018280546108cb90612038565b80156109185780601f106108ed57610100808354040283529160200191610918565b820191906000526020600020905b8154815290600101906020018083116108fb57829003601f168201915b5050505050806020019051810190610930919061213d565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a1610987341560086114d0565b805161099f906001600160a01b0316331460096114d0565b6109d3604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b031680825260208084015181840190815260408086015181860190815260608088015181880190815260026000554360015583519586019690965292519184019190915251908201529051608082015260a00160405160208183030381529060405260029080519060200190610a53929190611b73565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610aa657610aa6611da4565b1415610b23576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610ae757610ae7611da4565b6001811115610af857610af8611da4565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b610b42600b6000541460216114d0565b8151610b5d901580610b5657508251600154145b60226114d0565b600080805560028054610b6f90612038565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9b90612038565b8015610be85780601f10610bbd57610100808354040283529160200191610be8565b820191906000526020600020905b815481529060010190602001808311610bcb57829003601f168201915b5050505050806020019051810190610c009190612258565b90507f23ab25ff90ab175f27c06d9c6f572bd8c6711034b3bf4029a9427fb5a21a29cc3384604051610c33929190612113565b60405180910390a1610c473415601f6114d0565b610c7d6001610c5533610a5a565b516001811115610c6757610c67611da4565b14610c73576001610c76565b60005b60206114d0565b604051600081527f0c2eec621833fd156e2656a67e5e32b292fb693a2b9d9de5a54c4d03271cb3d29060200160405180910390a16000808352338152600460205260409020805462ff00ff19166001179055610cd7611bf7565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a0820151610d299060016114f6565b602080830180519290925290514391015261085c816117ef565b610d5360076000541460156114d0565b8151610d6e901580610d6757508251600154145b60166114d0565b600080805560028054610d8090612038565b80601f0160208091040260200160405190810160405280929190818152602001828054610dac90612038565b8015610df95780601f10610dce57610100808354040283529160200191610df9565b820191906000526020600020905b815481529060010190602001808311610ddc57829003601f168201915b5050505050806020019051810190610e119190612258565b90507f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe3384604051610e44929190612113565b60405180910390a1610e5d8160400151341460136114d0565b8051610e9f906001600160a01b03163314610e79576000610e98565b6001610e8433610a5a565b516001811115610e9657610e96611da4565b145b60146114d0565b604051600081527fd2081d22107aa3ccd0b55de93ba7cf866764b36a82faed58ce2dd0a6ab5b26f99060200160405180910390a160006060830152610ee2611b37565b815181516001600160a01b039182169052602080840151835182015260408085018051855183015260608087015186519516940193909352608080860151855190910152915181840180519190915260a0850151815190920191909152514391015261085c81611592565b610f5d60096000541460196114d0565b8151610f78901580610f7157508251600154145b601a6114d0565b600080805560028054610f8a90612038565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb690612038565b80156110035780601f10610fd857610100808354040283529160200191611003565b820191906000526020600020905b815481529060010190602001808311610fe657829003601f168201915b505050505080602001905181019061101b9190612258565b604080513381528551602080830191909152860151516001600160a01b03168183015290519192507fde25463286f3c1ec7009263458ab87644651eb394df9e9a00198d884924404a2919081900360600190a161107a341560176114d0565b6060810151611095906001600160a01b0316331460186114d0565b60208301515160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156110d6573d6000803e3d6000fd5b506110df611c2c565b815181516001600160a01b039182169052602080840151835190910152604080840151835190910152606080840151835192169101526080820151611125906001611543565b602080830180519290925290514391015261085c8161194f565b61114f600260005414600d6114d0565b815161116a90158061116357508251600154145b600e6114d0565b60008080556002805461117c90612038565b80601f01602080910402602001604051908101604052809291908181526020018280546111a890612038565b80156111f55780601f106111ca576101008083540402835291602001916111f5565b820191906000526020600020905b8154815290600101906020018083116111d857829003601f168201915b505050505080602001905181019061120d919061213d565b60408051338152855160208083019190915286015115158183015290519192507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950919081900360600190a16112643415600c6114d0565b61126c611c2c565b815181516001600160a01b0390911690526020808301518251820152604080840151835190910152815133606091820152830151818301805191909152514391015261085c8161194f565b6112c760056000541460116114d0565b81516112e29015806112db57508251600154145b60126114d0565b6000808055600280546112f490612038565b80601f016020809104026020016040519081016040528092919081815260200182805461132090612038565b801561136d5780601f106113425761010080835404028352916020019161136d565b820191906000526020600020905b81548152906001019060200180831161135057829003601f168201915b50505050508060200190518101906113859190612274565b90507f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b9433846040516113b8929190612113565b60405180910390a16113cc3415600f6114d0565b805161141b906001600160a01b031633146113e8576000611414565b60016113f333610a5a565b51600181111561140557611405611da4565b14611411576001611414565b60005b60106114d0565b604051600081527f2a026177752edddfd5cbeb5326765b149d7b982eb535756202f67c13b8dbf8ce9060200160405180910390a16000808352338152600460205260409020805462ff00ff19166001179055611475611bf7565b815181516001600160a01b039182169052602080840151835182015260408085015184519091015260608085015184519316920191909152608080840151835190910152808201805160009052514391015261085c816117ef565b8161026d5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826115038382612319565b91508110156103965760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016114ed565b6000826115508382612331565b91508111156103965760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016114ed565b6040805160c081018252600060208201818152928201819052606082018190526080820181905260a0820152908152602080830151015115611707576116206040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925284516080908101519084015280850180515160a08501525181015160c0840152600a6000554360015590516116e39183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b6040516020818303038152906040526002908051906020019061085c929190611b73565b8051600290528051600060609091015280516040516000805160206123e78339815191529161173591612348565b60405180910390a16117886040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252845160809081015190840152808501515160a084015260096000554360015590516116e391839101612399565b6040805160c081018252600060208201818152928201819052606082018190526080820181905260a082015290815281516020015161182f906001611543565b60208301515110156118aa57611843611c5c565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252845160809081015190840152808501515160a0840152600b6000554360015590516116e391839101612399565b8051600390528051600060809091015280516040516000805160206123e7833981519152916118d891612348565b60405180910390a16118e8611c5c565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252845160809081015190840152808501515160a084015260076000554360015590516116e391839101612399565b6119b56040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b60208201515115611a825780516001905280516000604091820152815190516000805160206123e7833981519152916119ed91612348565b60405180910390a16119fd611ca4565b8251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b0151516080808b019182526005600055436001558551978801989098529451938601939093529051908401525190931691810191909152905160a082015260c0016116e3565b60208181018051600090819052815190920191909152516040516000805160206123e783398151915291611ab591612348565b60405180910390a16000808055600181905561026d90600290611ce5565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b604051806040016040528060008152602001611b3260405180602001604052806000151581525090565b905290565b6040518060400160405280611b4a611ca4565b8152602001611b3260405180606001604052806000815260200160008152602001600081525090565b828054611b7f90612038565b90600052602060002090601f016020900481019282611ba15760008555611be7565b82601f10611bba57805160ff1916838001178555611be7565b82800160010185558215611be7579182015b82811115611be7578251825591602001919060010190611bcc565b50611bf3929150611d22565b5090565b6040518060400160405280611c0a611ca4565b8152602001611b32604051806040016040528060008152602001600081525090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190611c0a565b6040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b508054611cf190612038565b6000825580601f10611d01575050565b601f016020900490600052602060002090810190611d1f9190611d22565b50565b5b80821115611bf35760008155600101611d23565b600060408284031215611d4957600080fd5b50919050565b600060408284031215611d6157600080fd5b611d6b8383611d37565b9392505050565b6001600160a01b0381168114611d1f57600080fd5b600060208284031215611d9957600080fd5b8135611d6b81611d72565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611dd157611dd1611da4565b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b81811015611e2757858101830151858201606001528201611e0b565b81811115611e39576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff81118282101715611e8157634e487b7160e01b600052604160045260246000fd5b60405290565b8015158114611d1f57600080fd5b6000818303604080821215611ea957600080fd5b805181810167ffffffffffffffff8282108183111715611ed957634e487b7160e01b600052604160045260246000fd5b818452829550863583526020601f1986011215611ef557600080fd5b835194506020850191508482108183111715611f2157634e487b7160e01b600052604160045260246000fd5b50909152602084013590611f3482611e87565b9082526020015292915050565b600060408284031215611f5357600080fd5b611d6b8383611e95565b600060408284031215611f6f57600080fd5b611f77611e50565b823581526020830135611f8981611e87565b60208201529392505050565b600060208284031215611fa757600080fd5b8151611d6b81611e87565b60008183036040811215611fc557600080fd5b611fcd611e50565b833581526020601f1983011215611fe357600080fd5b60405191506020820182811067ffffffffffffffff8211171561201657634e487b7160e01b600052604160045260246000fd5b604052602084013561202781611d72565b825260208101919091529392505050565b600181811c9082168061204c57607f821691505b60208210811415611d4957634e487b7160e01b600052602260045260246000fd5b600060e0828403121561207f57600080fd5b60405160e0810181811067ffffffffffffffff821117156120b057634e487b7160e01b600052604160045260246000fd5b60405282516120be81611d72565b80825250602083015160208201526040830151604082015260608301516120e481611d72565b806060830152506080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b038316815260608101611d6b602083018480518252602090810151511515910152565b60006080828403121561214f57600080fd5b6040516080810181811067ffffffffffffffff8211171561218057634e487b7160e01b600052604160045260246000fd5b604052825161218e81611d72565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b600060c082840312156121cc57600080fd5b60405160c0810181811067ffffffffffffffff821117156121fd57634e487b7160e01b600052604160045260246000fd5b8060405250809150825161221081611d72565b808252506020830151602082015260408301516040820152606083015161223681611d72565b806060830152506080830151608082015260a083015160a08201525092915050565b600060c0828403121561226a57600080fd5b611d6b83836121ba565b600060a0828403121561228657600080fd5b60405160a0810181811067ffffffffffffffff821117156122b757634e487b7160e01b600052604160045260246000fd5b60405282516122c581611d72565b80825250602083015160208201526040830151604082015260608301516122eb81611d72565b60608201526080928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561232c5761232c612303565b500190565b60008282101561234357612343612303565b500390565b815160a08201906004811061235f5761235f611da4565b8083525060208301511515602083015260408301511515604083015260608301511515606083015260808301511515608083015292915050565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c0810161039656fef88bb62b49e22271e2178455548b4db1a038b1f21e8577f7ccc0bf3e3e6399f3a26469706673582212209ed686e857814828d6b3b49fa8ced3080287ab6aff8b7170a29a26a035baf26e64736f6c634300080c0033`,
  BytecodeLen: 10101,
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
    at: './index.rsh:130:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:80:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:99:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:117:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:103:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:84:19:after expr stmt semicolon',
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

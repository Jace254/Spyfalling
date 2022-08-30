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
    CheckingWin: ctc0,
    Finished: ctc0,
    Joining: ctc0,
    PayingWinners: ctc0,
    PickingRoles: ctc0,
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
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc3,
    Some: ctc1
    });
  const map0_ctc = ctc4;
  
  const map1_ctc = ctc5;
  
  const map2_ctc = ctc4;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      14: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1],
      15: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1],
      17: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      18: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1],
      20: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      21: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      24: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1],
      25: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1],
      27: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      28: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1],
      30: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      31: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      32: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      33: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      34: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1]
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
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc1, ctc3, ctc1]);
  return {
    mapDataTy: ctc4
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Object({
    amt: ctc2,
    numPlayers: ctc2,
    rounds: ctc2
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  
  const v1178 = stdlib.protect(ctc4, interact.setParams, 'for Admin\'s interact field setParams');
  const v1179 = v1178.amt;
  const v1180 = v1178.numPlayers;
  const v1181 = v1178.rounds;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1180, v1179, v1181],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:60:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1188, v1189, v1190], secs: v1192, time: v1191, didSend: v48, from: v1187 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v1188, v1189, v1190], secs: v1192, time: v1191, didSend: v48, from: v1187 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1190],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1191,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1195, time: v1194, didSend: v53, from: v1193 } = txn2;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1195, time: v1194, didSend: v53, from: v1193 } = txn2;
  ;
  const v1196 = stdlib.addressEq(v1187, v1193);
  stdlib.assert(v1196, {
    at: './index.rsh:62:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:63:23:application',
    fs: ['at ./index.rsh:63:23:application call to [unknown function] (defined at: ./index.rsh:63:23:function exp)', 'at ./index.rsh:63:23:application call to "liftedInteract" (defined at: ./index.rsh:63:23:application)'],
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
  const {data: [], secs: v1200, time: v1199, didSend: v61, from: v1198 } = txn3;
  ;
  let v1201 = v1190;
  let v1202 = v1199;
  let v1209 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1212 = stdlib.gt(v1201, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
    
    return v1212;})()) {
    const v1213 = ['Joining', null];
    null;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1225], secs: v1227, time: v1226, didSend: v106, from: v1224 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v1228 = stdlib.addressEq(v1224, v1187);
    const v1229 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1224), null);
    const v1230 = {
      None: 0,
      Some: 1
      }[v1229[0]];
    const v1231 = stdlib.eq(v1230, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1232 = v1231 ? false : true;
    const v1233 = v1228 ? v1232 : false;
    stdlib.assert(v1233, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:154:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1235 = null;
    await txn4.getOutput('Player_join', 'v1235', ctc0, v1235);
    await stdlib.mapSet(map0, v1224, null);
    let v1242 = stdlib.checkedBigNumberify('./index.rsh:157:22:decimal', stdlib.UInt_max, '0');
    let v1243 = v1226;
    let v1250 = v1209;
    
    while (await (async () => {
      const v1254 = stdlib.lt(v1242, v1188);
      
      return v1254;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 33,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1266], secs: v1268, time: v1267, didSend: v215, from: v1265 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v1270 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1265), null);
      const v1271 = {
        None: 0,
        Some: 1
        }[v1270[0]];
      const v1272 = stdlib.eq(v1271, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1273 = v1272 ? false : true;
      stdlib.assert(v1273, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:163:20:application call to [unknown function] (defined at: ./index.rsh:163:20:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v1275 = null;
      await txn5.getOutput('Player_join', 'v1275', ctc0, v1275);
      await stdlib.mapSet(map0, v1265, null);
      const v1282 = stdlib.safeAdd(v1242, stdlib.checkedBigNumberify('./index.rsh:166:33:decimal', stdlib.UInt_max, '1'));
      const cv1242 = v1282;
      const cv1243 = v1267;
      const cv1250 = v1250;
      
      v1242 = cv1242;
      v1243 = cv1243;
      v1250 = cv1250;
      
      continue;
      
      }
    const v1284 = ['Wagering', null];
    null;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1295], secs: v1297, time: v1296, didSend: v287, from: v1294 } = txn5;
    undefined /* setApiDetails */;
    const v1299 = stdlib.add(v1250, v1189);
    ;
    const v1300 = stdlib.addressEq(v1294, v1187);
    const v1301 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1294), null);
    const v1302 = {
      None: 0,
      Some: 1
      }[v1301[0]];
    const v1303 = stdlib.eq(v1302, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1304 = v1300 ? v1303 : false;
    stdlib.assert(v1304, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:95:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1306 = null;
    await txn5.getOutput('Player_wager', 'v1306', ctc0, v1306);
    let v1312 = v1189;
    let v1313 = v1242;
    let v1314 = v1296;
    let v1321 = v1299;
    
    while (await (async () => {
      const v1325 = stdlib.gt(v1313, stdlib.checkedBigNumberify('./index.rsh:179:32:decimal', stdlib.UInt_max, '0'));
      
      return v1325;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 32,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1340], secs: v1342, time: v1341, didSend: v434, from: v1339 } = txn6;
      undefined /* setApiDetails */;
      const v1344 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1339), null);
      const v1345 = {
        None: 0,
        Some: 1
        }[v1344[0]];
      const v1346 = stdlib.eq(v1345, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1346, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:181:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v1349 = stdlib.add(v1321, v1189);
      ;
      const v1354 = null;
      await txn6.getOutput('Player_wager', 'v1354', ctc0, v1354);
      const v1360 = stdlib.safeAdd(v1312, v1189);
      const v1361 = stdlib.safeSub(v1313, stdlib.checkedBigNumberify('./index.rsh:184:55:decimal', stdlib.UInt_max, '1'));
      const cv1312 = v1360;
      const cv1313 = v1361;
      const cv1314 = v1341;
      const cv1321 = v1349;
      
      v1312 = cv1312;
      v1313 = cv1313;
      v1314 = cv1314;
      v1321 = cv1321;
      
      continue;
      
      }
    const v1363 = ['PickingRoles', null];
    null;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1376], secs: v1378, time: v1377, didSend: v502, from: v1375 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v1379 = v1376[stdlib.checkedBigNumberify('./index.rsh:101:17:array', stdlib.UInt_max, '0')];
    const v1380 = stdlib.addressEq(v1375, v1187);
    const v1381 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1375), null);
    const v1382 = {
      None: 0,
      Some: 1
      }[v1381[0]];
    const v1383 = stdlib.eq(v1382, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1384 = v1380 ? v1383 : false;
    stdlib.assert(v1384, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:104:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1386 = null;
    await txn6.getOutput('Player_getRole', 'v1386', ctc0, v1386);
    await stdlib.mapSet(map1, v1375, v1379);
    let v1393 = stdlib.checkedBigNumberify('./index.rsh:194:22:decimal', stdlib.UInt_max, '0');
    let v1394 = v1377;
    let v1401 = v1321;
    
    while (await (async () => {
      const v1405 = stdlib.lt(v1393, v1242);
      
      return v1405;})()) {
      const txn7 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 31,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1419], secs: v1421, time: v1420, didSend: v612, from: v1418 } = txn7;
      undefined /* setApiDetails */;
      ;
      const v1423 = v1419[stdlib.checkedBigNumberify('./index.rsh:198:10:spread', stdlib.UInt_max, '0')];
      const v1424 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1418), null);
      const v1425 = {
        None: 0,
        Some: 1
        }[v1424[0]];
      const v1426 = stdlib.eq(v1425, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1426, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:18:application call to [unknown function] (defined at: ./index.rsh:200:18:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v1429 = null;
      await txn7.getOutput('Player_getRole', 'v1429', ctc0, v1429);
      await stdlib.mapSet(map1, v1418, v1423);
      const v1436 = stdlib.safeAdd(v1393, stdlib.checkedBigNumberify('./index.rsh:203:31:decimal', stdlib.UInt_max, '1'));
      const cv1393 = v1436;
      const cv1394 = v1420;
      const cv1401 = v1401;
      
      v1393 = cv1393;
      v1394 = cv1394;
      v1401 = cv1401;
      
      continue;
      
      }
    const v1440 = ['CheckingWin', null];
    null;
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 10,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1453], secs: v1455, time: v1454, didSend: v685, from: v1452 } = txn7;
    undefined /* setApiDetails */;
    ;
    const v1456 = v1453[stdlib.checkedBigNumberify('./index.rsh:110:17:array', stdlib.UInt_max, '0')];
    const v1457 = stdlib.addressEq(v1452, v1187);
    const v1458 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1452), null);
    const v1459 = {
      None: 0,
      Some: 1
      }[v1458[0]];
    const v1460 = stdlib.eq(v1459, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1461 = v1457 ? v1460 : false;
    stdlib.assert(v1461, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:113:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1463 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1452), null);
    const v1464 = stdlib.fromSome(v1463, stdlib.checkedBigNumberify('./index.rsh:114:55:decimal', stdlib.UInt_max, '0'));
    const v1465 = stdlib.eq(v1464, v1456);
    const v1466 = v1465 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
    const v1467 = stdlib.eq(v1466, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v1467) {
      const v1471 = true;
      await txn7.getOutput('Player_seeWinner', 'v1471', ctc7, v1471);
      await stdlib.mapSet(map1, v1452, undefined /* Nothing */);
      await stdlib.mapSet(map2, v1452, null);
      let v1479 = v1393;
      let v1480 = stdlib.checkedBigNumberify('./index.rsh:122:18:decimal', stdlib.UInt_max, '1');
      let v1481 = v1454;
      let v1488 = v1401;
      
      while (await (async () => {
        const v1492 = stdlib.gt(v1479, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        
        return v1492;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 20,
          out_tys: [ctc6],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1501], secs: v1503, time: v1502, didSend: v773, from: v1500 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1505 = v1501[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
        const v1506 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1500), null);
        const v1507 = stdlib.fromSome(v1506, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
        const v1508 = stdlib.eq(v1507, v1505);
        const v1509 = v1508 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1510 = stdlib.eq(v1509, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1510) {
          const v1514 = true;
          await txn8.getOutput('Player_seeWinner', 'v1514', ctc7, v1514);
          await stdlib.mapSet(map1, v1500, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1500, null);
          const v1522 = stdlib.safeAdd(v1480, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
          const v1523 = stdlib.safeSub(v1479, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
          const cv1479 = v1523;
          const cv1480 = v1522;
          const cv1481 = v1502;
          const cv1488 = v1488;
          
          v1479 = cv1479;
          v1480 = cv1480;
          v1481 = cv1481;
          v1488 = cv1488;
          
          continue;}
        else {
          const v1528 = false;
          await txn8.getOutput('Player_seeWinner', 'v1528', ctc7, v1528);
          await stdlib.mapSet(map1, v1500, undefined /* Nothing */);
          const v1535 = stdlib.safeSub(v1479, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
          const cv1479 = v1535;
          const cv1480 = v1480;
          const cv1481 = v1502;
          const cv1488 = v1488;
          
          v1479 = cv1479;
          v1480 = cv1480;
          v1481 = cv1481;
          v1488 = cv1488;
          
          continue;}
        
        }
      const v1540 = stdlib.safeDiv(v1312, v1480);
      const v1541 = ['PayingWinners', null];
      null;
      let v1542 = false;
      let v1543 = v1188;
      let v1544 = v1481;
      let v1551 = v1488;
      
      while (await (async () => {
        const v1555 = stdlib.gt(v1543, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
        
        return v1555;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 13,
          out_tys: [ctc5],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1566], secs: v1568, time: v1567, didSend: v852, from: v1565 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1569 = stdlib.addressEq(v1565, v1187);
        const v1570 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1565), null);
        const v1571 = {
          None: 0,
          Some: 1
          }[v1570[0]];
        const v1572 = stdlib.eq(v1571, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v1573 = v1569 ? v1572 : false;
        stdlib.assert(v1573, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:136:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v1575 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1565), null);
        const v1576 = {
          None: 0,
          Some: 1
          }[v1575[0]];
        const v1577 = stdlib.eq(v1576, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v1577) {
          const v1578 = null;
          await txn8.getOutput('Player_receivePay', 'v1578', ctc0, v1578);
          await stdlib.mapSet(map0, v1565, undefined /* Nothing */);
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 14,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1587, time: v1586, didSend: v900, from: v1585 } = txn9;
          const v1589 = stdlib.add(v1551, v1540);
          ;
          const v1590 = stdlib.addressEq(v1198, v1585);
          stdlib.assert(v1590, {
            at: './index.rsh:277:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Admin'
            });
          if (v1542) {
            let v1599 = v1188;
            let v1600 = v1198;
            let v1601 = v1586;
            let v1608 = v1589;
            
            while (await (async () => {
              const v1612 = stdlib.addressEq(v1600, v1198);
              const v1613 = stdlib.gt(v1599, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
              const v1614 = v1612 ? v1613 : false;
              
              return v1614;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 16,
                out_tys: [ctc5],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v1625], secs: v1627, time: v1626, didSend: v985, from: v1624 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v1629 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1624), null);
              const v1630 = {
                None: 0,
                Some: 1
                }[v1629[0]];
              const v1631 = stdlib.eq(v1630, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v1631, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Admin'
                });
              const v1633 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1624), null);
              const v1634 = {
                None: 0,
                Some: 1
                }[v1633[0]];
              const v1635 = stdlib.eq(v1634, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v1635) {
                const v1636 = null;
                await txn10.getOutput('Player_receivePay', 'v1636', ctc0, v1636);
                await stdlib.mapSet(map2, v1624, undefined /* Nothing */);
                await stdlib.mapSet(map0, v1624, undefined /* Nothing */);
                const v1648 = stdlib.sub(v1608, v1608);
                ;
                const v1649 = stdlib.safeSub(v1599, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
                const cv1599 = v1649;
                const cv1600 = v1624;
                const cv1601 = v1626;
                const cv1608 = v1648;
                
                v1599 = cv1599;
                v1600 = cv1600;
                v1601 = cv1601;
                v1608 = cv1608;
                
                continue;}
              else {
                const v1654 = null;
                await txn10.getOutput('Player_receivePay', 'v1654', ctc0, v1654);
                await stdlib.mapSet(map0, v1624, undefined /* Nothing */);
                const v1661 = stdlib.safeSub(v1599, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
                const cv1599 = v1661;
                const cv1600 = v1600;
                const cv1601 = v1626;
                const cv1608 = v1608;
                
                v1599 = cv1599;
                v1600 = cv1600;
                v1601 = cv1601;
                v1608 = cv1608;
                
                continue;}
              
              }
            const v1670 = stdlib.sub(v1608, v1608);
            ;
            const v1671 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
            const cv1542 = true;
            const cv1543 = v1671;
            const cv1544 = v1601;
            const cv1551 = v1670;
            
            v1542 = cv1542;
            v1543 = cv1543;
            v1544 = cv1544;
            v1551 = cv1551;
            
            continue;}
          else {
            const v1596 = stdlib.sub(v1589, v1589);
            ;
            await stdlib.mapSet(map2, v1187, undefined /* Nothing */);
            const v1598 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:283:53:decimal', stdlib.UInt_max, '1'));
            const cv1542 = true;
            const cv1543 = v1598;
            const cv1544 = v1586;
            const cv1551 = v1596;
            
            v1542 = cv1542;
            v1543 = cv1543;
            v1544 = cv1544;
            v1551 = cv1551;
            
            continue;}
          
          }
        else {
          const v1672 = null;
          await txn8.getOutput('Player_receivePay', 'v1672', ctc0, v1672);
          await stdlib.mapSet(map0, v1565, undefined /* Nothing */);
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 17,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1681, time: v1680, didSend: v900, from: v1679 } = txn9;
          const v1683 = stdlib.add(v1551, v1540);
          ;
          const v1684 = stdlib.addressEq(v1198, v1679);
          stdlib.assert(v1684, {
            at: './index.rsh:277:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Admin'
            });
          if (v1542) {
            let v1693 = v1188;
            let v1694 = v1198;
            let v1695 = v1680;
            let v1702 = v1683;
            
            while (await (async () => {
              const v1706 = stdlib.addressEq(v1694, v1198);
              const v1707 = stdlib.gt(v1693, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
              const v1708 = v1706 ? v1707 : false;
              
              return v1708;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 19,
                out_tys: [ctc5],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v1719], secs: v1721, time: v1720, didSend: v985, from: v1718 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v1723 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1718), null);
              const v1724 = {
                None: 0,
                Some: 1
                }[v1723[0]];
              const v1725 = stdlib.eq(v1724, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v1725, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Admin'
                });
              const v1727 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1718), null);
              const v1728 = {
                None: 0,
                Some: 1
                }[v1727[0]];
              const v1729 = stdlib.eq(v1728, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v1729) {
                const v1730 = null;
                await txn10.getOutput('Player_receivePay', 'v1730', ctc0, v1730);
                await stdlib.mapSet(map2, v1718, undefined /* Nothing */);
                await stdlib.mapSet(map0, v1718, undefined /* Nothing */);
                const v1742 = stdlib.sub(v1702, v1702);
                ;
                const v1743 = stdlib.safeSub(v1693, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
                const cv1693 = v1743;
                const cv1694 = v1718;
                const cv1695 = v1720;
                const cv1702 = v1742;
                
                v1693 = cv1693;
                v1694 = cv1694;
                v1695 = cv1695;
                v1702 = cv1702;
                
                continue;}
              else {
                const v1748 = null;
                await txn10.getOutput('Player_receivePay', 'v1748', ctc0, v1748);
                await stdlib.mapSet(map0, v1718, undefined /* Nothing */);
                const v1755 = stdlib.safeSub(v1693, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
                const cv1693 = v1755;
                const cv1694 = v1694;
                const cv1695 = v1720;
                const cv1702 = v1702;
                
                v1693 = cv1693;
                v1694 = cv1694;
                v1695 = cv1695;
                v1702 = cv1702;
                
                continue;}
              
              }
            const v1764 = stdlib.sub(v1702, v1702);
            ;
            const v1765 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
            const cv1542 = true;
            const cv1543 = v1765;
            const cv1544 = v1695;
            const cv1551 = v1764;
            
            v1542 = cv1542;
            v1543 = cv1543;
            v1544 = cv1544;
            v1551 = cv1551;
            
            continue;}
          else {
            const v1690 = stdlib.sub(v1683, v1683);
            ;
            await stdlib.mapSet(map2, v1187, undefined /* Nothing */);
            const v1692 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:283:53:decimal', stdlib.UInt_max, '1'));
            const cv1542 = true;
            const cv1543 = v1692;
            const cv1544 = v1680;
            const cv1551 = v1690;
            
            v1542 = cv1542;
            v1543 = cv1543;
            v1544 = cv1544;
            v1551 = cv1551;
            
            continue;}
          
          }
        
        }
      const v1770 = stdlib.sub(v1551, v1551);
      ;
      const v1771 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
      const cv1201 = v1771;
      const cv1202 = v1544;
      const cv1209 = v1770;
      
      v1201 = cv1201;
      v1202 = cv1202;
      v1209 = cv1209;
      
      continue;}
    else {
      const v1772 = false;
      await txn7.getOutput('Player_seeWinner', 'v1772', ctc7, v1772);
      await stdlib.mapSet(map1, v1452, undefined /* Nothing */);
      let v1779 = v1393;
      let v1780 = stdlib.checkedBigNumberify('./index.rsh:128:18:decimal', stdlib.UInt_max, '0');
      let v1781 = v1454;
      let v1788 = v1401;
      
      while (await (async () => {
        const v1792 = stdlib.gt(v1779, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        
        return v1792;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 30,
          out_tys: [ctc6],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1801], secs: v1803, time: v1802, didSend: v773, from: v1800 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1805 = v1801[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
        const v1806 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1800), null);
        const v1807 = stdlib.fromSome(v1806, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
        const v1808 = stdlib.eq(v1807, v1805);
        const v1809 = v1808 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1810 = stdlib.eq(v1809, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1810) {
          const v1814 = true;
          await txn8.getOutput('Player_seeWinner', 'v1814', ctc7, v1814);
          await stdlib.mapSet(map1, v1800, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1800, null);
          const v1822 = stdlib.safeAdd(v1780, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
          const v1823 = stdlib.safeSub(v1779, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
          const cv1779 = v1823;
          const cv1780 = v1822;
          const cv1781 = v1802;
          const cv1788 = v1788;
          
          v1779 = cv1779;
          v1780 = cv1780;
          v1781 = cv1781;
          v1788 = cv1788;
          
          continue;}
        else {
          const v1828 = false;
          await txn8.getOutput('Player_seeWinner', 'v1828', ctc7, v1828);
          await stdlib.mapSet(map1, v1800, undefined /* Nothing */);
          const v1835 = stdlib.safeSub(v1779, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
          const cv1779 = v1835;
          const cv1780 = v1780;
          const cv1781 = v1802;
          const cv1788 = v1788;
          
          v1779 = cv1779;
          v1780 = cv1780;
          v1781 = cv1781;
          v1788 = cv1788;
          
          continue;}
        
        }
      const v1840 = stdlib.safeDiv(v1312, v1780);
      const v1841 = ['PayingWinners', null];
      null;
      let v1842 = false;
      let v1843 = v1188;
      let v1844 = v1781;
      let v1851 = v1788;
      
      while (await (async () => {
        const v1855 = stdlib.gt(v1843, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
        
        return v1855;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 23,
          out_tys: [ctc5],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1866], secs: v1868, time: v1867, didSend: v852, from: v1865 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1869 = stdlib.addressEq(v1865, v1187);
        const v1870 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1865), null);
        const v1871 = {
          None: 0,
          Some: 1
          }[v1870[0]];
        const v1872 = stdlib.eq(v1871, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v1873 = v1869 ? v1872 : false;
        stdlib.assert(v1873, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:136:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v1875 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1865), null);
        const v1876 = {
          None: 0,
          Some: 1
          }[v1875[0]];
        const v1877 = stdlib.eq(v1876, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v1877) {
          const v1878 = null;
          await txn8.getOutput('Player_receivePay', 'v1878', ctc0, v1878);
          await stdlib.mapSet(map0, v1865, undefined /* Nothing */);
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 24,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1887, time: v1886, didSend: v900, from: v1885 } = txn9;
          const v1889 = stdlib.add(v1851, v1840);
          ;
          const v1890 = stdlib.addressEq(v1198, v1885);
          stdlib.assert(v1890, {
            at: './index.rsh:277:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Admin'
            });
          if (v1842) {
            let v1899 = v1188;
            let v1900 = v1198;
            let v1901 = v1886;
            let v1908 = v1889;
            
            while (await (async () => {
              const v1912 = stdlib.addressEq(v1900, v1198);
              const v1913 = stdlib.gt(v1899, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
              const v1914 = v1912 ? v1913 : false;
              
              return v1914;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 26,
                out_tys: [ctc5],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v1925], secs: v1927, time: v1926, didSend: v985, from: v1924 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v1929 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1924), null);
              const v1930 = {
                None: 0,
                Some: 1
                }[v1929[0]];
              const v1931 = stdlib.eq(v1930, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v1931, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Admin'
                });
              const v1933 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1924), null);
              const v1934 = {
                None: 0,
                Some: 1
                }[v1933[0]];
              const v1935 = stdlib.eq(v1934, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v1935) {
                const v1936 = null;
                await txn10.getOutput('Player_receivePay', 'v1936', ctc0, v1936);
                await stdlib.mapSet(map2, v1924, undefined /* Nothing */);
                await stdlib.mapSet(map0, v1924, undefined /* Nothing */);
                const v1948 = stdlib.sub(v1908, v1908);
                ;
                const v1949 = stdlib.safeSub(v1899, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
                const cv1899 = v1949;
                const cv1900 = v1924;
                const cv1901 = v1926;
                const cv1908 = v1948;
                
                v1899 = cv1899;
                v1900 = cv1900;
                v1901 = cv1901;
                v1908 = cv1908;
                
                continue;}
              else {
                const v1954 = null;
                await txn10.getOutput('Player_receivePay', 'v1954', ctc0, v1954);
                await stdlib.mapSet(map0, v1924, undefined /* Nothing */);
                const v1961 = stdlib.safeSub(v1899, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
                const cv1899 = v1961;
                const cv1900 = v1900;
                const cv1901 = v1926;
                const cv1908 = v1908;
                
                v1899 = cv1899;
                v1900 = cv1900;
                v1901 = cv1901;
                v1908 = cv1908;
                
                continue;}
              
              }
            const v1970 = stdlib.sub(v1908, v1908);
            ;
            const v1971 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v1971;
            const cv1844 = v1901;
            const cv1851 = v1970;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          else {
            const v1896 = stdlib.sub(v1889, v1889);
            ;
            await stdlib.mapSet(map2, v1187, undefined /* Nothing */);
            const v1898 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:283:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v1898;
            const cv1844 = v1886;
            const cv1851 = v1896;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          
          }
        else {
          const v1972 = null;
          await txn8.getOutput('Player_receivePay', 'v1972', ctc0, v1972);
          await stdlib.mapSet(map0, v1865, undefined /* Nothing */);
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 27,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1981, time: v1980, didSend: v900, from: v1979 } = txn9;
          const v1983 = stdlib.add(v1851, v1840);
          ;
          const v1984 = stdlib.addressEq(v1198, v1979);
          stdlib.assert(v1984, {
            at: './index.rsh:277:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Admin'
            });
          if (v1842) {
            let v1993 = v1188;
            let v1994 = v1198;
            let v1995 = v1980;
            let v2002 = v1983;
            
            while (await (async () => {
              const v2006 = stdlib.addressEq(v1994, v1198);
              const v2007 = stdlib.gt(v1993, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
              const v2008 = v2006 ? v2007 : false;
              
              return v2008;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 29,
                out_tys: [ctc5],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v2019], secs: v2021, time: v2020, didSend: v985, from: v2018 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v2023 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2018), null);
              const v2024 = {
                None: 0,
                Some: 1
                }[v2023[0]];
              const v2025 = stdlib.eq(v2024, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v2025, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Admin'
                });
              const v2027 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2018), null);
              const v2028 = {
                None: 0,
                Some: 1
                }[v2027[0]];
              const v2029 = stdlib.eq(v2028, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v2029) {
                const v2030 = null;
                await txn10.getOutput('Player_receivePay', 'v2030', ctc0, v2030);
                await stdlib.mapSet(map2, v2018, undefined /* Nothing */);
                await stdlib.mapSet(map0, v2018, undefined /* Nothing */);
                const v2042 = stdlib.sub(v2002, v2002);
                ;
                const v2043 = stdlib.safeSub(v1993, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
                const cv1993 = v2043;
                const cv1994 = v2018;
                const cv1995 = v2020;
                const cv2002 = v2042;
                
                v1993 = cv1993;
                v1994 = cv1994;
                v1995 = cv1995;
                v2002 = cv2002;
                
                continue;}
              else {
                const v2048 = null;
                await txn10.getOutput('Player_receivePay', 'v2048', ctc0, v2048);
                await stdlib.mapSet(map0, v2018, undefined /* Nothing */);
                const v2055 = stdlib.safeSub(v1993, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
                const cv1993 = v2055;
                const cv1994 = v1994;
                const cv1995 = v2020;
                const cv2002 = v2002;
                
                v1993 = cv1993;
                v1994 = cv1994;
                v1995 = cv1995;
                v2002 = cv2002;
                
                continue;}
              
              }
            const v2064 = stdlib.sub(v2002, v2002);
            ;
            const v2065 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v2065;
            const cv1844 = v1995;
            const cv1851 = v2064;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          else {
            const v1990 = stdlib.sub(v1983, v1983);
            ;
            await stdlib.mapSet(map2, v1187, undefined /* Nothing */);
            const v1992 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:283:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v1992;
            const cv1844 = v1980;
            const cv1851 = v1990;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          
          }
        
        }
      const v2070 = stdlib.sub(v1851, v1851);
      ;
      const v2071 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
      const cv1201 = v2071;
      const cv1202 = v1844;
      const cv1209 = v2070;
      
      v1201 = cv1201;
      v1202 = cv1202;
      v1209 = cv1209;
      
      continue;}
    
    
    
    
    
    
    
    }
  const v2072 = ['Finished', null];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc2, ctc2, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1188, v1189, v1190], secs: v1192, time: v1191, didSend: v48, from: v1187 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1195, time: v1194, didSend: v53, from: v1193 } = txn2;
  ;
  const v1196 = stdlib.addressEq(v1187, v1193);
  stdlib.assert(v1196, {
    at: './index.rsh:62:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Game'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1190],
    evt_cnt: 0,
    funcNum: 2,
    lct: v1194,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:66:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1200, time: v1199, didSend: v61, from: v1198 } = txn3;
      
      ;
      const v1201 = v1190;
      const v1202 = v1199;
      const v1209 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1212 = stdlib.gt(v1201, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        
        return v1212;})()) {
        const v1213 = ['Joining', null];
        null;
        sim_r.isHalt = false;
        }
      else {
        const v2072 = ['Finished', null];
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
    tys: [ctc7, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1200, time: v1199, didSend: v61, from: v1198 } = txn3;
  ;
  let v1201 = v1190;
  let v1202 = v1199;
  let v1209 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1212 = stdlib.gt(v1201, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
    
    return v1212;})()) {
    const v1213 = ['Joining', null];
    null;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1225], secs: v1227, time: v1226, didSend: v106, from: v1224 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v1228 = stdlib.addressEq(v1224, v1187);
    const v1229 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1224), null);
    const v1230 = {
      None: 0,
      Some: 1
      }[v1229[0]];
    const v1231 = stdlib.eq(v1230, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1232 = v1231 ? false : true;
    const v1233 = v1228 ? v1232 : false;
    stdlib.assert(v1233, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:154:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1235 = null;
    await txn4.getOutput('Player_join', 'v1235', ctc0, v1235);
    await stdlib.mapSet(map0, v1224, null);
    let v1242 = stdlib.checkedBigNumberify('./index.rsh:157:22:decimal', stdlib.UInt_max, '0');
    let v1243 = v1226;
    let v1250 = v1209;
    
    while (await (async () => {
      const v1254 = stdlib.lt(v1242, v1188);
      
      return v1254;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 33,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1266], secs: v1268, time: v1267, didSend: v215, from: v1265 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v1270 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1265), null);
      const v1271 = {
        None: 0,
        Some: 1
        }[v1270[0]];
      const v1272 = stdlib.eq(v1271, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1273 = v1272 ? false : true;
      stdlib.assert(v1273, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:163:20:application call to [unknown function] (defined at: ./index.rsh:163:20:function exp)'],
        msg: null,
        who: 'Game'
        });
      const v1275 = null;
      await txn5.getOutput('Player_join', 'v1275', ctc0, v1275);
      await stdlib.mapSet(map0, v1265, null);
      const v1282 = stdlib.safeAdd(v1242, stdlib.checkedBigNumberify('./index.rsh:166:33:decimal', stdlib.UInt_max, '1'));
      const cv1242 = v1282;
      const cv1243 = v1267;
      const cv1250 = v1250;
      
      v1242 = cv1242;
      v1243 = cv1243;
      v1250 = cv1250;
      
      continue;
      
      }
    const v1284 = ['Wagering', null];
    null;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1295], secs: v1297, time: v1296, didSend: v287, from: v1294 } = txn5;
    undefined /* setApiDetails */;
    const v1299 = stdlib.add(v1250, v1189);
    ;
    const v1300 = stdlib.addressEq(v1294, v1187);
    const v1301 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1294), null);
    const v1302 = {
      None: 0,
      Some: 1
      }[v1301[0]];
    const v1303 = stdlib.eq(v1302, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1304 = v1300 ? v1303 : false;
    stdlib.assert(v1304, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:95:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1306 = null;
    await txn5.getOutput('Player_wager', 'v1306', ctc0, v1306);
    let v1312 = v1189;
    let v1313 = v1242;
    let v1314 = v1296;
    let v1321 = v1299;
    
    while (await (async () => {
      const v1325 = stdlib.gt(v1313, stdlib.checkedBigNumberify('./index.rsh:179:32:decimal', stdlib.UInt_max, '0'));
      
      return v1325;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 32,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1340], secs: v1342, time: v1341, didSend: v434, from: v1339 } = txn6;
      undefined /* setApiDetails */;
      const v1344 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1339), null);
      const v1345 = {
        None: 0,
        Some: 1
        }[v1344[0]];
      const v1346 = stdlib.eq(v1345, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1346, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:181:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)'],
        msg: null,
        who: 'Game'
        });
      const v1349 = stdlib.add(v1321, v1189);
      ;
      const v1354 = null;
      await txn6.getOutput('Player_wager', 'v1354', ctc0, v1354);
      const v1360 = stdlib.safeAdd(v1312, v1189);
      const v1361 = stdlib.safeSub(v1313, stdlib.checkedBigNumberify('./index.rsh:184:55:decimal', stdlib.UInt_max, '1'));
      const cv1312 = v1360;
      const cv1313 = v1361;
      const cv1314 = v1341;
      const cv1321 = v1349;
      
      v1312 = cv1312;
      v1313 = cv1313;
      v1314 = cv1314;
      v1321 = cv1321;
      
      continue;
      
      }
    const v1363 = ['PickingRoles', null];
    null;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1376], secs: v1378, time: v1377, didSend: v502, from: v1375 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v1379 = v1376[stdlib.checkedBigNumberify('./index.rsh:101:17:array', stdlib.UInt_max, '0')];
    const v1380 = stdlib.addressEq(v1375, v1187);
    const v1381 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1375), null);
    const v1382 = {
      None: 0,
      Some: 1
      }[v1381[0]];
    const v1383 = stdlib.eq(v1382, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1384 = v1380 ? v1383 : false;
    stdlib.assert(v1384, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:104:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1386 = null;
    await txn6.getOutput('Player_getRole', 'v1386', ctc0, v1386);
    await stdlib.mapSet(map1, v1375, v1379);
    let v1393 = stdlib.checkedBigNumberify('./index.rsh:194:22:decimal', stdlib.UInt_max, '0');
    let v1394 = v1377;
    let v1401 = v1321;
    
    while (await (async () => {
      const v1405 = stdlib.lt(v1393, v1242);
      
      return v1405;})()) {
      const txn7 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 31,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1419], secs: v1421, time: v1420, didSend: v612, from: v1418 } = txn7;
      undefined /* setApiDetails */;
      ;
      const v1423 = v1419[stdlib.checkedBigNumberify('./index.rsh:198:10:spread', stdlib.UInt_max, '0')];
      const v1424 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1418), null);
      const v1425 = {
        None: 0,
        Some: 1
        }[v1424[0]];
      const v1426 = stdlib.eq(v1425, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1426, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:18:application call to [unknown function] (defined at: ./index.rsh:200:18:function exp)'],
        msg: null,
        who: 'Game'
        });
      const v1429 = null;
      await txn7.getOutput('Player_getRole', 'v1429', ctc0, v1429);
      await stdlib.mapSet(map1, v1418, v1423);
      const v1436 = stdlib.safeAdd(v1393, stdlib.checkedBigNumberify('./index.rsh:203:31:decimal', stdlib.UInt_max, '1'));
      const cv1393 = v1436;
      const cv1394 = v1420;
      const cv1401 = v1401;
      
      v1393 = cv1393;
      v1394 = cv1394;
      v1401 = cv1401;
      
      continue;
      
      }
    stdlib.protect(ctc0, await interact.showWinningRole(), {
      at: './index.rsh:208:31:application',
      fs: ['at ./index.rsh:207:14:application call to [unknown function] (defined at: ./index.rsh:207:18:function exp)'],
      msg: 'showWinningRole',
      who: 'Game'
      });
    
    const v1440 = ['CheckingWin', null];
    null;
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 10,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1453], secs: v1455, time: v1454, didSend: v685, from: v1452 } = txn7;
    undefined /* setApiDetails */;
    ;
    const v1456 = v1453[stdlib.checkedBigNumberify('./index.rsh:110:17:array', stdlib.UInt_max, '0')];
    const v1457 = stdlib.addressEq(v1452, v1187);
    const v1458 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1452), null);
    const v1459 = {
      None: 0,
      Some: 1
      }[v1458[0]];
    const v1460 = stdlib.eq(v1459, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1461 = v1457 ? v1460 : false;
    stdlib.assert(v1461, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:113:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1463 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1452), null);
    const v1464 = stdlib.fromSome(v1463, stdlib.checkedBigNumberify('./index.rsh:114:55:decimal', stdlib.UInt_max, '0'));
    const v1465 = stdlib.eq(v1464, v1456);
    const v1466 = v1465 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
    const v1467 = stdlib.eq(v1466, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v1467) {
      const v1471 = true;
      await txn7.getOutput('Player_seeWinner', 'v1471', ctc6, v1471);
      await stdlib.mapSet(map1, v1452, undefined /* Nothing */);
      await stdlib.mapSet(map2, v1452, null);
      let v1479 = v1393;
      let v1480 = stdlib.checkedBigNumberify('./index.rsh:122:18:decimal', stdlib.UInt_max, '1');
      let v1481 = v1454;
      let v1488 = v1401;
      
      while (await (async () => {
        const v1492 = stdlib.gt(v1479, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        
        return v1492;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 20,
          out_tys: [ctc5],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1501], secs: v1503, time: v1502, didSend: v773, from: v1500 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1505 = v1501[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
        const v1506 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1500), null);
        const v1507 = stdlib.fromSome(v1506, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
        const v1508 = stdlib.eq(v1507, v1505);
        const v1509 = v1508 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1510 = stdlib.eq(v1509, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1510) {
          const v1514 = true;
          await txn8.getOutput('Player_seeWinner', 'v1514', ctc6, v1514);
          await stdlib.mapSet(map1, v1500, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1500, null);
          const v1522 = stdlib.safeAdd(v1480, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
          const v1523 = stdlib.safeSub(v1479, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
          const cv1479 = v1523;
          const cv1480 = v1522;
          const cv1481 = v1502;
          const cv1488 = v1488;
          
          v1479 = cv1479;
          v1480 = cv1480;
          v1481 = cv1481;
          v1488 = cv1488;
          
          continue;}
        else {
          const v1528 = false;
          await txn8.getOutput('Player_seeWinner', 'v1528', ctc6, v1528);
          await stdlib.mapSet(map1, v1500, undefined /* Nothing */);
          const v1535 = stdlib.safeSub(v1479, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
          const cv1479 = v1535;
          const cv1480 = v1480;
          const cv1481 = v1502;
          const cv1488 = v1488;
          
          v1479 = cv1479;
          v1480 = cv1480;
          v1481 = cv1481;
          v1488 = cv1488;
          
          continue;}
        
        }
      const v1540 = stdlib.safeDiv(v1312, v1480);
      const v1541 = ['PayingWinners', null];
      null;
      let v1542 = false;
      let v1543 = v1188;
      let v1544 = v1481;
      let v1551 = v1488;
      
      while (await (async () => {
        const v1555 = stdlib.gt(v1543, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
        
        return v1555;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 13,
          out_tys: [ctc4],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1566], secs: v1568, time: v1567, didSend: v852, from: v1565 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1569 = stdlib.addressEq(v1565, v1187);
        const v1570 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1565), null);
        const v1571 = {
          None: 0,
          Some: 1
          }[v1570[0]];
        const v1572 = stdlib.eq(v1571, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v1573 = v1569 ? v1572 : false;
        stdlib.assert(v1573, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:136:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
          msg: null,
          who: 'Game'
          });
        const v1575 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1565), null);
        const v1576 = {
          None: 0,
          Some: 1
          }[v1575[0]];
        const v1577 = stdlib.eq(v1576, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v1577) {
          const v1578 = null;
          await txn8.getOutput('Player_receivePay', 'v1578', ctc0, v1578);
          await stdlib.mapSet(map0, v1565, undefined /* Nothing */);
          const txn9 = await (ctc.sendrecv({
            args: [v1187, v1188, v1189, v1198, v1201, v1540, v1542, v1543, v1551],
            evt_cnt: 0,
            funcNum: 14,
            lct: v1567,
            onlyIf: true,
            out_tys: [],
            pay: [v1540, []],
            sim_p: (async (txn9) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1587, time: v1586, didSend: v900, from: v1585 } = txn9;
              
              const v1589 = stdlib.add(v1551, v1540);
              sim_r.txns.push({
                amt: v1540,
                kind: 'to',
                tok: undefined /* Nothing */
                });
              if (v1542) {
                const v1599 = v1188;
                const v1600 = v1198;
                const v1601 = v1586;
                const v1608 = v1589;
                
                if (await (async () => {
                  const v1612 = stdlib.addressEq(v1600, v1198);
                  const v1613 = stdlib.gt(v1599, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
                  const v1614 = v1612 ? v1613 : false;
                  
                  return v1614;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v1670 = stdlib.sub(v1608, v1608);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v1600,
                    tok: undefined /* Nothing */
                    });
                  const v1671 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
                  const cv1542 = true;
                  const cv1543 = v1671;
                  const cv1544 = v1601;
                  const cv1551 = v1670;
                  
                  await (async () => {
                    const v1542 = cv1542;
                    const v1543 = cv1543;
                    const v1544 = cv1544;
                    const v1551 = cv1551;
                    
                    if (await (async () => {
                      const v1555 = stdlib.gt(v1543, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
                      
                      return v1555;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v1770 = stdlib.sub(v1551, v1551);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v1198,
                        tok: undefined /* Nothing */
                        });
                      const v1771 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
                      const cv1201 = v1771;
                      const cv1202 = v1544;
                      const cv1209 = v1770;
                      
                      await (async () => {
                        const v1201 = cv1201;
                        const v1202 = cv1202;
                        const v1209 = cv1209;
                        
                        if (await (async () => {
                          const v1212 = stdlib.gt(v1201, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                          
                          return v1212;})()) {
                          const v1213 = ['Joining', null];
                          null;
                          sim_r.isHalt = false;
                          }
                        else {
                          const v2072 = ['Finished', null];
                          null;
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }})();}})();}}
              else {
                const v1596 = stdlib.sub(v1589, v1589);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1187,
                  tok: undefined /* Nothing */
                  });
                await stdlib.simMapSet(sim_r, 2, v1187, undefined /* Nothing */);
                const v1598 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:283:53:decimal', stdlib.UInt_max, '1'));
                const cv1542 = true;
                const cv1543 = v1598;
                const cv1544 = v1586;
                const cv1551 = v1596;
                
                await (async () => {
                  const v1542 = cv1542;
                  const v1543 = cv1543;
                  const v1544 = cv1544;
                  const v1551 = cv1551;
                  
                  if (await (async () => {
                    const v1555 = stdlib.gt(v1543, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
                    
                    return v1555;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1770 = stdlib.sub(v1551, v1551);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v1198,
                      tok: undefined /* Nothing */
                      });
                    const v1771 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
                    const cv1201 = v1771;
                    const cv1202 = v1544;
                    const cv1209 = v1770;
                    
                    await (async () => {
                      const v1201 = cv1201;
                      const v1202 = cv1202;
                      const v1209 = cv1209;
                      
                      if (await (async () => {
                        const v1212 = stdlib.gt(v1201, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                        
                        return v1212;})()) {
                        const v1213 = ['Joining', null];
                        null;
                        sim_r.isHalt = false;
                        }
                      else {
                        const v2072 = ['Finished', null];
                        null;
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }})();}})();}
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc7, ctc2, ctc2, ctc7, ctc2, ctc2, ctc6, ctc2, ctc2],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1587, time: v1586, didSend: v900, from: v1585 } = txn9;
          const v1589 = stdlib.add(v1551, v1540);
          ;
          const v1590 = stdlib.addressEq(v1198, v1585);
          stdlib.assert(v1590, {
            at: './index.rsh:277:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Game'
            });
          if (v1542) {
            let v1599 = v1188;
            let v1600 = v1198;
            let v1601 = v1586;
            let v1608 = v1589;
            
            while (await (async () => {
              const v1612 = stdlib.addressEq(v1600, v1198);
              const v1613 = stdlib.gt(v1599, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
              const v1614 = v1612 ? v1613 : false;
              
              return v1614;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 16,
                out_tys: [ctc4],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v1625], secs: v1627, time: v1626, didSend: v985, from: v1624 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v1629 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1624), null);
              const v1630 = {
                None: 0,
                Some: 1
                }[v1629[0]];
              const v1631 = stdlib.eq(v1630, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v1631, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Game'
                });
              const v1633 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1624), null);
              const v1634 = {
                None: 0,
                Some: 1
                }[v1633[0]];
              const v1635 = stdlib.eq(v1634, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v1635) {
                const v1636 = null;
                await txn10.getOutput('Player_receivePay', 'v1636', ctc0, v1636);
                await stdlib.mapSet(map2, v1624, undefined /* Nothing */);
                await stdlib.mapSet(map0, v1624, undefined /* Nothing */);
                const v1648 = stdlib.sub(v1608, v1608);
                ;
                const v1649 = stdlib.safeSub(v1599, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
                const cv1599 = v1649;
                const cv1600 = v1624;
                const cv1601 = v1626;
                const cv1608 = v1648;
                
                v1599 = cv1599;
                v1600 = cv1600;
                v1601 = cv1601;
                v1608 = cv1608;
                
                continue;}
              else {
                const v1654 = null;
                await txn10.getOutput('Player_receivePay', 'v1654', ctc0, v1654);
                await stdlib.mapSet(map0, v1624, undefined /* Nothing */);
                const v1661 = stdlib.safeSub(v1599, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
                const cv1599 = v1661;
                const cv1600 = v1600;
                const cv1601 = v1626;
                const cv1608 = v1608;
                
                v1599 = cv1599;
                v1600 = cv1600;
                v1601 = cv1601;
                v1608 = cv1608;
                
                continue;}
              
              }
            const v1670 = stdlib.sub(v1608, v1608);
            ;
            const v1671 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
            const cv1542 = true;
            const cv1543 = v1671;
            const cv1544 = v1601;
            const cv1551 = v1670;
            
            v1542 = cv1542;
            v1543 = cv1543;
            v1544 = cv1544;
            v1551 = cv1551;
            
            continue;}
          else {
            const v1596 = stdlib.sub(v1589, v1589);
            ;
            await stdlib.mapSet(map2, v1187, undefined /* Nothing */);
            const v1598 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:283:53:decimal', stdlib.UInt_max, '1'));
            const cv1542 = true;
            const cv1543 = v1598;
            const cv1544 = v1586;
            const cv1551 = v1596;
            
            v1542 = cv1542;
            v1543 = cv1543;
            v1544 = cv1544;
            v1551 = cv1551;
            
            continue;}
          
          }
        else {
          const v1672 = null;
          await txn8.getOutput('Player_receivePay', 'v1672', ctc0, v1672);
          await stdlib.mapSet(map0, v1565, undefined /* Nothing */);
          const txn9 = await (ctc.sendrecv({
            args: [v1187, v1188, v1189, v1198, v1201, v1540, v1542, v1543, v1551],
            evt_cnt: 0,
            funcNum: 17,
            lct: v1567,
            onlyIf: true,
            out_tys: [],
            pay: [v1540, []],
            sim_p: (async (txn9) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1681, time: v1680, didSend: v900, from: v1679 } = txn9;
              
              const v1683 = stdlib.add(v1551, v1540);
              sim_r.txns.push({
                amt: v1540,
                kind: 'to',
                tok: undefined /* Nothing */
                });
              if (v1542) {
                const v1693 = v1188;
                const v1694 = v1198;
                const v1695 = v1680;
                const v1702 = v1683;
                
                if (await (async () => {
                  const v1706 = stdlib.addressEq(v1694, v1198);
                  const v1707 = stdlib.gt(v1693, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
                  const v1708 = v1706 ? v1707 : false;
                  
                  return v1708;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v1764 = stdlib.sub(v1702, v1702);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v1694,
                    tok: undefined /* Nothing */
                    });
                  const v1765 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
                  const cv1542 = true;
                  const cv1543 = v1765;
                  const cv1544 = v1695;
                  const cv1551 = v1764;
                  
                  await (async () => {
                    const v1542 = cv1542;
                    const v1543 = cv1543;
                    const v1544 = cv1544;
                    const v1551 = cv1551;
                    
                    if (await (async () => {
                      const v1555 = stdlib.gt(v1543, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
                      
                      return v1555;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v1770 = stdlib.sub(v1551, v1551);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v1198,
                        tok: undefined /* Nothing */
                        });
                      const v1771 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
                      const cv1201 = v1771;
                      const cv1202 = v1544;
                      const cv1209 = v1770;
                      
                      await (async () => {
                        const v1201 = cv1201;
                        const v1202 = cv1202;
                        const v1209 = cv1209;
                        
                        if (await (async () => {
                          const v1212 = stdlib.gt(v1201, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                          
                          return v1212;})()) {
                          const v1213 = ['Joining', null];
                          null;
                          sim_r.isHalt = false;
                          }
                        else {
                          const v2072 = ['Finished', null];
                          null;
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }})();}})();}}
              else {
                const v1690 = stdlib.sub(v1683, v1683);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1187,
                  tok: undefined /* Nothing */
                  });
                await stdlib.simMapSet(sim_r, 2, v1187, undefined /* Nothing */);
                const v1692 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:283:53:decimal', stdlib.UInt_max, '1'));
                const cv1542 = true;
                const cv1543 = v1692;
                const cv1544 = v1680;
                const cv1551 = v1690;
                
                await (async () => {
                  const v1542 = cv1542;
                  const v1543 = cv1543;
                  const v1544 = cv1544;
                  const v1551 = cv1551;
                  
                  if (await (async () => {
                    const v1555 = stdlib.gt(v1543, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
                    
                    return v1555;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1770 = stdlib.sub(v1551, v1551);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v1198,
                      tok: undefined /* Nothing */
                      });
                    const v1771 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
                    const cv1201 = v1771;
                    const cv1202 = v1544;
                    const cv1209 = v1770;
                    
                    await (async () => {
                      const v1201 = cv1201;
                      const v1202 = cv1202;
                      const v1209 = cv1209;
                      
                      if (await (async () => {
                        const v1212 = stdlib.gt(v1201, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                        
                        return v1212;})()) {
                        const v1213 = ['Joining', null];
                        null;
                        sim_r.isHalt = false;
                        }
                      else {
                        const v2072 = ['Finished', null];
                        null;
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }})();}})();}
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc7, ctc2, ctc2, ctc7, ctc2, ctc2, ctc6, ctc2, ctc2],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1681, time: v1680, didSend: v900, from: v1679 } = txn9;
          const v1683 = stdlib.add(v1551, v1540);
          ;
          const v1684 = stdlib.addressEq(v1198, v1679);
          stdlib.assert(v1684, {
            at: './index.rsh:277:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Game'
            });
          if (v1542) {
            let v1693 = v1188;
            let v1694 = v1198;
            let v1695 = v1680;
            let v1702 = v1683;
            
            while (await (async () => {
              const v1706 = stdlib.addressEq(v1694, v1198);
              const v1707 = stdlib.gt(v1693, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
              const v1708 = v1706 ? v1707 : false;
              
              return v1708;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 19,
                out_tys: [ctc4],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v1719], secs: v1721, time: v1720, didSend: v985, from: v1718 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v1723 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1718), null);
              const v1724 = {
                None: 0,
                Some: 1
                }[v1723[0]];
              const v1725 = stdlib.eq(v1724, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v1725, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Game'
                });
              const v1727 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1718), null);
              const v1728 = {
                None: 0,
                Some: 1
                }[v1727[0]];
              const v1729 = stdlib.eq(v1728, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v1729) {
                const v1730 = null;
                await txn10.getOutput('Player_receivePay', 'v1730', ctc0, v1730);
                await stdlib.mapSet(map2, v1718, undefined /* Nothing */);
                await stdlib.mapSet(map0, v1718, undefined /* Nothing */);
                const v1742 = stdlib.sub(v1702, v1702);
                ;
                const v1743 = stdlib.safeSub(v1693, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
                const cv1693 = v1743;
                const cv1694 = v1718;
                const cv1695 = v1720;
                const cv1702 = v1742;
                
                v1693 = cv1693;
                v1694 = cv1694;
                v1695 = cv1695;
                v1702 = cv1702;
                
                continue;}
              else {
                const v1748 = null;
                await txn10.getOutput('Player_receivePay', 'v1748', ctc0, v1748);
                await stdlib.mapSet(map0, v1718, undefined /* Nothing */);
                const v1755 = stdlib.safeSub(v1693, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
                const cv1693 = v1755;
                const cv1694 = v1694;
                const cv1695 = v1720;
                const cv1702 = v1702;
                
                v1693 = cv1693;
                v1694 = cv1694;
                v1695 = cv1695;
                v1702 = cv1702;
                
                continue;}
              
              }
            const v1764 = stdlib.sub(v1702, v1702);
            ;
            const v1765 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
            const cv1542 = true;
            const cv1543 = v1765;
            const cv1544 = v1695;
            const cv1551 = v1764;
            
            v1542 = cv1542;
            v1543 = cv1543;
            v1544 = cv1544;
            v1551 = cv1551;
            
            continue;}
          else {
            const v1690 = stdlib.sub(v1683, v1683);
            ;
            await stdlib.mapSet(map2, v1187, undefined /* Nothing */);
            const v1692 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:283:53:decimal', stdlib.UInt_max, '1'));
            const cv1542 = true;
            const cv1543 = v1692;
            const cv1544 = v1680;
            const cv1551 = v1690;
            
            v1542 = cv1542;
            v1543 = cv1543;
            v1544 = cv1544;
            v1551 = cv1551;
            
            continue;}
          
          }
        
        }
      const v1770 = stdlib.sub(v1551, v1551);
      ;
      const v1771 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
      const cv1201 = v1771;
      const cv1202 = v1544;
      const cv1209 = v1770;
      
      v1201 = cv1201;
      v1202 = cv1202;
      v1209 = cv1209;
      
      continue;}
    else {
      const v1772 = false;
      await txn7.getOutput('Player_seeWinner', 'v1772', ctc6, v1772);
      await stdlib.mapSet(map1, v1452, undefined /* Nothing */);
      let v1779 = v1393;
      let v1780 = stdlib.checkedBigNumberify('./index.rsh:128:18:decimal', stdlib.UInt_max, '0');
      let v1781 = v1454;
      let v1788 = v1401;
      
      while (await (async () => {
        const v1792 = stdlib.gt(v1779, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        
        return v1792;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 30,
          out_tys: [ctc5],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1801], secs: v1803, time: v1802, didSend: v773, from: v1800 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1805 = v1801[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
        const v1806 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1800), null);
        const v1807 = stdlib.fromSome(v1806, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
        const v1808 = stdlib.eq(v1807, v1805);
        const v1809 = v1808 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1810 = stdlib.eq(v1809, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1810) {
          const v1814 = true;
          await txn8.getOutput('Player_seeWinner', 'v1814', ctc6, v1814);
          await stdlib.mapSet(map1, v1800, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1800, null);
          const v1822 = stdlib.safeAdd(v1780, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
          const v1823 = stdlib.safeSub(v1779, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
          const cv1779 = v1823;
          const cv1780 = v1822;
          const cv1781 = v1802;
          const cv1788 = v1788;
          
          v1779 = cv1779;
          v1780 = cv1780;
          v1781 = cv1781;
          v1788 = cv1788;
          
          continue;}
        else {
          const v1828 = false;
          await txn8.getOutput('Player_seeWinner', 'v1828', ctc6, v1828);
          await stdlib.mapSet(map1, v1800, undefined /* Nothing */);
          const v1835 = stdlib.safeSub(v1779, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
          const cv1779 = v1835;
          const cv1780 = v1780;
          const cv1781 = v1802;
          const cv1788 = v1788;
          
          v1779 = cv1779;
          v1780 = cv1780;
          v1781 = cv1781;
          v1788 = cv1788;
          
          continue;}
        
        }
      const v1840 = stdlib.safeDiv(v1312, v1780);
      const v1841 = ['PayingWinners', null];
      null;
      let v1842 = false;
      let v1843 = v1188;
      let v1844 = v1781;
      let v1851 = v1788;
      
      while (await (async () => {
        const v1855 = stdlib.gt(v1843, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
        
        return v1855;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 23,
          out_tys: [ctc4],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1866], secs: v1868, time: v1867, didSend: v852, from: v1865 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1869 = stdlib.addressEq(v1865, v1187);
        const v1870 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1865), null);
        const v1871 = {
          None: 0,
          Some: 1
          }[v1870[0]];
        const v1872 = stdlib.eq(v1871, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v1873 = v1869 ? v1872 : false;
        stdlib.assert(v1873, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:136:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
          msg: null,
          who: 'Game'
          });
        const v1875 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1865), null);
        const v1876 = {
          None: 0,
          Some: 1
          }[v1875[0]];
        const v1877 = stdlib.eq(v1876, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v1877) {
          const v1878 = null;
          await txn8.getOutput('Player_receivePay', 'v1878', ctc0, v1878);
          await stdlib.mapSet(map0, v1865, undefined /* Nothing */);
          const txn9 = await (ctc.sendrecv({
            args: [v1187, v1188, v1189, v1198, v1201, v1840, v1842, v1843, v1851],
            evt_cnt: 0,
            funcNum: 24,
            lct: v1867,
            onlyIf: true,
            out_tys: [],
            pay: [v1840, []],
            sim_p: (async (txn9) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1887, time: v1886, didSend: v900, from: v1885 } = txn9;
              
              const v1889 = stdlib.add(v1851, v1840);
              sim_r.txns.push({
                amt: v1840,
                kind: 'to',
                tok: undefined /* Nothing */
                });
              if (v1842) {
                const v1899 = v1188;
                const v1900 = v1198;
                const v1901 = v1886;
                const v1908 = v1889;
                
                if (await (async () => {
                  const v1912 = stdlib.addressEq(v1900, v1198);
                  const v1913 = stdlib.gt(v1899, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
                  const v1914 = v1912 ? v1913 : false;
                  
                  return v1914;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v1970 = stdlib.sub(v1908, v1908);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v1900,
                    tok: undefined /* Nothing */
                    });
                  const v1971 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
                  const cv1842 = true;
                  const cv1843 = v1971;
                  const cv1844 = v1901;
                  const cv1851 = v1970;
                  
                  await (async () => {
                    const v1842 = cv1842;
                    const v1843 = cv1843;
                    const v1844 = cv1844;
                    const v1851 = cv1851;
                    
                    if (await (async () => {
                      const v1855 = stdlib.gt(v1843, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
                      
                      return v1855;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v2070 = stdlib.sub(v1851, v1851);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v1198,
                        tok: undefined /* Nothing */
                        });
                      const v2071 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
                      const cv1201 = v2071;
                      const cv1202 = v1844;
                      const cv1209 = v2070;
                      
                      await (async () => {
                        const v1201 = cv1201;
                        const v1202 = cv1202;
                        const v1209 = cv1209;
                        
                        if (await (async () => {
                          const v1212 = stdlib.gt(v1201, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                          
                          return v1212;})()) {
                          const v1213 = ['Joining', null];
                          null;
                          sim_r.isHalt = false;
                          }
                        else {
                          const v2072 = ['Finished', null];
                          null;
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }})();}})();}}
              else {
                const v1896 = stdlib.sub(v1889, v1889);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1187,
                  tok: undefined /* Nothing */
                  });
                await stdlib.simMapSet(sim_r, 2, v1187, undefined /* Nothing */);
                const v1898 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:283:53:decimal', stdlib.UInt_max, '1'));
                const cv1842 = true;
                const cv1843 = v1898;
                const cv1844 = v1886;
                const cv1851 = v1896;
                
                await (async () => {
                  const v1842 = cv1842;
                  const v1843 = cv1843;
                  const v1844 = cv1844;
                  const v1851 = cv1851;
                  
                  if (await (async () => {
                    const v1855 = stdlib.gt(v1843, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
                    
                    return v1855;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v2070 = stdlib.sub(v1851, v1851);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v1198,
                      tok: undefined /* Nothing */
                      });
                    const v2071 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
                    const cv1201 = v2071;
                    const cv1202 = v1844;
                    const cv1209 = v2070;
                    
                    await (async () => {
                      const v1201 = cv1201;
                      const v1202 = cv1202;
                      const v1209 = cv1209;
                      
                      if (await (async () => {
                        const v1212 = stdlib.gt(v1201, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                        
                        return v1212;})()) {
                        const v1213 = ['Joining', null];
                        null;
                        sim_r.isHalt = false;
                        }
                      else {
                        const v2072 = ['Finished', null];
                        null;
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }})();}})();}
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc7, ctc2, ctc2, ctc7, ctc2, ctc2, ctc6, ctc2, ctc2],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1887, time: v1886, didSend: v900, from: v1885 } = txn9;
          const v1889 = stdlib.add(v1851, v1840);
          ;
          const v1890 = stdlib.addressEq(v1198, v1885);
          stdlib.assert(v1890, {
            at: './index.rsh:277:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Game'
            });
          if (v1842) {
            let v1899 = v1188;
            let v1900 = v1198;
            let v1901 = v1886;
            let v1908 = v1889;
            
            while (await (async () => {
              const v1912 = stdlib.addressEq(v1900, v1198);
              const v1913 = stdlib.gt(v1899, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
              const v1914 = v1912 ? v1913 : false;
              
              return v1914;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 26,
                out_tys: [ctc4],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v1925], secs: v1927, time: v1926, didSend: v985, from: v1924 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v1929 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1924), null);
              const v1930 = {
                None: 0,
                Some: 1
                }[v1929[0]];
              const v1931 = stdlib.eq(v1930, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v1931, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Game'
                });
              const v1933 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1924), null);
              const v1934 = {
                None: 0,
                Some: 1
                }[v1933[0]];
              const v1935 = stdlib.eq(v1934, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v1935) {
                const v1936 = null;
                await txn10.getOutput('Player_receivePay', 'v1936', ctc0, v1936);
                await stdlib.mapSet(map2, v1924, undefined /* Nothing */);
                await stdlib.mapSet(map0, v1924, undefined /* Nothing */);
                const v1948 = stdlib.sub(v1908, v1908);
                ;
                const v1949 = stdlib.safeSub(v1899, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
                const cv1899 = v1949;
                const cv1900 = v1924;
                const cv1901 = v1926;
                const cv1908 = v1948;
                
                v1899 = cv1899;
                v1900 = cv1900;
                v1901 = cv1901;
                v1908 = cv1908;
                
                continue;}
              else {
                const v1954 = null;
                await txn10.getOutput('Player_receivePay', 'v1954', ctc0, v1954);
                await stdlib.mapSet(map0, v1924, undefined /* Nothing */);
                const v1961 = stdlib.safeSub(v1899, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
                const cv1899 = v1961;
                const cv1900 = v1900;
                const cv1901 = v1926;
                const cv1908 = v1908;
                
                v1899 = cv1899;
                v1900 = cv1900;
                v1901 = cv1901;
                v1908 = cv1908;
                
                continue;}
              
              }
            const v1970 = stdlib.sub(v1908, v1908);
            ;
            const v1971 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v1971;
            const cv1844 = v1901;
            const cv1851 = v1970;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          else {
            const v1896 = stdlib.sub(v1889, v1889);
            ;
            await stdlib.mapSet(map2, v1187, undefined /* Nothing */);
            const v1898 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:283:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v1898;
            const cv1844 = v1886;
            const cv1851 = v1896;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          
          }
        else {
          const v1972 = null;
          await txn8.getOutput('Player_receivePay', 'v1972', ctc0, v1972);
          await stdlib.mapSet(map0, v1865, undefined /* Nothing */);
          const txn9 = await (ctc.sendrecv({
            args: [v1187, v1188, v1189, v1198, v1201, v1840, v1842, v1843, v1851],
            evt_cnt: 0,
            funcNum: 27,
            lct: v1867,
            onlyIf: true,
            out_tys: [],
            pay: [v1840, []],
            sim_p: (async (txn9) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1981, time: v1980, didSend: v900, from: v1979 } = txn9;
              
              const v1983 = stdlib.add(v1851, v1840);
              sim_r.txns.push({
                amt: v1840,
                kind: 'to',
                tok: undefined /* Nothing */
                });
              if (v1842) {
                const v1993 = v1188;
                const v1994 = v1198;
                const v1995 = v1980;
                const v2002 = v1983;
                
                if (await (async () => {
                  const v2006 = stdlib.addressEq(v1994, v1198);
                  const v2007 = stdlib.gt(v1993, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
                  const v2008 = v2006 ? v2007 : false;
                  
                  return v2008;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v2064 = stdlib.sub(v2002, v2002);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v1994,
                    tok: undefined /* Nothing */
                    });
                  const v2065 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
                  const cv1842 = true;
                  const cv1843 = v2065;
                  const cv1844 = v1995;
                  const cv1851 = v2064;
                  
                  await (async () => {
                    const v1842 = cv1842;
                    const v1843 = cv1843;
                    const v1844 = cv1844;
                    const v1851 = cv1851;
                    
                    if (await (async () => {
                      const v1855 = stdlib.gt(v1843, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
                      
                      return v1855;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v2070 = stdlib.sub(v1851, v1851);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v1198,
                        tok: undefined /* Nothing */
                        });
                      const v2071 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
                      const cv1201 = v2071;
                      const cv1202 = v1844;
                      const cv1209 = v2070;
                      
                      await (async () => {
                        const v1201 = cv1201;
                        const v1202 = cv1202;
                        const v1209 = cv1209;
                        
                        if (await (async () => {
                          const v1212 = stdlib.gt(v1201, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                          
                          return v1212;})()) {
                          const v1213 = ['Joining', null];
                          null;
                          sim_r.isHalt = false;
                          }
                        else {
                          const v2072 = ['Finished', null];
                          null;
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }})();}})();}}
              else {
                const v1990 = stdlib.sub(v1983, v1983);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1187,
                  tok: undefined /* Nothing */
                  });
                await stdlib.simMapSet(sim_r, 2, v1187, undefined /* Nothing */);
                const v1992 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:283:53:decimal', stdlib.UInt_max, '1'));
                const cv1842 = true;
                const cv1843 = v1992;
                const cv1844 = v1980;
                const cv1851 = v1990;
                
                await (async () => {
                  const v1842 = cv1842;
                  const v1843 = cv1843;
                  const v1844 = cv1844;
                  const v1851 = cv1851;
                  
                  if (await (async () => {
                    const v1855 = stdlib.gt(v1843, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
                    
                    return v1855;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v2070 = stdlib.sub(v1851, v1851);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v1198,
                      tok: undefined /* Nothing */
                      });
                    const v2071 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
                    const cv1201 = v2071;
                    const cv1202 = v1844;
                    const cv1209 = v2070;
                    
                    await (async () => {
                      const v1201 = cv1201;
                      const v1202 = cv1202;
                      const v1209 = cv1209;
                      
                      if (await (async () => {
                        const v1212 = stdlib.gt(v1201, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                        
                        return v1212;})()) {
                        const v1213 = ['Joining', null];
                        null;
                        sim_r.isHalt = false;
                        }
                      else {
                        const v2072 = ['Finished', null];
                        null;
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }})();}})();}
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc7, ctc2, ctc2, ctc7, ctc2, ctc2, ctc6, ctc2, ctc2],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1981, time: v1980, didSend: v900, from: v1979 } = txn9;
          const v1983 = stdlib.add(v1851, v1840);
          ;
          const v1984 = stdlib.addressEq(v1198, v1979);
          stdlib.assert(v1984, {
            at: './index.rsh:277:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Game'
            });
          if (v1842) {
            let v1993 = v1188;
            let v1994 = v1198;
            let v1995 = v1980;
            let v2002 = v1983;
            
            while (await (async () => {
              const v2006 = stdlib.addressEq(v1994, v1198);
              const v2007 = stdlib.gt(v1993, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
              const v2008 = v2006 ? v2007 : false;
              
              return v2008;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 29,
                out_tys: [ctc4],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v2019], secs: v2021, time: v2020, didSend: v985, from: v2018 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v2023 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2018), null);
              const v2024 = {
                None: 0,
                Some: 1
                }[v2023[0]];
              const v2025 = stdlib.eq(v2024, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v2025, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Game'
                });
              const v2027 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2018), null);
              const v2028 = {
                None: 0,
                Some: 1
                }[v2027[0]];
              const v2029 = stdlib.eq(v2028, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v2029) {
                const v2030 = null;
                await txn10.getOutput('Player_receivePay', 'v2030', ctc0, v2030);
                await stdlib.mapSet(map2, v2018, undefined /* Nothing */);
                await stdlib.mapSet(map0, v2018, undefined /* Nothing */);
                const v2042 = stdlib.sub(v2002, v2002);
                ;
                const v2043 = stdlib.safeSub(v1993, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
                const cv1993 = v2043;
                const cv1994 = v2018;
                const cv1995 = v2020;
                const cv2002 = v2042;
                
                v1993 = cv1993;
                v1994 = cv1994;
                v1995 = cv1995;
                v2002 = cv2002;
                
                continue;}
              else {
                const v2048 = null;
                await txn10.getOutput('Player_receivePay', 'v2048', ctc0, v2048);
                await stdlib.mapSet(map0, v2018, undefined /* Nothing */);
                const v2055 = stdlib.safeSub(v1993, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
                const cv1993 = v2055;
                const cv1994 = v1994;
                const cv1995 = v2020;
                const cv2002 = v2002;
                
                v1993 = cv1993;
                v1994 = cv1994;
                v1995 = cv1995;
                v2002 = cv2002;
                
                continue;}
              
              }
            const v2064 = stdlib.sub(v2002, v2002);
            ;
            const v2065 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v2065;
            const cv1844 = v1995;
            const cv1851 = v2064;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          else {
            const v1990 = stdlib.sub(v1983, v1983);
            ;
            await stdlib.mapSet(map2, v1187, undefined /* Nothing */);
            const v1992 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:283:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v1992;
            const cv1844 = v1980;
            const cv1851 = v1990;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          
          }
        
        }
      const v2070 = stdlib.sub(v1851, v1851);
      ;
      const v2071 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
      const cv1201 = v2071;
      const cv1202 = v1844;
      const cv1209 = v2070;
      
      v1201 = cv1201;
      v1202 = cv1202;
      v1209 = cv1209;
      
      continue;}
    
    
    
    
    
    
    
    }
  const v2072 = ['Finished', null];
  null;
  return;
  
  
  
  
  
  
  };
export async function _Player_getRole9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_getRole9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_getRole9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc2]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1187, v1188, v1189, v1198, v1201, v1242, v1312, v1321] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1364 = ctc.selfAddress();
  const v1366 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:101:9:application',
    fs: ['at ./index.rsh:101:9:application call to [unknown function] (defined at: ./index.rsh:101:9:function exp)', 'at ./index.rsh:191:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'Player_getRole'
    });
  const v1369 = stdlib.addressEq(v1364, v1187);
  const v1370 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1364), null);
  const v1371 = {
    None: 0,
    Some: 1
    }[v1370[0]];
  const v1372 = stdlib.eq(v1371, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1373 = v1369 ? v1372 : false;
  stdlib.assert(v1373, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:103:32:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:9:application call to [unknown function] (defined at: ./index.rsh:103:24:function exp)', 'at ./index.rsh:101:9:application call to [unknown function] (defined at: ./index.rsh:101:9:function exp)', 'at ./index.rsh:191:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1198, v1201, v1242, v1312, v1321, v1366],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:101:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1376], secs: v1378, time: v1377, didSend: v502, from: v1375 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_getRole"
        });
      ;
      const v1379 = v1376[stdlib.checkedBigNumberify('./index.rsh:101:17:array', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1375), null);
      const v1386 = null;
      const v1387 = await txn1.getOutput('Player_getRole', 'v1386', ctc0, v1386);
      
      await stdlib.simMapSet(sim_r, 1, v1375, v1379);
      const v3534 = stdlib.checkedBigNumberify('./index.rsh:194:22:decimal', stdlib.UInt_max, '0');
      const v3536 = v1321;
      const v3537 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:194:22:decimal', stdlib.UInt_max, '0'), v1242);
      if (v3537) {
        sim_r.isHalt = false;
        }
      else {
        const v3538 = ['CheckingWin', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1376], secs: v1378, time: v1377, didSend: v502, from: v1375 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1379 = v1376[stdlib.checkedBigNumberify('./index.rsh:101:17:array', stdlib.UInt_max, '0')];
  const v1380 = stdlib.addressEq(v1375, v1187);
  const v1381 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1375), null);
  const v1382 = {
    None: 0,
    Some: 1
    }[v1381[0]];
  const v1383 = stdlib.eq(v1382, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1384 = v1380 ? v1383 : false;
  stdlib.assert(v1384, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:104:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  const v1386 = null;
  const v1387 = await txn1.getOutput('Player_getRole', 'v1386', ctc0, v1386);
  stdlib.protect(ctc0, await interact.out(v1376, v1387), {
    at: './index.rsh:101:9:application',
    fs: ['at ./index.rsh:101:9:application call to [unknown function] (defined at: ./index.rsh:101:9:function exp)', 'at ./index.rsh:105:10:application call to "k" (defined at: ./index.rsh:101:9:function exp)', 'at ./index.rsh:191:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'out',
    who: 'Player_getRole'
    });
  
  await stdlib.mapSet(map1, v1375, v1379);
  const v3534 = stdlib.checkedBigNumberify('./index.rsh:194:22:decimal', stdlib.UInt_max, '0');
  const v3536 = v1321;
  const v3537 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:194:22:decimal', stdlib.UInt_max, '0'), v1242);
  if (v3537) {
    return;
    }
  else {
    const v3538 = ['CheckingWin', null];
    null;
    return;
    }
  
  
  };
export async function _Player_getRole32(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_getRole32 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_getRole32 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc2]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1187, v1188, v1189, v1198, v1201, v1242, v1312, v1393, v1401] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1406 = ctc.selfAddress();
  const v1408 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:198:34:application call to [unknown function] (defined at: ./index.rsh:198:34:function exp)', 'at ./index.rsh:198:34:application call to [unknown function] (defined at: ./index.rsh:198:34:function exp)'],
    msg: 'in',
    who: 'Player_getRole'
    });
  const v1411 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1406), null);
  const v1412 = {
    None: 0,
    Some: 1
    }[v1411[0]];
  const v1413 = stdlib.eq(v1412, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1413, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:34:application call to [unknown function] (defined at: ./index.rsh:198:34:function exp)', 'at ./index.rsh:198:34:application call to [unknown function] (defined at: ./index.rsh:198:34:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1198, v1201, v1242, v1312, v1393, v1401, v1408],
    evt_cnt: 1,
    funcNum: 31,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:198:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1419], secs: v1421, time: v1420, didSend: v612, from: v1418 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_getRole"
        });
      ;
      const v1423 = v1419[stdlib.checkedBigNumberify('./index.rsh:198:10:spread', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1418), null);
      const v1429 = null;
      const v1430 = await txn1.getOutput('Player_getRole', 'v1429', ctc0, v1429);
      
      await stdlib.simMapSet(sim_r, 1, v1418, v1423);
      const v1436 = stdlib.safeAdd(v1393, stdlib.checkedBigNumberify('./index.rsh:203:31:decimal', stdlib.UInt_max, '1'));
      const v3797 = v1436;
      const v3799 = v1401;
      const v3800 = stdlib.lt(v1436, v1242);
      if (v3800) {
        sim_r.isHalt = false;
        }
      else {
        const v3801 = ['CheckingWin', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1419], secs: v1421, time: v1420, didSend: v612, from: v1418 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1423 = v1419[stdlib.checkedBigNumberify('./index.rsh:198:10:spread', stdlib.UInt_max, '0')];
  const v1424 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1418), null);
  const v1425 = {
    None: 0,
    Some: 1
    }[v1424[0]];
  const v1426 = stdlib.eq(v1425, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1426, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:18:application call to [unknown function] (defined at: ./index.rsh:200:18:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  const v1429 = null;
  const v1430 = await txn1.getOutput('Player_getRole', 'v1429', ctc0, v1429);
  if (v612) {
    stdlib.protect(ctc0, await interact.out(v1419, v1430), {
      at: './index.rsh:198:11:application',
      fs: ['at ./index.rsh:198:11:application call to [unknown function] (defined at: ./index.rsh:198:11:function exp)', 'at ./index.rsh:201:10:application call to "k" (defined at: ./index.rsh:200:18:function exp)', 'at ./index.rsh:200:18:application call to [unknown function] (defined at: ./index.rsh:200:18:function exp)'],
      msg: 'out',
      who: 'Player_getRole'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map1, v1418, v1423);
  const v1436 = stdlib.safeAdd(v1393, stdlib.checkedBigNumberify('./index.rsh:203:31:decimal', stdlib.UInt_max, '1'));
  const v3797 = v1436;
  const v3799 = v1401;
  const v3800 = stdlib.lt(v1436, v1242);
  if (v3800) {
    return;
    }
  else {
    const v3801 = ['CheckingWin', null];
    null;
    return;
    }
  
  
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
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1187, v1188, v1189, v1198, v1201, v1209] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2]);
  const v1214 = ctc.selfAddress();
  const v1216 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:82:9:application',
    fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:9:function exp)', 'at ./index.rsh:154:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'Player_join'
    });
  const v1217 = stdlib.addressEq(v1214, v1187);
  const v1218 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1214), null);
  const v1219 = {
    None: 0,
    Some: 1
    }[v1218[0]];
  const v1220 = stdlib.eq(v1219, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1221 = v1220 ? false : true;
  const v1222 = v1217 ? v1221 : false;
  stdlib.assert(v1222, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:84:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:84:20:function exp)', 'at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:9:function exp)', 'at ./index.rsh:154:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1198, v1201, v1209, v1216],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1225], secs: v1227, time: v1226, didSend: v106, from: v1224 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_join"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1224), null);
      const v1235 = null;
      const v1236 = await txn1.getOutput('Player_join', 'v1235', ctc0, v1235);
      
      await stdlib.simMapSet(sim_r, 0, v1224, null);
      const v4060 = stdlib.checkedBigNumberify('./index.rsh:157:22:decimal', stdlib.UInt_max, '0');
      const v4062 = v1209;
      const v4063 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:157:22:decimal', stdlib.UInt_max, '0'), v1188);
      if (v4063) {
        sim_r.isHalt = false;
        }
      else {
        const v4064 = ['Wagering', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1225], secs: v1227, time: v1226, didSend: v106, from: v1224 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1228 = stdlib.addressEq(v1224, v1187);
  const v1229 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1224), null);
  const v1230 = {
    None: 0,
    Some: 1
    }[v1229[0]];
  const v1231 = stdlib.eq(v1230, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1232 = v1231 ? false : true;
  const v1233 = v1228 ? v1232 : false;
  stdlib.assert(v1233, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:154:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  const v1235 = null;
  const v1236 = await txn1.getOutput('Player_join', 'v1235', ctc0, v1235);
  stdlib.protect(ctc0, await interact.out(v1225, v1236), {
    at: './index.rsh:82:9:application',
    fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:9:function exp)', 'at ./index.rsh:86:10:application call to "k" (defined at: ./index.rsh:82:9:function exp)', 'at ./index.rsh:154:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'out',
    who: 'Player_join'
    });
  
  await stdlib.mapSet(map0, v1224, null);
  const v4060 = stdlib.checkedBigNumberify('./index.rsh:157:22:decimal', stdlib.UInt_max, '0');
  const v4062 = v1209;
  const v4063 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:157:22:decimal', stdlib.UInt_max, '0'), v1188);
  if (v4063) {
    return;
    }
  else {
    const v4064 = ['Wagering', null];
    null;
    return;
    }
  
  
  };
export async function _Player_join34(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_join34 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_join34 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1187, v1188, v1189, v1198, v1201, v1242, v1250] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '34'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2]);
  const v1255 = ctc.selfAddress();
  const v1257 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:161:27:application call to [unknown function] (defined at: ./index.rsh:161:27:function exp)', 'at ./index.rsh:161:27:application call to [unknown function] (defined at: ./index.rsh:161:27:function exp)'],
    msg: 'in',
    who: 'Player_join'
    });
  const v1258 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1255), null);
  const v1259 = {
    None: 0,
    Some: 1
    }[v1258[0]];
  const v1260 = stdlib.eq(v1259, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1261 = v1260 ? false : true;
  stdlib.assert(v1261, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:27:application call to [unknown function] (defined at: ./index.rsh:161:27:function exp)', 'at ./index.rsh:161:27:application call to [unknown function] (defined at: ./index.rsh:161:27:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1198, v1201, v1242, v1250, v1257],
    evt_cnt: 1,
    funcNum: 33,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:161:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1266], secs: v1268, time: v1267, didSend: v215, from: v1265 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_join"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1265), null);
      const v1275 = null;
      const v1276 = await txn1.getOutput('Player_join', 'v1275', ctc0, v1275);
      
      await stdlib.simMapSet(sim_r, 0, v1265, null);
      const v1282 = stdlib.safeAdd(v1242, stdlib.checkedBigNumberify('./index.rsh:166:33:decimal', stdlib.UInt_max, '1'));
      const v4385 = v1282;
      const v4387 = v1250;
      const v4388 = stdlib.lt(v1282, v1188);
      if (v4388) {
        sim_r.isHalt = false;
        }
      else {
        const v4389 = ['Wagering', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1266], secs: v1268, time: v1267, didSend: v215, from: v1265 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1270 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1265), null);
  const v1271 = {
    None: 0,
    Some: 1
    }[v1270[0]];
  const v1272 = stdlib.eq(v1271, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1273 = v1272 ? false : true;
  stdlib.assert(v1273, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:163:20:application call to [unknown function] (defined at: ./index.rsh:163:20:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  const v1275 = null;
  const v1276 = await txn1.getOutput('Player_join', 'v1275', ctc0, v1275);
  if (v215) {
    stdlib.protect(ctc0, await interact.out(v1266, v1276), {
      at: './index.rsh:161:11:application',
      fs: ['at ./index.rsh:161:11:application call to [unknown function] (defined at: ./index.rsh:161:11:function exp)', 'at ./index.rsh:164:10:application call to "k" (defined at: ./index.rsh:163:20:function exp)', 'at ./index.rsh:163:20:application call to [unknown function] (defined at: ./index.rsh:163:20:function exp)'],
      msg: 'out',
      who: 'Player_join'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v1265, null);
  const v1282 = stdlib.safeAdd(v1242, stdlib.checkedBigNumberify('./index.rsh:166:33:decimal', stdlib.UInt_max, '1'));
  const v4385 = v1282;
  const v4387 = v1250;
  const v4388 = stdlib.lt(v1282, v1188);
  if (v4388) {
    return;
    }
  else {
    const v4389 = ['Wagering', null];
    null;
    return;
    }
  
  
  };
export async function _Player_receivePay14(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay14 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay14 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1187, v1188, v1189, v1198, v1201, v1540, v1542, v1543, v1551] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc5, ctc2, ctc2]);
  const v1556 = ctc.selfAddress();
  const v1558 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:133:9:application',
    fs: ['at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:275:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1559 = stdlib.addressEq(v1556, v1187);
  const v1560 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1556), null);
  const v1561 = {
    None: 0,
    Some: 1
    }[v1560[0]];
  const v1562 = stdlib.eq(v1561, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1563 = v1559 ? v1562 : false;
  stdlib.assert(v1563, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:135:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:135:20:function exp)', 'at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:275:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1198, v1201, v1540, v1542, v1543, v1551, v1558],
    evt_cnt: 1,
    funcNum: 13,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:133:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1566], secs: v1568, time: v1567, didSend: v852, from: v1565 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1565), null);
      const v1575 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1565), null);
      const v1576 = {
        None: 0,
        Some: 1
        }[v1575[0]];
      const v1577 = stdlib.eq(v1576, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1577) {
        const v1578 = null;
        const v1579 = await txn1.getOutput('Player_receivePay', 'v1578', ctc0, v1578);
        
        await stdlib.simMapSet(sim_r, 0, v1565, undefined /* Nothing */);
        sim_r.isHalt = false;
        }
      else {
        const v1672 = null;
        const v1673 = await txn1.getOutput('Player_receivePay', 'v1672', ctc0, v1672);
        
        await stdlib.simMapSet(sim_r, 0, v1565, undefined /* Nothing */);
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc5, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v1566], secs: v1568, time: v1567, didSend: v852, from: v1565 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1569 = stdlib.addressEq(v1565, v1187);
  const v1570 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1565), null);
  const v1571 = {
    None: 0,
    Some: 1
    }[v1570[0]];
  const v1572 = stdlib.eq(v1571, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1573 = v1569 ? v1572 : false;
  stdlib.assert(v1573, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:136:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  const v1575 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1565), null);
  const v1576 = {
    None: 0,
    Some: 1
    }[v1575[0]];
  const v1577 = stdlib.eq(v1576, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1577) {
    const v1578 = null;
    const v1579 = await txn1.getOutput('Player_receivePay', 'v1578', ctc0, v1578);
    stdlib.protect(ctc0, await interact.out(v1566, v1579), {
      at: './index.rsh:133:9:application',
      fs: ['at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:139:12:application call to "k" (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:275:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1565, undefined /* Nothing */);
    return;
    }
  else {
    const v1672 = null;
    const v1673 = await txn1.getOutput('Player_receivePay', 'v1672', ctc0, v1672);
    stdlib.protect(ctc0, await interact.out(v1566, v1673), {
      at: './index.rsh:133:9:application',
      fs: ['at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:144:12:application call to "k" (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:275:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1565, undefined /* Nothing */);
    return;
    }
  
  
  };
export async function _Player_receivePay17(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay17 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay17 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1187, v1188, v1189, v1198, v1201, v1540, v1543, v1599, v1600, v1608] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2]);
  const v1615 = ctc.selfAddress();
  const v1617 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)', 'at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1618 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1615), null);
  const v1619 = {
    None: 0,
    Some: 1
    }[v1618[0]];
  const v1620 = stdlib.eq(v1619, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1620, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)', 'at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1198, v1201, v1540, v1543, v1599, v1600, v1608, v1617],
    evt_cnt: 1,
    funcNum: 16,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:292:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1625], secs: v1627, time: v1626, didSend: v985, from: v1624 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1624), null);
      const v1633 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1624), null);
      const v1634 = {
        None: 0,
        Some: 1
        }[v1633[0]];
      const v1635 = stdlib.eq(v1634, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1635) {
        const v1636 = null;
        const v1637 = await txn1.getOutput('Player_receivePay', 'v1636', ctc0, v1636);
        
        await stdlib.simMapSet(sim_r, 2, v1624, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 0, v1624, undefined /* Nothing */);
        const v1648 = stdlib.sub(v1608, v1608);
        sim_r.txns.push({
          kind: 'from',
          to: v1624,
          tok: undefined /* Nothing */
          });
        const v1649 = stdlib.safeSub(v1599, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
        const v4710 = v1649;
        const v4711 = v1624;
        const v4713 = v1648;
        const v4714 = stdlib.addressEq(v1624, v1198);
        const v4715 = stdlib.gt(v1649, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
        const v4716 = v4714 ? v4715 : false;
        if (v4716) {
          sim_r.isHalt = false;
          }
        else {
          const v4717 = stdlib.sub(v1648, v1648);
          sim_r.txns.push({
            kind: 'from',
            to: v1624,
            tok: undefined /* Nothing */
            });
          const v4718 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
          const v4719 = true;
          const v4720 = v4718;
          const v4722 = v4717;
          const v4723 = stdlib.gt(v4718, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
          if (v4723) {
            sim_r.isHalt = false;
            }
          else {
            const v4724 = stdlib.sub(v4717, v4717);
            sim_r.txns.push({
              kind: 'from',
              to: v1198,
              tok: undefined /* Nothing */
              });
            const v4725 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
            const v4726 = v4725;
            const v4728 = v4724;
            const v4729 = stdlib.gt(v4725, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4729) {
              const v4730 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4731 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1654 = null;
        const v1655 = await txn1.getOutput('Player_receivePay', 'v1654', ctc0, v1654);
        
        await stdlib.simMapSet(sim_r, 0, v1624, undefined /* Nothing */);
        const v1661 = stdlib.safeSub(v1599, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
        const v4732 = v1661;
        const v4733 = v1600;
        const v4735 = v1608;
        const v4736 = stdlib.addressEq(v1600, v1198);
        const v4737 = stdlib.gt(v1661, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
        const v4738 = v4736 ? v4737 : false;
        if (v4738) {
          sim_r.isHalt = false;
          }
        else {
          const v4739 = stdlib.sub(v1608, v1608);
          sim_r.txns.push({
            kind: 'from',
            to: v1600,
            tok: undefined /* Nothing */
            });
          const v4740 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
          const v4741 = true;
          const v4742 = v4740;
          const v4744 = v4739;
          const v4745 = stdlib.gt(v4740, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
          if (v4745) {
            sim_r.isHalt = false;
            }
          else {
            const v4746 = stdlib.sub(v4739, v4739);
            sim_r.txns.push({
              kind: 'from',
              to: v1198,
              tok: undefined /* Nothing */
              });
            const v4747 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
            const v4748 = v4747;
            const v4750 = v4746;
            const v4751 = stdlib.gt(v4747, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4751) {
              const v4752 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4753 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1625], secs: v1627, time: v1626, didSend: v985, from: v1624 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1629 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1624), null);
  const v1630 = {
    None: 0,
    Some: 1
    }[v1629[0]];
  const v1631 = stdlib.eq(v1630, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1631, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  const v1633 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1624), null);
  const v1634 = {
    None: 0,
    Some: 1
    }[v1633[0]];
  const v1635 = stdlib.eq(v1634, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1635) {
    const v1636 = null;
    const v1637 = await txn1.getOutput('Player_receivePay', 'v1636', ctc0, v1636);
    if (v985) {
      stdlib.protect(ctc0, await interact.out(v1625, v1637), {
        at: './index.rsh:292:15:application',
        fs: ['at ./index.rsh:292:15:application call to [unknown function] (defined at: ./index.rsh:292:15:function exp)', 'at ./index.rsh:296:16:application call to "k" (defined at: ./index.rsh:294:23:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map2, v1624, undefined /* Nothing */);
    await stdlib.mapSet(map0, v1624, undefined /* Nothing */);
    const v1648 = stdlib.sub(v1608, v1608);
    ;
    const v1649 = stdlib.safeSub(v1599, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
    const v4710 = v1649;
    const v4711 = v1624;
    const v4713 = v1648;
    const v4714 = stdlib.addressEq(v1624, v1198);
    const v4715 = stdlib.gt(v1649, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
    const v4716 = v4714 ? v4715 : false;
    if (v4716) {
      return;
      }
    else {
      const v4717 = stdlib.sub(v1648, v1648);
      ;
      const v4718 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
      const v4719 = true;
      const v4720 = v4718;
      const v4722 = v4717;
      const v4723 = stdlib.gt(v4718, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
      if (v4723) {
        return;
        }
      else {
        const v4724 = stdlib.sub(v4717, v4717);
        ;
        const v4725 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
        const v4726 = v4725;
        const v4728 = v4724;
        const v4729 = stdlib.gt(v4725, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4729) {
          const v4730 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4731 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1654 = null;
    const v1655 = await txn1.getOutput('Player_receivePay', 'v1654', ctc0, v1654);
    if (v985) {
      stdlib.protect(ctc0, await interact.out(v1625, v1655), {
        at: './index.rsh:292:15:application',
        fs: ['at ./index.rsh:292:15:application call to [unknown function] (defined at: ./index.rsh:292:15:function exp)', 'at ./index.rsh:302:16:application call to "k" (defined at: ./index.rsh:294:23:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v1624, undefined /* Nothing */);
    const v1661 = stdlib.safeSub(v1599, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
    const v4732 = v1661;
    const v4733 = v1600;
    const v4735 = v1608;
    const v4736 = stdlib.addressEq(v1600, v1198);
    const v4737 = stdlib.gt(v1661, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
    const v4738 = v4736 ? v4737 : false;
    if (v4738) {
      return;
      }
    else {
      const v4739 = stdlib.sub(v1608, v1608);
      ;
      const v4740 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
      const v4741 = true;
      const v4742 = v4740;
      const v4744 = v4739;
      const v4745 = stdlib.gt(v4740, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
      if (v4745) {
        return;
        }
      else {
        const v4746 = stdlib.sub(v4739, v4739);
        ;
        const v4747 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
        const v4748 = v4747;
        const v4750 = v4746;
        const v4751 = stdlib.gt(v4747, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4751) {
          const v4752 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4753 = ['Finished', null];
          null;
          return;
          }}}}
  
  
  };
export async function _Player_receivePay20(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay20 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay20 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1187, v1188, v1189, v1198, v1201, v1540, v1543, v1693, v1694, v1702] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2]);
  const v1709 = ctc.selfAddress();
  const v1711 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)', 'at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1712 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1709), null);
  const v1713 = {
    None: 0,
    Some: 1
    }[v1712[0]];
  const v1714 = stdlib.eq(v1713, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1714, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)', 'at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1198, v1201, v1540, v1543, v1693, v1694, v1702, v1711],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:292:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1719], secs: v1721, time: v1720, didSend: v985, from: v1718 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1718), null);
      const v1727 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1718), null);
      const v1728 = {
        None: 0,
        Some: 1
        }[v1727[0]];
      const v1729 = stdlib.eq(v1728, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1729) {
        const v1730 = null;
        const v1731 = await txn1.getOutput('Player_receivePay', 'v1730', ctc0, v1730);
        
        await stdlib.simMapSet(sim_r, 2, v1718, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 0, v1718, undefined /* Nothing */);
        const v1742 = stdlib.sub(v1702, v1702);
        sim_r.txns.push({
          kind: 'from',
          to: v1718,
          tok: undefined /* Nothing */
          });
        const v1743 = stdlib.safeSub(v1693, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
        const v4754 = v1743;
        const v4755 = v1718;
        const v4757 = v1742;
        const v4758 = stdlib.addressEq(v1718, v1198);
        const v4759 = stdlib.gt(v1743, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
        const v4760 = v4758 ? v4759 : false;
        if (v4760) {
          sim_r.isHalt = false;
          }
        else {
          const v4761 = stdlib.sub(v1742, v1742);
          sim_r.txns.push({
            kind: 'from',
            to: v1718,
            tok: undefined /* Nothing */
            });
          const v4762 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
          const v4763 = true;
          const v4764 = v4762;
          const v4766 = v4761;
          const v4767 = stdlib.gt(v4762, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
          if (v4767) {
            sim_r.isHalt = false;
            }
          else {
            const v4768 = stdlib.sub(v4761, v4761);
            sim_r.txns.push({
              kind: 'from',
              to: v1198,
              tok: undefined /* Nothing */
              });
            const v4769 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
            const v4770 = v4769;
            const v4772 = v4768;
            const v4773 = stdlib.gt(v4769, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4773) {
              const v4774 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4775 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1748 = null;
        const v1749 = await txn1.getOutput('Player_receivePay', 'v1748', ctc0, v1748);
        
        await stdlib.simMapSet(sim_r, 0, v1718, undefined /* Nothing */);
        const v1755 = stdlib.safeSub(v1693, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
        const v4776 = v1755;
        const v4777 = v1694;
        const v4779 = v1702;
        const v4780 = stdlib.addressEq(v1694, v1198);
        const v4781 = stdlib.gt(v1755, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
        const v4782 = v4780 ? v4781 : false;
        if (v4782) {
          sim_r.isHalt = false;
          }
        else {
          const v4783 = stdlib.sub(v1702, v1702);
          sim_r.txns.push({
            kind: 'from',
            to: v1694,
            tok: undefined /* Nothing */
            });
          const v4784 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
          const v4785 = true;
          const v4786 = v4784;
          const v4788 = v4783;
          const v4789 = stdlib.gt(v4784, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
          if (v4789) {
            sim_r.isHalt = false;
            }
          else {
            const v4790 = stdlib.sub(v4783, v4783);
            sim_r.txns.push({
              kind: 'from',
              to: v1198,
              tok: undefined /* Nothing */
              });
            const v4791 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
            const v4792 = v4791;
            const v4794 = v4790;
            const v4795 = stdlib.gt(v4791, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4795) {
              const v4796 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4797 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1719], secs: v1721, time: v1720, didSend: v985, from: v1718 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1723 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1718), null);
  const v1724 = {
    None: 0,
    Some: 1
    }[v1723[0]];
  const v1725 = stdlib.eq(v1724, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1725, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  const v1727 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1718), null);
  const v1728 = {
    None: 0,
    Some: 1
    }[v1727[0]];
  const v1729 = stdlib.eq(v1728, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1729) {
    const v1730 = null;
    const v1731 = await txn1.getOutput('Player_receivePay', 'v1730', ctc0, v1730);
    if (v985) {
      stdlib.protect(ctc0, await interact.out(v1719, v1731), {
        at: './index.rsh:292:15:application',
        fs: ['at ./index.rsh:292:15:application call to [unknown function] (defined at: ./index.rsh:292:15:function exp)', 'at ./index.rsh:296:16:application call to "k" (defined at: ./index.rsh:294:23:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map2, v1718, undefined /* Nothing */);
    await stdlib.mapSet(map0, v1718, undefined /* Nothing */);
    const v1742 = stdlib.sub(v1702, v1702);
    ;
    const v1743 = stdlib.safeSub(v1693, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
    const v4754 = v1743;
    const v4755 = v1718;
    const v4757 = v1742;
    const v4758 = stdlib.addressEq(v1718, v1198);
    const v4759 = stdlib.gt(v1743, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
    const v4760 = v4758 ? v4759 : false;
    if (v4760) {
      return;
      }
    else {
      const v4761 = stdlib.sub(v1742, v1742);
      ;
      const v4762 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
      const v4763 = true;
      const v4764 = v4762;
      const v4766 = v4761;
      const v4767 = stdlib.gt(v4762, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
      if (v4767) {
        return;
        }
      else {
        const v4768 = stdlib.sub(v4761, v4761);
        ;
        const v4769 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
        const v4770 = v4769;
        const v4772 = v4768;
        const v4773 = stdlib.gt(v4769, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4773) {
          const v4774 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4775 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1748 = null;
    const v1749 = await txn1.getOutput('Player_receivePay', 'v1748', ctc0, v1748);
    if (v985) {
      stdlib.protect(ctc0, await interact.out(v1719, v1749), {
        at: './index.rsh:292:15:application',
        fs: ['at ./index.rsh:292:15:application call to [unknown function] (defined at: ./index.rsh:292:15:function exp)', 'at ./index.rsh:302:16:application call to "k" (defined at: ./index.rsh:294:23:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v1718, undefined /* Nothing */);
    const v1755 = stdlib.safeSub(v1693, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
    const v4776 = v1755;
    const v4777 = v1694;
    const v4779 = v1702;
    const v4780 = stdlib.addressEq(v1694, v1198);
    const v4781 = stdlib.gt(v1755, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
    const v4782 = v4780 ? v4781 : false;
    if (v4782) {
      return;
      }
    else {
      const v4783 = stdlib.sub(v1702, v1702);
      ;
      const v4784 = stdlib.safeSub(v1543, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
      const v4785 = true;
      const v4786 = v4784;
      const v4788 = v4783;
      const v4789 = stdlib.gt(v4784, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
      if (v4789) {
        return;
        }
      else {
        const v4790 = stdlib.sub(v4783, v4783);
        ;
        const v4791 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
        const v4792 = v4791;
        const v4794 = v4790;
        const v4795 = stdlib.gt(v4791, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4795) {
          const v4796 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4797 = ['Finished', null];
          null;
          return;
          }}}}
  
  
  };
export async function _Player_receivePay24(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay24 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay24 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1187, v1188, v1189, v1198, v1201, v1840, v1842, v1843, v1851] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '24'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc5, ctc2, ctc2]);
  const v1856 = ctc.selfAddress();
  const v1858 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:133:9:application',
    fs: ['at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:275:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1859 = stdlib.addressEq(v1856, v1187);
  const v1860 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1856), null);
  const v1861 = {
    None: 0,
    Some: 1
    }[v1860[0]];
  const v1862 = stdlib.eq(v1861, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1863 = v1859 ? v1862 : false;
  stdlib.assert(v1863, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:135:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:135:20:function exp)', 'at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:275:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1198, v1201, v1840, v1842, v1843, v1851, v1858],
    evt_cnt: 1,
    funcNum: 23,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:133:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1866], secs: v1868, time: v1867, didSend: v852, from: v1865 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1865), null);
      const v1875 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1865), null);
      const v1876 = {
        None: 0,
        Some: 1
        }[v1875[0]];
      const v1877 = stdlib.eq(v1876, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1877) {
        const v1878 = null;
        const v1879 = await txn1.getOutput('Player_receivePay', 'v1878', ctc0, v1878);
        
        await stdlib.simMapSet(sim_r, 0, v1865, undefined /* Nothing */);
        sim_r.isHalt = false;
        }
      else {
        const v1972 = null;
        const v1973 = await txn1.getOutput('Player_receivePay', 'v1972', ctc0, v1972);
        
        await stdlib.simMapSet(sim_r, 0, v1865, undefined /* Nothing */);
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc5, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v1866], secs: v1868, time: v1867, didSend: v852, from: v1865 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1869 = stdlib.addressEq(v1865, v1187);
  const v1870 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1865), null);
  const v1871 = {
    None: 0,
    Some: 1
    }[v1870[0]];
  const v1872 = stdlib.eq(v1871, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1873 = v1869 ? v1872 : false;
  stdlib.assert(v1873, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:136:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  const v1875 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1865), null);
  const v1876 = {
    None: 0,
    Some: 1
    }[v1875[0]];
  const v1877 = stdlib.eq(v1876, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1877) {
    const v1878 = null;
    const v1879 = await txn1.getOutput('Player_receivePay', 'v1878', ctc0, v1878);
    stdlib.protect(ctc0, await interact.out(v1866, v1879), {
      at: './index.rsh:133:9:application',
      fs: ['at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:139:12:application call to "k" (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:275:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1865, undefined /* Nothing */);
    return;
    }
  else {
    const v1972 = null;
    const v1973 = await txn1.getOutput('Player_receivePay', 'v1972', ctc0, v1972);
    stdlib.protect(ctc0, await interact.out(v1866, v1973), {
      at: './index.rsh:133:9:application',
      fs: ['at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:144:12:application call to "k" (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:275:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1865, undefined /* Nothing */);
    return;
    }
  
  
  };
export async function _Player_receivePay27(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay27 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay27 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1187, v1188, v1189, v1198, v1201, v1840, v1843, v1899, v1900, v1908] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2]);
  const v1915 = ctc.selfAddress();
  const v1917 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)', 'at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1918 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1915), null);
  const v1919 = {
    None: 0,
    Some: 1
    }[v1918[0]];
  const v1920 = stdlib.eq(v1919, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1920, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)', 'at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1198, v1201, v1840, v1843, v1899, v1900, v1908, v1917],
    evt_cnt: 1,
    funcNum: 26,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:292:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1925], secs: v1927, time: v1926, didSend: v985, from: v1924 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1924), null);
      const v1933 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1924), null);
      const v1934 = {
        None: 0,
        Some: 1
        }[v1933[0]];
      const v1935 = stdlib.eq(v1934, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1935) {
        const v1936 = null;
        const v1937 = await txn1.getOutput('Player_receivePay', 'v1936', ctc0, v1936);
        
        await stdlib.simMapSet(sim_r, 2, v1924, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 0, v1924, undefined /* Nothing */);
        const v1948 = stdlib.sub(v1908, v1908);
        sim_r.txns.push({
          kind: 'from',
          to: v1924,
          tok: undefined /* Nothing */
          });
        const v1949 = stdlib.safeSub(v1899, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
        const v4798 = v1949;
        const v4799 = v1924;
        const v4801 = v1948;
        const v4802 = stdlib.addressEq(v1924, v1198);
        const v4803 = stdlib.gt(v1949, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
        const v4804 = v4802 ? v4803 : false;
        if (v4804) {
          sim_r.isHalt = false;
          }
        else {
          const v4805 = stdlib.sub(v1948, v1948);
          sim_r.txns.push({
            kind: 'from',
            to: v1924,
            tok: undefined /* Nothing */
            });
          const v4806 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
          const v4807 = true;
          const v4808 = v4806;
          const v4810 = v4805;
          const v4811 = stdlib.gt(v4806, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
          if (v4811) {
            sim_r.isHalt = false;
            }
          else {
            const v4812 = stdlib.sub(v4805, v4805);
            sim_r.txns.push({
              kind: 'from',
              to: v1198,
              tok: undefined /* Nothing */
              });
            const v4813 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
            const v4814 = v4813;
            const v4816 = v4812;
            const v4817 = stdlib.gt(v4813, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4817) {
              const v4818 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4819 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1954 = null;
        const v1955 = await txn1.getOutput('Player_receivePay', 'v1954', ctc0, v1954);
        
        await stdlib.simMapSet(sim_r, 0, v1924, undefined /* Nothing */);
        const v1961 = stdlib.safeSub(v1899, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
        const v4820 = v1961;
        const v4821 = v1900;
        const v4823 = v1908;
        const v4824 = stdlib.addressEq(v1900, v1198);
        const v4825 = stdlib.gt(v1961, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
        const v4826 = v4824 ? v4825 : false;
        if (v4826) {
          sim_r.isHalt = false;
          }
        else {
          const v4827 = stdlib.sub(v1908, v1908);
          sim_r.txns.push({
            kind: 'from',
            to: v1900,
            tok: undefined /* Nothing */
            });
          const v4828 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
          const v4829 = true;
          const v4830 = v4828;
          const v4832 = v4827;
          const v4833 = stdlib.gt(v4828, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
          if (v4833) {
            sim_r.isHalt = false;
            }
          else {
            const v4834 = stdlib.sub(v4827, v4827);
            sim_r.txns.push({
              kind: 'from',
              to: v1198,
              tok: undefined /* Nothing */
              });
            const v4835 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
            const v4836 = v4835;
            const v4838 = v4834;
            const v4839 = stdlib.gt(v4835, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4839) {
              const v4840 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4841 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1925], secs: v1927, time: v1926, didSend: v985, from: v1924 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1929 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1924), null);
  const v1930 = {
    None: 0,
    Some: 1
    }[v1929[0]];
  const v1931 = stdlib.eq(v1930, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1931, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  const v1933 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1924), null);
  const v1934 = {
    None: 0,
    Some: 1
    }[v1933[0]];
  const v1935 = stdlib.eq(v1934, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1935) {
    const v1936 = null;
    const v1937 = await txn1.getOutput('Player_receivePay', 'v1936', ctc0, v1936);
    if (v985) {
      stdlib.protect(ctc0, await interact.out(v1925, v1937), {
        at: './index.rsh:292:15:application',
        fs: ['at ./index.rsh:292:15:application call to [unknown function] (defined at: ./index.rsh:292:15:function exp)', 'at ./index.rsh:296:16:application call to "k" (defined at: ./index.rsh:294:23:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map2, v1924, undefined /* Nothing */);
    await stdlib.mapSet(map0, v1924, undefined /* Nothing */);
    const v1948 = stdlib.sub(v1908, v1908);
    ;
    const v1949 = stdlib.safeSub(v1899, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
    const v4798 = v1949;
    const v4799 = v1924;
    const v4801 = v1948;
    const v4802 = stdlib.addressEq(v1924, v1198);
    const v4803 = stdlib.gt(v1949, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
    const v4804 = v4802 ? v4803 : false;
    if (v4804) {
      return;
      }
    else {
      const v4805 = stdlib.sub(v1948, v1948);
      ;
      const v4806 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
      const v4807 = true;
      const v4808 = v4806;
      const v4810 = v4805;
      const v4811 = stdlib.gt(v4806, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
      if (v4811) {
        return;
        }
      else {
        const v4812 = stdlib.sub(v4805, v4805);
        ;
        const v4813 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
        const v4814 = v4813;
        const v4816 = v4812;
        const v4817 = stdlib.gt(v4813, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4817) {
          const v4818 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4819 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1954 = null;
    const v1955 = await txn1.getOutput('Player_receivePay', 'v1954', ctc0, v1954);
    if (v985) {
      stdlib.protect(ctc0, await interact.out(v1925, v1955), {
        at: './index.rsh:292:15:application',
        fs: ['at ./index.rsh:292:15:application call to [unknown function] (defined at: ./index.rsh:292:15:function exp)', 'at ./index.rsh:302:16:application call to "k" (defined at: ./index.rsh:294:23:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v1924, undefined /* Nothing */);
    const v1961 = stdlib.safeSub(v1899, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
    const v4820 = v1961;
    const v4821 = v1900;
    const v4823 = v1908;
    const v4824 = stdlib.addressEq(v1900, v1198);
    const v4825 = stdlib.gt(v1961, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
    const v4826 = v4824 ? v4825 : false;
    if (v4826) {
      return;
      }
    else {
      const v4827 = stdlib.sub(v1908, v1908);
      ;
      const v4828 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
      const v4829 = true;
      const v4830 = v4828;
      const v4832 = v4827;
      const v4833 = stdlib.gt(v4828, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
      if (v4833) {
        return;
        }
      else {
        const v4834 = stdlib.sub(v4827, v4827);
        ;
        const v4835 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
        const v4836 = v4835;
        const v4838 = v4834;
        const v4839 = stdlib.gt(v4835, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4839) {
          const v4840 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4841 = ['Finished', null];
          null;
          return;
          }}}}
  
  
  };
export async function _Player_receivePay30(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay30 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay30 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1187, v1188, v1189, v1198, v1201, v1840, v1843, v1993, v1994, v2002] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2]);
  const v2009 = ctc.selfAddress();
  const v2011 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)', 'at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v2012 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2009), null);
  const v2013 = {
    None: 0,
    Some: 1
    }[v2012[0]];
  const v2014 = stdlib.eq(v2013, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2014, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)', 'at ./index.rsh:292:37:application call to [unknown function] (defined at: ./index.rsh:292:37:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1198, v1201, v1840, v1843, v1993, v1994, v2002, v2011],
    evt_cnt: 1,
    funcNum: 29,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:292:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2019], secs: v2021, time: v2020, didSend: v985, from: v2018 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2018), null);
      const v2027 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2018), null);
      const v2028 = {
        None: 0,
        Some: 1
        }[v2027[0]];
      const v2029 = stdlib.eq(v2028, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v2029) {
        const v2030 = null;
        const v2031 = await txn1.getOutput('Player_receivePay', 'v2030', ctc0, v2030);
        
        await stdlib.simMapSet(sim_r, 2, v2018, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 0, v2018, undefined /* Nothing */);
        const v2042 = stdlib.sub(v2002, v2002);
        sim_r.txns.push({
          kind: 'from',
          to: v2018,
          tok: undefined /* Nothing */
          });
        const v2043 = stdlib.safeSub(v1993, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
        const v4842 = v2043;
        const v4843 = v2018;
        const v4845 = v2042;
        const v4846 = stdlib.addressEq(v2018, v1198);
        const v4847 = stdlib.gt(v2043, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
        const v4848 = v4846 ? v4847 : false;
        if (v4848) {
          sim_r.isHalt = false;
          }
        else {
          const v4849 = stdlib.sub(v2042, v2042);
          sim_r.txns.push({
            kind: 'from',
            to: v2018,
            tok: undefined /* Nothing */
            });
          const v4850 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
          const v4851 = true;
          const v4852 = v4850;
          const v4854 = v4849;
          const v4855 = stdlib.gt(v4850, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
          if (v4855) {
            sim_r.isHalt = false;
            }
          else {
            const v4856 = stdlib.sub(v4849, v4849);
            sim_r.txns.push({
              kind: 'from',
              to: v1198,
              tok: undefined /* Nothing */
              });
            const v4857 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
            const v4858 = v4857;
            const v4860 = v4856;
            const v4861 = stdlib.gt(v4857, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4861) {
              const v4862 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4863 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v2048 = null;
        const v2049 = await txn1.getOutput('Player_receivePay', 'v2048', ctc0, v2048);
        
        await stdlib.simMapSet(sim_r, 0, v2018, undefined /* Nothing */);
        const v2055 = stdlib.safeSub(v1993, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
        const v4864 = v2055;
        const v4865 = v1994;
        const v4867 = v2002;
        const v4868 = stdlib.addressEq(v1994, v1198);
        const v4869 = stdlib.gt(v2055, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
        const v4870 = v4868 ? v4869 : false;
        if (v4870) {
          sim_r.isHalt = false;
          }
        else {
          const v4871 = stdlib.sub(v2002, v2002);
          sim_r.txns.push({
            kind: 'from',
            to: v1994,
            tok: undefined /* Nothing */
            });
          const v4872 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
          const v4873 = true;
          const v4874 = v4872;
          const v4876 = v4871;
          const v4877 = stdlib.gt(v4872, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
          if (v4877) {
            sim_r.isHalt = false;
            }
          else {
            const v4878 = stdlib.sub(v4871, v4871);
            sim_r.txns.push({
              kind: 'from',
              to: v1198,
              tok: undefined /* Nothing */
              });
            const v4879 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
            const v4880 = v4879;
            const v4882 = v4878;
            const v4883 = stdlib.gt(v4879, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4883) {
              const v4884 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4885 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v2019], secs: v2021, time: v2020, didSend: v985, from: v2018 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v2023 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2018), null);
  const v2024 = {
    None: 0,
    Some: 1
    }[v2023[0]];
  const v2025 = stdlib.eq(v2024, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2025, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:293:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  const v2027 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2018), null);
  const v2028 = {
    None: 0,
    Some: 1
    }[v2027[0]];
  const v2029 = stdlib.eq(v2028, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v2029) {
    const v2030 = null;
    const v2031 = await txn1.getOutput('Player_receivePay', 'v2030', ctc0, v2030);
    if (v985) {
      stdlib.protect(ctc0, await interact.out(v2019, v2031), {
        at: './index.rsh:292:15:application',
        fs: ['at ./index.rsh:292:15:application call to [unknown function] (defined at: ./index.rsh:292:15:function exp)', 'at ./index.rsh:296:16:application call to "k" (defined at: ./index.rsh:294:23:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map2, v2018, undefined /* Nothing */);
    await stdlib.mapSet(map0, v2018, undefined /* Nothing */);
    const v2042 = stdlib.sub(v2002, v2002);
    ;
    const v2043 = stdlib.safeSub(v1993, stdlib.checkedBigNumberify('./index.rsh:300:35:decimal', stdlib.UInt_max, '1'));
    const v4842 = v2043;
    const v4843 = v2018;
    const v4845 = v2042;
    const v4846 = stdlib.addressEq(v2018, v1198);
    const v4847 = stdlib.gt(v2043, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
    const v4848 = v4846 ? v4847 : false;
    if (v4848) {
      return;
      }
    else {
      const v4849 = stdlib.sub(v2042, v2042);
      ;
      const v4850 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
      const v4851 = true;
      const v4852 = v4850;
      const v4854 = v4849;
      const v4855 = stdlib.gt(v4850, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
      if (v4855) {
        return;
        }
      else {
        const v4856 = stdlib.sub(v4849, v4849);
        ;
        const v4857 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
        const v4858 = v4857;
        const v4860 = v4856;
        const v4861 = stdlib.gt(v4857, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4861) {
          const v4862 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4863 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v2048 = null;
    const v2049 = await txn1.getOutput('Player_receivePay', 'v2048', ctc0, v2048);
    if (v985) {
      stdlib.protect(ctc0, await interact.out(v2019, v2049), {
        at: './index.rsh:292:15:application',
        fs: ['at ./index.rsh:292:15:application call to [unknown function] (defined at: ./index.rsh:292:15:function exp)', 'at ./index.rsh:302:16:application call to "k" (defined at: ./index.rsh:294:23:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v2018, undefined /* Nothing */);
    const v2055 = stdlib.safeSub(v1993, stdlib.checkedBigNumberify('./index.rsh:304:37:decimal', stdlib.UInt_max, '1'));
    const v4864 = v2055;
    const v4865 = v1994;
    const v4867 = v2002;
    const v4868 = stdlib.addressEq(v1994, v1198);
    const v4869 = stdlib.gt(v2055, stdlib.checkedBigNumberify('./index.rsh:291:44:decimal', stdlib.UInt_max, '0'));
    const v4870 = v4868 ? v4869 : false;
    if (v4870) {
      return;
      }
    else {
      const v4871 = stdlib.sub(v2002, v2002);
      ;
      const v4872 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:310:53:decimal', stdlib.UInt_max, '1'));
      const v4873 = true;
      const v4874 = v4872;
      const v4876 = v4871;
      const v4877 = stdlib.gt(v4872, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
      if (v4877) {
        return;
        }
      else {
        const v4878 = stdlib.sub(v4871, v4871);
        ;
        const v4879 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
        const v4880 = v4879;
        const v4882 = v4878;
        const v4883 = stdlib.gt(v4879, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4883) {
          const v4884 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4885 = ['Finished', null];
          null;
          return;
          }}}}
  
  
  };
export async function _Player_seeWinner11(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_seeWinner11 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_seeWinner11 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1187, v1188, v1189, v1198, v1201, v1312, v1393, v1401] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1441 = ctc.selfAddress();
  const v1443 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:110:9:application',
    fs: ['at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:110:9:function exp)', 'at ./index.rsh:213:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  const v1446 = stdlib.addressEq(v1441, v1187);
  const v1447 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1441), null);
  const v1448 = {
    None: 0,
    Some: 1
    }[v1447[0]];
  const v1449 = stdlib.eq(v1448, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1450 = v1446 ? v1449 : false;
  stdlib.assert(v1450, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:112:33:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:112:25:function exp)', 'at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:110:9:function exp)', 'at ./index.rsh:213:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1198, v1201, v1312, v1393, v1401, v1443],
    evt_cnt: 1,
    funcNum: 10,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:110:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1453], secs: v1455, time: v1454, didSend: v685, from: v1452 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_seeWinner"
        });
      ;
      const v1456 = v1453[stdlib.checkedBigNumberify('./index.rsh:110:17:array', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1452), null);
      const v1463 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1452), null);
      const v1464 = stdlib.fromSome(v1463, stdlib.checkedBigNumberify('./index.rsh:114:55:decimal', stdlib.UInt_max, '0'));
      const v1465 = stdlib.eq(v1464, v1456);
      const v1466 = v1465 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
      const v1467 = stdlib.eq(v1466, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1467) {
        const v1471 = true;
        const v1472 = await txn1.getOutput('Player_seeWinner', 'v1471', ctc6, v1471);
        
        await stdlib.simMapSet(sim_r, 1, v1452, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 2, v1452, null);
        const v4886 = v1393;
        const v4887 = stdlib.checkedBigNumberify('./index.rsh:122:18:decimal', stdlib.UInt_max, '1');
        const v4889 = v1401;
        const v4890 = stdlib.gt(v1393, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        if (v4890) {
          sim_r.isHalt = false;
          }
        else {
          const v4891 = v1312;
          const v4892 = ['PayingWinners', null];
          null;
          const v4987 = false;
          const v4988 = v1188;
          const v4990 = v1401;
          const v4991 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
          if (v4991) {
            sim_r.isHalt = false;
            }
          else {
            const v4992 = stdlib.sub(v1401, v1401);
            sim_r.txns.push({
              kind: 'from',
              to: v1198,
              tok: undefined /* Nothing */
              });
            const v4993 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
            const v4994 = v4993;
            const v4996 = v4992;
            const v4997 = stdlib.gt(v4993, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4997) {
              const v4998 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4999 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1772 = false;
        const v1773 = await txn1.getOutput('Player_seeWinner', 'v1772', ctc6, v1772);
        
        await stdlib.simMapSet(sim_r, 1, v1452, undefined /* Nothing */);
        const v5000 = v1393;
        const v5001 = stdlib.checkedBigNumberify('./index.rsh:128:18:decimal', stdlib.UInt_max, '0');
        const v5003 = v1401;
        const v5004 = stdlib.gt(v1393, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        if (v5004) {
          sim_r.isHalt = false;
          }
        else {
          const v5005 = stdlib.safeDiv(v1312, stdlib.checkedBigNumberify('./index.rsh:128:18:decimal', stdlib.UInt_max, '0'));
          const v5006 = ['PayingWinners', null];
          null;
          const v5101 = false;
          const v5102 = v1188;
          const v5104 = v1401;
          const v5105 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
          if (v5105) {
            sim_r.isHalt = false;
            }
          else {
            const v5106 = stdlib.sub(v1401, v1401);
            sim_r.txns.push({
              kind: 'from',
              to: v1198,
              tok: undefined /* Nothing */
              });
            const v5107 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
            const v5108 = v5107;
            const v5110 = v5106;
            const v5111 = stdlib.gt(v5107, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v5111) {
              const v5112 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v5113 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1453], secs: v1455, time: v1454, didSend: v685, from: v1452 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1456 = v1453[stdlib.checkedBigNumberify('./index.rsh:110:17:array', stdlib.UInt_max, '0')];
  const v1457 = stdlib.addressEq(v1452, v1187);
  const v1458 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1452), null);
  const v1459 = {
    None: 0,
    Some: 1
    }[v1458[0]];
  const v1460 = stdlib.eq(v1459, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1461 = v1457 ? v1460 : false;
  stdlib.assert(v1461, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:113:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_seeWinner'
    });
  const v1463 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1452), null);
  const v1464 = stdlib.fromSome(v1463, stdlib.checkedBigNumberify('./index.rsh:114:55:decimal', stdlib.UInt_max, '0'));
  const v1465 = stdlib.eq(v1464, v1456);
  const v1466 = v1465 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
  const v1467 = stdlib.eq(v1466, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v1467) {
    const v1471 = true;
    const v1472 = await txn1.getOutput('Player_seeWinner', 'v1471', ctc6, v1471);
    stdlib.protect(ctc0, await interact.out(v1453, v1472), {
      at: './index.rsh:110:9:application',
      fs: ['at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:110:9:function exp)', 'at ./index.rsh:119:12:application call to "k" (defined at: ./index.rsh:110:9:function exp)', 'at ./index.rsh:213:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: 'out',
      who: 'Player_seeWinner'
      });
    
    await stdlib.mapSet(map1, v1452, undefined /* Nothing */);
    await stdlib.mapSet(map2, v1452, null);
    const v4886 = v1393;
    const v4887 = stdlib.checkedBigNumberify('./index.rsh:122:18:decimal', stdlib.UInt_max, '1');
    const v4889 = v1401;
    const v4890 = stdlib.gt(v1393, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
    if (v4890) {
      return;
      }
    else {
      const v4891 = v1312;
      const v4892 = ['PayingWinners', null];
      null;
      const v4987 = false;
      const v4988 = v1188;
      const v4990 = v1401;
      const v4991 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
      if (v4991) {
        return;
        }
      else {
        const v4992 = stdlib.sub(v1401, v1401);
        ;
        const v4993 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
        const v4994 = v4993;
        const v4996 = v4992;
        const v4997 = stdlib.gt(v4993, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4997) {
          const v4998 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4999 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1772 = false;
    const v1773 = await txn1.getOutput('Player_seeWinner', 'v1772', ctc6, v1772);
    stdlib.protect(ctc0, await interact.out(v1453, v1773), {
      at: './index.rsh:110:9:application',
      fs: ['at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:110:9:function exp)', 'at ./index.rsh:126:12:application call to "k" (defined at: ./index.rsh:110:9:function exp)', 'at ./index.rsh:213:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: 'out',
      who: 'Player_seeWinner'
      });
    
    await stdlib.mapSet(map1, v1452, undefined /* Nothing */);
    const v5000 = v1393;
    const v5001 = stdlib.checkedBigNumberify('./index.rsh:128:18:decimal', stdlib.UInt_max, '0');
    const v5003 = v1401;
    const v5004 = stdlib.gt(v1393, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
    if (v5004) {
      return;
      }
    else {
      const v5005 = stdlib.safeDiv(v1312, stdlib.checkedBigNumberify('./index.rsh:128:18:decimal', stdlib.UInt_max, '0'));
      const v5006 = ['PayingWinners', null];
      null;
      const v5101 = false;
      const v5102 = v1188;
      const v5104 = v1401;
      const v5105 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
      if (v5105) {
        return;
        }
      else {
        const v5106 = stdlib.sub(v1401, v1401);
        ;
        const v5107 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
        const v5108 = v5107;
        const v5110 = v5106;
        const v5111 = stdlib.gt(v5107, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v5111) {
          const v5112 = ['Joining', null];
          null;
          return;
          }
        else {
          const v5113 = ['Finished', null];
          null;
          return;
          }}}}
  
  
  };
export async function _Player_seeWinner21(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_seeWinner21 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_seeWinner21 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1187, v1188, v1189, v1198, v1201, v1312, v1479, v1480, v1488] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1495 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:220:9:application call to [unknown function] (defined at: ./index.rsh:220:9:function exp)', 'at ./index.rsh:220:9:application call to [unknown function] (defined at: ./index.rsh:220:9:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1198, v1201, v1312, v1479, v1480, v1488, v1495],
    evt_cnt: 1,
    funcNum: 20,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:220:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1501], secs: v1503, time: v1502, didSend: v773, from: v1500 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_seeWinner"
        });
      ;
      const v1505 = v1501[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
      const v1506 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1500), null);
      const v1507 = stdlib.fromSome(v1506, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
      const v1508 = stdlib.eq(v1507, v1505);
      const v1509 = v1508 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
      const v1510 = stdlib.eq(v1509, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1510) {
        const v1514 = true;
        const v1515 = await txn1.getOutput('Player_seeWinner', 'v1514', ctc6, v1514);
        
        await stdlib.simMapSet(sim_r, 1, v1500, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 2, v1500, null);
        const v1522 = stdlib.safeAdd(v1480, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
        const v1523 = stdlib.safeSub(v1479, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
        const v5114 = v1523;
        const v5115 = v1522;
        const v5117 = v1488;
        const v5118 = stdlib.gt(v1523, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        if (v5118) {
          sim_r.isHalt = false;
          }
        else {
          const v5119 = stdlib.safeDiv(v1312, v1522);
          const v5120 = ['PayingWinners', null];
          null;
          const v5215 = false;
          const v5216 = v1188;
          const v5218 = v1488;
          const v5219 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
          if (v5219) {
            sim_r.isHalt = false;
            }
          else {
            const v5220 = stdlib.sub(v1488, v1488);
            sim_r.txns.push({
              kind: 'from',
              to: v1198,
              tok: undefined /* Nothing */
              });
            const v5221 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
            const v5222 = v5221;
            const v5224 = v5220;
            const v5225 = stdlib.gt(v5221, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v5225) {
              const v5226 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v5227 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1528 = false;
        const v1529 = await txn1.getOutput('Player_seeWinner', 'v1528', ctc6, v1528);
        
        await stdlib.simMapSet(sim_r, 1, v1500, undefined /* Nothing */);
        const v1535 = stdlib.safeSub(v1479, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
        const v5228 = v1535;
        const v5229 = v1480;
        const v5231 = v1488;
        const v5232 = stdlib.gt(v1535, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        if (v5232) {
          sim_r.isHalt = false;
          }
        else {
          const v5233 = stdlib.safeDiv(v1312, v1480);
          const v5234 = ['PayingWinners', null];
          null;
          const v5329 = false;
          const v5330 = v1188;
          const v5332 = v1488;
          const v5333 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
          if (v5333) {
            sim_r.isHalt = false;
            }
          else {
            const v5334 = stdlib.sub(v1488, v1488);
            sim_r.txns.push({
              kind: 'from',
              to: v1198,
              tok: undefined /* Nothing */
              });
            const v5335 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
            const v5336 = v5335;
            const v5338 = v5334;
            const v5339 = stdlib.gt(v5335, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v5339) {
              const v5340 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v5341 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1501], secs: v1503, time: v1502, didSend: v773, from: v1500 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1505 = v1501[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
  const v1506 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1500), null);
  const v1507 = stdlib.fromSome(v1506, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
  const v1508 = stdlib.eq(v1507, v1505);
  const v1509 = v1508 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
  const v1510 = stdlib.eq(v1509, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v1510) {
    const v1514 = true;
    const v1515 = await txn1.getOutput('Player_seeWinner', 'v1514', ctc6, v1514);
    if (v773) {
      stdlib.protect(ctc0, await interact.out(v1501, v1515), {
        at: './index.rsh:220:10:application',
        fs: ['at ./index.rsh:220:10:application call to [unknown function] (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:228:12:application call to "k" (defined at: ./index.rsh:221:17:function exp)', 'at ./index.rsh:221:17:application call to [unknown function] (defined at: ./index.rsh:221:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1500, undefined /* Nothing */);
    await stdlib.mapSet(map2, v1500, null);
    const v1522 = stdlib.safeAdd(v1480, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
    const v1523 = stdlib.safeSub(v1479, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
    const v5114 = v1523;
    const v5115 = v1522;
    const v5117 = v1488;
    const v5118 = stdlib.gt(v1523, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
    if (v5118) {
      return;
      }
    else {
      const v5119 = stdlib.safeDiv(v1312, v1522);
      const v5120 = ['PayingWinners', null];
      null;
      const v5215 = false;
      const v5216 = v1188;
      const v5218 = v1488;
      const v5219 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
      if (v5219) {
        return;
        }
      else {
        const v5220 = stdlib.sub(v1488, v1488);
        ;
        const v5221 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
        const v5222 = v5221;
        const v5224 = v5220;
        const v5225 = stdlib.gt(v5221, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v5225) {
          const v5226 = ['Joining', null];
          null;
          return;
          }
        else {
          const v5227 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1528 = false;
    const v1529 = await txn1.getOutput('Player_seeWinner', 'v1528', ctc6, v1528);
    if (v773) {
      stdlib.protect(ctc0, await interact.out(v1501, v1529), {
        at: './index.rsh:220:10:application',
        fs: ['at ./index.rsh:220:10:application call to [unknown function] (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:235:12:application call to "k" (defined at: ./index.rsh:221:17:function exp)', 'at ./index.rsh:221:17:application call to [unknown function] (defined at: ./index.rsh:221:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1500, undefined /* Nothing */);
    const v1535 = stdlib.safeSub(v1479, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
    const v5228 = v1535;
    const v5229 = v1480;
    const v5231 = v1488;
    const v5232 = stdlib.gt(v1535, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
    if (v5232) {
      return;
      }
    else {
      const v5233 = stdlib.safeDiv(v1312, v1480);
      const v5234 = ['PayingWinners', null];
      null;
      const v5329 = false;
      const v5330 = v1188;
      const v5332 = v1488;
      const v5333 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
      if (v5333) {
        return;
        }
      else {
        const v5334 = stdlib.sub(v1488, v1488);
        ;
        const v5335 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
        const v5336 = v5335;
        const v5338 = v5334;
        const v5339 = stdlib.gt(v5335, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v5339) {
          const v5340 = ['Joining', null];
          null;
          return;
          }
        else {
          const v5341 = ['Finished', null];
          null;
          return;
          }}}}
  
  
  };
export async function _Player_seeWinner31(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_seeWinner31 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_seeWinner31 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1187, v1188, v1189, v1198, v1201, v1312, v1779, v1780, v1788] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '31'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1795 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:220:9:application call to [unknown function] (defined at: ./index.rsh:220:9:function exp)', 'at ./index.rsh:220:9:application call to [unknown function] (defined at: ./index.rsh:220:9:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1198, v1201, v1312, v1779, v1780, v1788, v1795],
    evt_cnt: 1,
    funcNum: 30,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:220:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1801], secs: v1803, time: v1802, didSend: v773, from: v1800 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_seeWinner"
        });
      ;
      const v1805 = v1801[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
      const v1806 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1800), null);
      const v1807 = stdlib.fromSome(v1806, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
      const v1808 = stdlib.eq(v1807, v1805);
      const v1809 = v1808 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
      const v1810 = stdlib.eq(v1809, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1810) {
        const v1814 = true;
        const v1815 = await txn1.getOutput('Player_seeWinner', 'v1814', ctc6, v1814);
        
        await stdlib.simMapSet(sim_r, 1, v1800, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 2, v1800, null);
        const v1822 = stdlib.safeAdd(v1780, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
        const v1823 = stdlib.safeSub(v1779, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
        const v5342 = v1823;
        const v5343 = v1822;
        const v5345 = v1788;
        const v5346 = stdlib.gt(v1823, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        if (v5346) {
          sim_r.isHalt = false;
          }
        else {
          const v5347 = stdlib.safeDiv(v1312, v1822);
          const v5348 = ['PayingWinners', null];
          null;
          const v5443 = false;
          const v5444 = v1188;
          const v5446 = v1788;
          const v5447 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
          if (v5447) {
            sim_r.isHalt = false;
            }
          else {
            const v5448 = stdlib.sub(v1788, v1788);
            sim_r.txns.push({
              kind: 'from',
              to: v1198,
              tok: undefined /* Nothing */
              });
            const v5449 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
            const v5450 = v5449;
            const v5452 = v5448;
            const v5453 = stdlib.gt(v5449, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v5453) {
              const v5454 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v5455 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1828 = false;
        const v1829 = await txn1.getOutput('Player_seeWinner', 'v1828', ctc6, v1828);
        
        await stdlib.simMapSet(sim_r, 1, v1800, undefined /* Nothing */);
        const v1835 = stdlib.safeSub(v1779, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
        const v5456 = v1835;
        const v5457 = v1780;
        const v5459 = v1788;
        const v5460 = stdlib.gt(v1835, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        if (v5460) {
          sim_r.isHalt = false;
          }
        else {
          const v5461 = stdlib.safeDiv(v1312, v1780);
          const v5462 = ['PayingWinners', null];
          null;
          const v5557 = false;
          const v5558 = v1188;
          const v5560 = v1788;
          const v5561 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
          if (v5561) {
            sim_r.isHalt = false;
            }
          else {
            const v5562 = stdlib.sub(v1788, v1788);
            sim_r.txns.push({
              kind: 'from',
              to: v1198,
              tok: undefined /* Nothing */
              });
            const v5563 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
            const v5564 = v5563;
            const v5566 = v5562;
            const v5567 = stdlib.gt(v5563, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v5567) {
              const v5568 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v5569 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1801], secs: v1803, time: v1802, didSend: v773, from: v1800 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1805 = v1801[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
  const v1806 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1800), null);
  const v1807 = stdlib.fromSome(v1806, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
  const v1808 = stdlib.eq(v1807, v1805);
  const v1809 = v1808 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
  const v1810 = stdlib.eq(v1809, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v1810) {
    const v1814 = true;
    const v1815 = await txn1.getOutput('Player_seeWinner', 'v1814', ctc6, v1814);
    if (v773) {
      stdlib.protect(ctc0, await interact.out(v1801, v1815), {
        at: './index.rsh:220:10:application',
        fs: ['at ./index.rsh:220:10:application call to [unknown function] (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:228:12:application call to "k" (defined at: ./index.rsh:221:17:function exp)', 'at ./index.rsh:221:17:application call to [unknown function] (defined at: ./index.rsh:221:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1800, undefined /* Nothing */);
    await stdlib.mapSet(map2, v1800, null);
    const v1822 = stdlib.safeAdd(v1780, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
    const v1823 = stdlib.safeSub(v1779, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
    const v5342 = v1823;
    const v5343 = v1822;
    const v5345 = v1788;
    const v5346 = stdlib.gt(v1823, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
    if (v5346) {
      return;
      }
    else {
      const v5347 = stdlib.safeDiv(v1312, v1822);
      const v5348 = ['PayingWinners', null];
      null;
      const v5443 = false;
      const v5444 = v1188;
      const v5446 = v1788;
      const v5447 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
      if (v5447) {
        return;
        }
      else {
        const v5448 = stdlib.sub(v1788, v1788);
        ;
        const v5449 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
        const v5450 = v5449;
        const v5452 = v5448;
        const v5453 = stdlib.gt(v5449, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v5453) {
          const v5454 = ['Joining', null];
          null;
          return;
          }
        else {
          const v5455 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1828 = false;
    const v1829 = await txn1.getOutput('Player_seeWinner', 'v1828', ctc6, v1828);
    if (v773) {
      stdlib.protect(ctc0, await interact.out(v1801, v1829), {
        at: './index.rsh:220:10:application',
        fs: ['at ./index.rsh:220:10:application call to [unknown function] (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:235:12:application call to "k" (defined at: ./index.rsh:221:17:function exp)', 'at ./index.rsh:221:17:application call to [unknown function] (defined at: ./index.rsh:221:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1800, undefined /* Nothing */);
    const v1835 = stdlib.safeSub(v1779, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
    const v5456 = v1835;
    const v5457 = v1780;
    const v5459 = v1788;
    const v5460 = stdlib.gt(v1835, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
    if (v5460) {
      return;
      }
    else {
      const v5461 = stdlib.safeDiv(v1312, v1780);
      const v5462 = ['PayingWinners', null];
      null;
      const v5557 = false;
      const v5558 = v1188;
      const v5560 = v1788;
      const v5561 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:272:27:decimal', stdlib.UInt_max, '0'));
      if (v5561) {
        return;
        }
      else {
        const v5562 = stdlib.sub(v1788, v1788);
        ;
        const v5563 = stdlib.safeSub(v1201, stdlib.checkedBigNumberify('./index.rsh:317:41:decimal', stdlib.UInt_max, '1'));
        const v5564 = v5563;
        const v5566 = v5562;
        const v5567 = stdlib.gt(v5563, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v5567) {
          const v5568 = ['Joining', null];
          null;
          return;
          }
        else {
          const v5569 = ['Finished', null];
          null;
          return;
          }}}}
  
  
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
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1187, v1188, v1189, v1198, v1201, v1242, v1250] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2]);
  const v1285 = ctc.selfAddress();
  const v1287 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:91:9:application',
    fs: ['at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:9:function exp)', 'at ./index.rsh:173:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'Player_wager'
    });
  const v1288 = stdlib.addressEq(v1285, v1187);
  const v1289 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1285), null);
  const v1290 = {
    None: 0,
    Some: 1
    }[v1289[0]];
  const v1291 = stdlib.eq(v1290, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1292 = v1288 ? v1291 : false;
  stdlib.assert(v1292, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:94:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:94:20:function exp)', 'at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:9:function exp)', 'at ./index.rsh:173:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1198, v1201, v1242, v1250, v1287],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v1189, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1295], secs: v1297, time: v1296, didSend: v287, from: v1294 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_wager"
        });
      const v1299 = stdlib.add(v1250, v1189);
      sim_r.txns.push({
        amt: v1189,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1294), null);
      const v1306 = null;
      const v1307 = await txn1.getOutput('Player_wager', 'v1306', ctc0, v1306);
      
      const v5570 = v1189;
      const v5571 = v1242;
      const v5573 = v1299;
      const v5574 = stdlib.gt(v1242, stdlib.checkedBigNumberify('./index.rsh:179:32:decimal', stdlib.UInt_max, '0'));
      if (v5574) {
        sim_r.isHalt = false;
        }
      else {
        const v5575 = ['PickingRoles', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1295], secs: v1297, time: v1296, didSend: v287, from: v1294 } = txn1;
  undefined /* setApiDetails */;
  const v1299 = stdlib.add(v1250, v1189);
  ;
  const v1300 = stdlib.addressEq(v1294, v1187);
  const v1301 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1294), null);
  const v1302 = {
    None: 0,
    Some: 1
    }[v1301[0]];
  const v1303 = stdlib.eq(v1302, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1304 = v1300 ? v1303 : false;
  stdlib.assert(v1304, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:95:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  const v1306 = null;
  const v1307 = await txn1.getOutput('Player_wager', 'v1306', ctc0, v1306);
  stdlib.protect(ctc0, await interact.out(v1295, v1307), {
    at: './index.rsh:91:9:application',
    fs: ['at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:9:function exp)', 'at ./index.rsh:96:10:application call to "k" (defined at: ./index.rsh:91:9:function exp)', 'at ./index.rsh:173:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'out',
    who: 'Player_wager'
    });
  
  const v5570 = v1189;
  const v5571 = v1242;
  const v5573 = v1299;
  const v5574 = stdlib.gt(v1242, stdlib.checkedBigNumberify('./index.rsh:179:32:decimal', stdlib.UInt_max, '0'));
  if (v5574) {
    return;
    }
  else {
    const v5575 = ['PickingRoles', null];
    null;
    return;
    }
  
  
  };
export async function _Player_wager33(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_wager33 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_wager33 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1187, v1188, v1189, v1198, v1201, v1242, v1312, v1313, v1321] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '33'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1326 = ctc.selfAddress();
  const v1328 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)'],
    msg: 'in',
    who: 'Player_wager'
    });
  const v1329 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
  const v1330 = {
    None: 0,
    Some: 1
    }[v1329[0]];
  const v1331 = stdlib.eq(v1330, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1331, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:181:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1188, v1189, v1198, v1201, v1242, v1312, v1313, v1321, v1328],
    evt_cnt: 1,
    funcNum: 32,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v1189, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1340], secs: v1342, time: v1341, didSend: v434, from: v1339 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_wager"
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1339), null);
      const v1349 = stdlib.add(v1321, v1189);
      sim_r.txns.push({
        amt: v1189,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1354 = null;
      const v1355 = await txn1.getOutput('Player_wager', 'v1354', ctc0, v1354);
      
      const v1360 = stdlib.safeAdd(v1312, v1189);
      const v1361 = stdlib.safeSub(v1313, stdlib.checkedBigNumberify('./index.rsh:184:55:decimal', stdlib.UInt_max, '1'));
      const v5864 = v1360;
      const v5865 = v1361;
      const v5867 = v1349;
      const v5868 = stdlib.gt(v1361, stdlib.checkedBigNumberify('./index.rsh:179:32:decimal', stdlib.UInt_max, '0'));
      if (v5868) {
        sim_r.isHalt = false;
        }
      else {
        const v5869 = ['PickingRoles', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1340], secs: v1342, time: v1341, didSend: v434, from: v1339 } = txn1;
  undefined /* setApiDetails */;
  const v1344 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1339), null);
  const v1345 = {
    None: 0,
    Some: 1
    }[v1344[0]];
  const v1346 = stdlib.eq(v1345, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1346, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:181:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  const v1349 = stdlib.add(v1321, v1189);
  ;
  const v1354 = null;
  const v1355 = await txn1.getOutput('Player_wager', 'v1354', ctc0, v1354);
  if (v434) {
    stdlib.protect(ctc0, await interact.out(v1340, v1355), {
      at: './index.rsh:180:13:application',
      fs: ['at ./index.rsh:180:13:application call to [unknown function] (defined at: ./index.rsh:180:13:function exp)', 'at ./index.rsh:183:12:application call to "k" (defined at: ./index.rsh:182:27:function exp)', 'at ./index.rsh:182:27:application call to [unknown function] (defined at: ./index.rsh:182:27:function exp)'],
      msg: 'out',
      who: 'Player_wager'
      });
    }
  else {
    }
  
  const v1360 = stdlib.safeAdd(v1312, v1189);
  const v1361 = stdlib.safeSub(v1313, stdlib.checkedBigNumberify('./index.rsh:184:55:decimal', stdlib.UInt_max, '1'));
  const v5864 = v1360;
  const v5865 = v1361;
  const v5867 = v1349;
  const v5868 = stdlib.gt(v1361, stdlib.checkedBigNumberify('./index.rsh:179:32:decimal', stdlib.UInt_max, '0'));
  if (v5868) {
    return;
    }
  else {
    const v5869 = ['PickingRoles', null];
    null;
    return;
    }
  
  
  };
export async function Player_getRole(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_getRole expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_getRole expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Player_getRole9(ctcTop, interact);}
  if (step == 32) {return _Player_getRole32(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
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
  if (step == 34) {return _Player_join34(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '34')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_receivePay(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_receivePay expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_receivePay expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 14) {return _Player_receivePay14(ctcTop, interact);}
  if (step == 17) {return _Player_receivePay17(ctcTop, interact);}
  if (step == 20) {return _Player_receivePay20(ctcTop, interact);}
  if (step == 24) {return _Player_receivePay24(ctcTop, interact);}
  if (step == 27) {return _Player_receivePay27(ctcTop, interact);}
  if (step == 30) {return _Player_receivePay30(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '24'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_seeWinner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_seeWinner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_seeWinner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 11) {return _Player_seeWinner11(ctcTop, interact);}
  if (step == 21) {return _Player_seeWinner21(ctcTop, interact);}
  if (step == 31) {return _Player_seeWinner31(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '31')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
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
  if (step == 33) {return _Player_wager33(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '33')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Player_getRole(uint64)byte[0]`, `Player_join()byte[0]`, `Player_receivePay()byte[0]`, `Player_seeWinner(uint64)byte`, `Player_wager()byte[0]`, `_Player_getRole31(uint64)byte[0]`, `_Player_getRole8(uint64)byte[0]`, `_Player_join33()byte[0]`, `_Player_join4()byte[0]`, `_Player_receivePay13()byte[0]`, `_Player_receivePay16()byte[0]`, `_Player_receivePay19()byte[0]`, `_Player_receivePay23()byte[0]`, `_Player_receivePay26()byte[0]`, `_Player_receivePay29()byte[0]`, `_Player_seeWinner10(uint64)byte`, `_Player_seeWinner20(uint64)byte`, `_Player_seeWinner30(uint64)byte`, `_Player_wager32()byte[0]`, `_Player_wager6()byte[0]`],
    pure: [],
    sigs: [`Player_getRole(uint64)byte[0]`, `Player_join()byte[0]`, `Player_receivePay()byte[0]`, `Player_seeWinner(uint64)byte`, `Player_wager()byte[0]`, `_Player_getRole31(uint64)byte[0]`, `_Player_getRole8(uint64)byte[0]`, `_Player_join33()byte[0]`, `_Player_join4()byte[0]`, `_Player_receivePay13()byte[0]`, `_Player_receivePay16()byte[0]`, `_Player_receivePay19()byte[0]`, `_Player_receivePay23()byte[0]`, `_Player_receivePay26()byte[0]`, `_Player_receivePay29()byte[0]`, `_Player_seeWinner10(uint64)byte`, `_Player_seeWinner20(uint64)byte`, `_Player_seeWinner30(uint64)byte`, `_Player_wager32()byte[0]`, `_Player_wager6()byte[0]`]
    },
  appApproval: `BiA9AAEgKFBYCmBoCSEUYWkIHh8LEBtwkAEYDhECFxodEwQGBaG+1M4H/ob39Q3DyeehDsX8wKwOztnOuw8N1Mit9w3jhanjCIjL4P4I+eWS/AvB+8DHCKfy2OkC+8Xohwae+9fvBsLqwLwHm+bTngXno/XUAafLxtMCi/Ti4QKvr/yqASIcGRUSDwcwJgQBAAABAQXVEPDMAyI1ADEYQRj9KWRJIls1ASEOWzUCMRkjEkEACjEAKCERr2ZCGMk2GgAXSUEB3CI1BCM1BkkhIQxAAQJJISIMQACkSSEjDEAAcUkhJAxAABdJISUMQAAIISUSRClCAd4hJBJEKUIRHiEjEkQ0AUkhGgxAACNJIRsMQAAVSSEcDEAAByEcEkRCAIAhGxJEQgCpIRoSREIA2kkhEgxAABVJIR0MQAAHIR0SREIBTiESEkRCAVMhJhJEQgDOSSEnDEAACiEnEkQ2GgFCAwEhIhJENAFJIQoMQAAHIQoSREL/fCEeEkRC/31JISgMQAAoSSEpDEAAGUkhKgxAAAohKhJENhoBQgh+ISkSRClCA8ghKBJEKUIBnUkhKwxAABkhKxJENAFJJAxAAAYkEkRC/+MhHxJEQgBLISESRClCBWZJISwMQABISSEtDEAAKkkhLgxAABtJIS8MQAAKIS8SRDYaAUIO9iEuEkQ2GgFCAcUhLRJEKUIG50khMAxAAAghMBJEKUIPfSEsEkQpQgycSSExDEAAXEkhMgxAADpJITMMQAApITMSRDQBSSELDEAAFUkhDwxAAAchDxJEQv8JIQsSREL/PCEGEkRCAAQhMhJENhoBQg10ITESRDQBSSEQDEAAByEQEkRC/38hDhJEQv9uSSE0DEAACCE0EkQpQgiOgbOBkoEBEkQpQgpXNhoCFzUENhoDNhoBF0khHQxACXFJIRMMQARoSSEQDEABkUkkDEAA/0khCgxAAHghChJEITU0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABPKZyqE0/1CwMQCIFr5XAAEiVSMTRIAIAAAAAAAABPuwKTUHMQAoMQCIFqAjIkxWZjQDVwAgNAMkWzQDJVs0A1cwIDQDIQRbNAMhBVsjCDIGNAMhB1tCEJFIIQo0ARJENARJIhJMNAISEUQoZEk1AyVbNf9JNQU1/oAEe6Z/ADT+ULAxAIgWRFcAASJVIxJENP+IFkaACAAAAAAAAAVKsCk1BzQDVwAgNAMkWzT/NANXMCA0AyEEWzQDIQVbNAMhB1s0/wg0AyEIWyMJMgY0AyEUWzT/CEIQiUgkNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gARp07fjNP9QsDEAiBXKVwABIlUjEkSACAAAAAAAAAWVsCk1BzEAKDEAiBWsKjT/UDX+SVcAATT+UExXCgFQZjQDVwAgNAMkWzQDJVs0A1cwIDQDIQRbNAMhBVs0AyEHWzQDIQhbIwgyBjQDIRRbQhCESSEcDEACFEkhDwxAAQlIIRA0ARJENARJIhJMNAISEUQoZEk1A0lKSkpJVwAgNf8kWzX+JVs1/VcwIDX8IQRbNfshBVs1+iEHWzX5IQhbNfghFFs190k1BTX2gATwRAIENPZQsCIjIjEAiBT7VwEJSTX1I1s09SJVTTT2FxJNIxJBAFKACQAAAAAAAAcWAbAqNQcxACgxAIgUzSEJrzX1SVcAATT1UExXCgFQZjEAKDEAiBSzIyEGTFZmNP80/jT9NPw0+zT6NPkjCTT4IwgyBjT3QhItgAkAAAAAAAAHJACwKDUHMQAoMQCIFHshCa819UlXAAE09VBMVwoBUGY0/zT+NP00/DT7NPo0+SMJNPgyBjT3QhHrSCEPNAESRDQESSISTDQCEhFEKGQqZFBJNQNJSkpKSVcAIDX/JFs1/iVbNf1XMCA1/CEEWzX7IQVbNfohB1s1+SEIWzX4IRVbNfdJNQU19oAEJadS7TT2ULAxAIgT8lcAASJVIxJEMQCIE+VXCgEiVSMSQQBWgAgAAAAAAAAH7rApNQcxACgxAIgTxSIhBkxWZjEAKDEAiBO3IiJMVmaxIrIBNPeyCCOyEDEAsgezNP80/jT9NPw0+zT6NPk0+CMJMQAyBjT3SQlCEoyACAAAAAAAAAgAsCk1BzEAKDEAiBNvIiJMVmY0/zT+NP00/DT7NPo0+TT4Iwk0A1dwIDIGNPdCElMhExJEITY0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yRbNf4lWzX9VzAgNfwhBFs1+yEFWzX6IQxbNfmABKvRFKKwNAMhDVs0+gg1+DT6iBMGNPwxABJENANXYAEXQQAZNP80/jT9NPw0+zT6NPk0/jT8MgY0+EIR1rEisgE0+LIII7IQNP+yB7M0/yg0/4gStyIhBkxWZjT/NP40/TT8NPs0+iM0+SMJMgY0+EkJQhCcSSEaDEAC5EkhFgxAAcBJIRsMQAEESCETNAESRDQESSISTDQCEhFEKGQqZFBJNQNJSkpKSVcAIDX/JFs1/iVbNf1XMCA1/CEEWzX7IQVbNfohB1s1+SEIWzX4IRVbNfdJNQU19oAEZRiTOzT2ULAxAIgSJFcAASJVIxJEMQCIEhdXCgEiVSMSQQBWgAgAAAAAAAAHkLApNQcxACgxAIgR9yIhBkxWZjEAKDEAiBHpIiJMVmaxIrIBNPeyCCOyEDEAsgezNP80/jT9NPw0+zT6NPk0+CMJMQAyBjT3SQlCEDOACAAAAAAAAAeisCk1BzEAKDEAiBGhIiJMVmY0/zT+NP00/DT7NPo0+TT4Iwk0A1dwIDIGNPdCD/ohFhJEITc0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yRbNf4lWzX9VzAgNfwhBFs1+yEFWzX6IQxbNfmABOQ1lYiwNAMhDVs0+gg1+DT6iBE4NPwxABJENANXYAEXQQAZNP80/jT9NPw0+zT6NPk0/jT8MgY0+EIPfbEisgE0+LIII7IQNP+yB7M0/yg0/4gQ6SIhBkxWZjT/NP40/TT8NPs0+iM0+SMJMgY0+EkJQg7OSCEWNAESRDQESSISTDQCEhFEKGRJNQNJSkpKSVcAIDX/JFs1/iVbNf1XMCA1/CEEWzX7IQVbNfpXYAEXNfkhDFs1+CENWzX3STUFNfaABDvuQEU09lCwMQA0/xIxAIgQaFcAASJVIxIQRDEAiBBaVwoBIlUjEkEAUoAIAAAAAAAAB1awKTUHMQAoMQCIEDoiIkxWZjT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5FlEHCFA0+BZQNPcWUChLAVcAcWdIITc1ATIGNQJCD6yACAAAAAAAAAe0sCk1BzEAKDEAiA/oIiJMVmY0/zT+FlA0/RZQNPxQNPsWUDT6FlA0+RZRBwhQNPgWUDT3FlAoSwFXAHFnSCE2NQEyBjUCQg9aSSELDEABDCELEkQhODQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSklXACA1/yRbNf4lWzX9VzAgNfwhBFs1+yEFWzX6IQdbNfkhCFs1+CEUWzX3STUFNfaABOMbau809lCwIiMiMQCID0RXAQlJNfUjWzT1IlVNNPYXEk0jEkEAUoAJAAAAAAAABeoBsCo1BzEAKDEAiA8WIQmvNfVJVwABNPVQTFcKAVBmMQAoMQCIDvwjIQZMVmY0/zT+NP00/DT7NPo0+SMJNPgjCDIGNPdCCn+ACQAAAAAAAAX4ALAoNQcxACgxAIgOxCEJrzX1SVcAATT1UExXCgFQZjT/NP40/TT8NPs0+jT5Iwk0+DIGNPdCCj1IIQs0ARJENARJIhJMNAISEUQoZCpkUEk1A0lKSkpJVwAgNf8kWzX+JVs1/VcwIDX8IQRbNfshBVs1+iEHWzX5IQhbNfghFVs190k1BTX2gAR0451PNPZQsDEAiA47VwABIlUjEkQxAIgOLlcKASJVIxJBAFaACAAAAAAAAAbCsCk1BzEAKDEAiA4OIiEGTFZmMQAoMQCIDgAiIkxWZrEisgE097III7IQMQCyB7M0/zT+NP00/DT7NPo0+TT4IwkxADIGNPdJCUIK3oAIAAAAAAAABtSwKTUHMQAoMQCIDbgiIkxWZjT/NP40/TT8NPs0+jT5NPgjCTQDV3AgMgY090IKpUkhDgxABVJJIRcMQAJ8SSESDEABwEkhGAxAALUhGBJEITk0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yRbNf4lWzX9VzAgNfwhBFs1+yEFWzX6IQxbNfmABACB0o6wNAMhDVs0+gg1+DT6iA0zNPwxABJENANXYAEXQQAZNP80/jT9NPw0+zT6NPk0/jT8MgY0+EIKDLEisgE0+LIII7IQNP+yB7M0/yg0/4gM5CIhBkxWZjT/NP40/TT8NPs0+iM0+SMJMgY0+EkJQgjSSCEYNAESRDQESSISTDQCEhFEKGQqZFBJNQNJSkpKSVcAIDX/JFs1/iVbNf1XMCA1/CEEWzX7IQVbNfohB1s1+SEIWzX4IRVbNfdJNQU19oAEdErMoDT2ULAxAIgMZlcAASJVIxJEMQCIDFlXCgEiVSMSQQBWgAgAAAAAAAAGZLApNQcxACgxAIgMOSIhBkxWZjEAKDEAiAwrIiJMVmaxIrIBNPeyCCOyEDEAsgezNP80/jT9NPw0+zT6NPk0+CMJMQAyBjT3SQlCCH6ACAAAAAAAAAZ2sCk1BzEAKDEAiAvjIiJMVmY0/zT+NP00/DT7NPo0+TT4Iwk0A1dwIDIGNPdCCEUhFxJEITo0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yRbNf4lWzX9VzAgNfwhBFs1+yEFWzX6IQxbNfmABM+JAiCwNAMhDVs0+gg1+DT6iAt6NPwxABJENANXYAEXQQAZNP80/jT9NPw0+zT6NPk0/jT8MgY0+EIHyLEisgE0+LIII7IQNP+yB7M0/yg0/4gLKyIhBkxWZjT/NP40/TT8NPs0+iM0+SMJMgY0+EkJQgcZSSEGDEACNUkhJgxAAR1IIRc0ARJENARJIhJMNAISEUQoZEk1A0lKSkpJVwAgNf8kWzX+JVs1/VcwIDX8IQRbNfshBVs1+ldgARc1+SEMWzX4IQ1bNfdJNQU19oAE7X69+zT2ULAxADT/EjEAiAqcVwABIlUjEhBEMQCICo5XCgEiVSMSQQBSgAgAAAAAAAAGKrApNQcxACgxAIgKbiIiTFZmNP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUQcIUDT4FlA09xZQKEsBVwBxZ0ghOjUBMgY1AkIJ4IAIAAAAAAAABoiwKTUHMQAoMQCIChwiIkxWZjT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5FlEHCFA0+BZQNPcWUChLAVcAcWdIITk1ATIGNQJCCY4hBhJEIRE0ARJENARJIhJMNAISEUQoZEk1A0lKSkpXACA1/yRbNf4lWzX9VzAgNfwhBFs1+yEFWzX6IQdbNfkhCFs1+Ek1BTX3gAQ36eMgNPdQsDEANP8SMQCICYNXAAEiVSMSEEQiIyIxAIgJclcBCUk19iNbNPYiVU009xcSTSMSQQBNgAkAAAAAAAAFvwGwKjUHMQAoMQCICUQhCa819klXAAE09lBMVwoBUGYxACgxAIgJKiMhBkxWZjT/NP40/TT8NPs0+jT5IzIGNPhCBLKACQAAAAAAAAbsALAoNQcxACgxAIgI9yEJrzX2SVcAATT2UExXCgFQZjT/NP40/TT8NPs0+jT5IjIGNPhCBmohDhJEIQk0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFNf6ABGYf7tY0/lCwMQA0/xIxAIgIl1cAASJVIxIQRIAIAAAAAAAABWqwKTUHMQAoMQCICHgqNP5QNf1JVwABNP1QTFcKAVBmNP80AyRbNAMlWzQDVzAgNAMhBFs0AyEFWzQDIQdbIjIGNAMhCFtCA1lJIRkMQAFHSSEeDEABBkkhHwxAAIQhHxJEITs0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8lWzX+IQVbNf1JNQU1/IAEyeiNDDT8ULA0/ogH+DEANP8SMQCIB99XAAEiVSMSEESACAAAAAAAAAUasCk1BzT/NAMkWzT+NANXMCA0AyEEWzT9NP40/TIGNAMhB1s0/ghCAjkhHhJEISA0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFNf6ABNTgGC00/lCwMQA0/xIxAIgHa1cAASJVIxMQRIAIAAAAAAAABNOwKTUHMQAoMQCIB0wjIkxWZjT/NAMkWzQDJVs0A1cwIDQDIQRbIjIGNAMhBVtCAUYhGRJEIRk0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDQDVwAgNAMkWzQDJVsxADQDITxbMgYiQgC8SSMMQABYSCM0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8kWzX+JVs1/SE8WzX8gASai5F0sDT/MQASRDT/NP4WUDT9FlA0/BZQKEsBVwA4Z0ghGTUBMgY1AkIGPkiBoI0GiAaXIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEOWzX+IRJbNf2ABPdxE000/xZQNP4WUDT9FlCwMQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCBeA1/zX+Nf01/DX7Nfo1+TT9Ig1BADCABdUQ8MwCsDT5NPoWUDT7FlA0/FA0/RZQNP8WUChLAVcAYGdIISA1ATIGNQJCBZuABdUQ8MwBsEIFdDX/Nf41/TX8Nfs1+jX5Nfg0/TT5DEEALDT4NPkWUDT6FlA0+1A0/BZQNP0WUDT/FlAoSwFXAGhnSCE1NQEyBjUCQgVMgAXVEPDMBbA0+DT5FlA0+hZQNPtQNPwWUDT9FlA0/xZQKEsBVwBoZ0ghOzUBMgY1AkIFGDX/Nf41/TX8Nfs1+jX5Nfg19zX2NP0iDUEANDT2NPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/RZQNP8WUChLAVcAeGdIIQo1ATIGNQJCBMmABdUQ8MwEsDT2NPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/xZQKEsBVwBwZ0ghCTUBMgY1AkIEkTX/Nf41/TX8Nfs1+jX5Nfg19zX2NP00+wxBADM09jT3FlA0+BZQNPlQNPoWUDT7FlA0/BZQNP0WUDT/FlAoSwFXAHhnSCQ1ATIGNQJCBEKABdUQ8MwAsDT2NPcWUDT4FlA0+VA0+hZQNPwWUDT9FlA0/xZQKEsBVwBwZ0ghETUBMgY1AkIECjX/Nf41/TX8Nfs1+jX5Nfg19zX2NPwiDUEANDT2NPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/RZQNP8WUChLAVcAeGdIITg1ATIGNQJCA7srsDT2NPc0+DT5NPo0+zT9CiI09zT+NP9CAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jT9Ig1BADc09jT3FlA0+BZQNPlQNPoWUDT7FlA0/BZRBwhQNP0WUDT/FlAoSwFXAHFnSCEXNQEyBjUCQgNOsSKyATT/sggjshA0+bIHszT2NPc0+DT5NPojCTT+NP9JCUL9STX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/TT4EjT8Ig0QQQA+NPU09hZQNPcWUDT4UDT5FlA0+hZQNPsWUDT8FlA0+FA0/xZQKEsBVwB/ZypLAVd/GWdIIRg1ATIGNQJCAsixIrIBNP+yCCOyEDT9sgezNPU09jT3NPg0+TT6IzT7Iwk0/jT/SQlC/v41/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NP00+BI0/CINEEEAPjT1NPYWUDT3FlA0+FA0+RZQNPoWUDT7FlA0/BZQNPhQNP8WUChLAVcAf2cqSwFXfxlnSCELNQEyBjUCQgI9sSKyATT/sggjshA0/bIHszT1NPY09zT4NPk0+iM0+yMJNP40/0kJQv5zNf81/jX9Nfw1+zX6Nfk1+DX3NfY0/CINQQA0NPY09xZQNPgWUDT5UDT6FlA0+xZQNPwWUDT9FlA0/xZQKEsBVwB4Z0ghEDUBMgY1AkIBxCuwNPY09zT4NPk0+jT7NP0KIjT3NP40/0IAADX/Nf41/TX8Nfs1+jX5Nfg19zX2NP0iDUEANzT2NPcWUDT4FlA0+VA0+hZQNPsWUDT8FlEHCFA0/RZQNP8WUChLAVcAcWdIIRY1ATIGNQJCAVexIrIBNP+yCCOyEDT5sgezNPY09zT4NPk0+iMJNP40/0kJQvtSNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT9NPgSNPwiDRBBAD409TT2FlA09xZQNPhQNPkWUDT6FlA0+xZQNPwWUDT4UDT/FlAoSwFXAH9nKksBV38ZZ0ghEzUBMgY1AkIA0bEisgE0/7III7IQNP2yB7M09TT2NPc0+DT5NPojNPsjCTT+NP9JCUL+/jX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/TT4EjT8Ig0QQQA+NPU09hZQNPcWUDT4UDT5FlA0+hZQNPsWUDT8FlA0+FA0/xZQKEsBVwB/ZypLAVd/GWdIIQ81ATIGNQJCAEaxIrIBNP+yCCOyEDT9sgezNPU09jT3NPg0+TT6IzT7Iwk0/jT/SQlC/nMxGSEgEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIRGviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 3,
  mapDataKeys: 1,
  mapDataSize: 11,
  stateKeys: 2,
  stateSize: 152,
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
                "name": "v1188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1189",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1190",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
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
            "internalType": "enum _enum_T10",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_CheckingWin",
            "type": "bool"
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
            "name": "_PayingWinners",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_PickingRoles",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Wagering",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
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
                "name": "v1188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1189",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1190",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
        "internalType": "struct T6",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1453",
                "type": "tuple"
              }
            ],
            "internalType": "struct T39",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T40",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1566",
                "type": "bool"
              }
            ],
            "internalType": "struct T46",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T47",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
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
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
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
                "name": "v1625",
                "type": "bool"
              }
            ],
            "internalType": "struct T52",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T53",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
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
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e17",
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
                "name": "v1719",
                "type": "bool"
              }
            ],
            "internalType": "struct T57",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T58",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e19",
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
        "internalType": "struct T6",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1501",
                "type": "tuple"
              }
            ],
            "internalType": "struct T59",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T60",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e20",
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
                "name": "v1866",
                "type": "bool"
              }
            ],
            "internalType": "struct T66",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T67",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e23",
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
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e24",
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
                "name": "v1925",
                "type": "bool"
              }
            ],
            "internalType": "struct T72",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T73",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e26",
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
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e27",
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
                "name": "v2019",
                "type": "bool"
              }
            ],
            "internalType": "struct T77",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T78",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e29",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1801",
                "type": "tuple"
              }
            ],
            "internalType": "struct T79",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T80",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e30",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1419",
                "type": "tuple"
              }
            ],
            "internalType": "struct T81",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T82",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e31",
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
                "name": "v1340",
                "type": "bool"
              }
            ],
            "internalType": "struct T83",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T84",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e32",
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
                "name": "v1266",
                "type": "bool"
              }
            ],
            "internalType": "struct T85",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T86",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e33",
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
                "name": "v1225",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
                "name": "v1295",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1376",
                "type": "tuple"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T31",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1235",
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
    "name": "_reach_oe_v1275",
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
    "name": "_reach_oe_v1306",
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
    "name": "_reach_oe_v1354",
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
    "name": "_reach_oe_v1386",
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
    "name": "_reach_oe_v1429",
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
    "name": "_reach_oe_v1471",
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
    "name": "_reach_oe_v1514",
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
    "name": "_reach_oe_v1528",
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
    "name": "_reach_oe_v1578",
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
    "name": "_reach_oe_v1636",
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
    "name": "_reach_oe_v1654",
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
    "name": "_reach_oe_v1672",
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
    "name": "_reach_oe_v1730",
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
    "name": "_reach_oe_v1748",
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
    "name": "_reach_oe_v1772",
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
    "name": "_reach_oe_v1814",
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
    "name": "_reach_oe_v1828",
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
    "name": "_reach_oe_v1878",
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
    "name": "_reach_oe_v1936",
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
    "name": "_reach_oe_v1954",
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
    "name": "_reach_oe_v1972",
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
    "name": "_reach_oe_v2030",
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
    "name": "_reach_oe_v2048",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Player_getRole",
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
    "name": "Player_receivePay",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Player_seeWinner",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "_Player_getRole31",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "_Player_getRole8",
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
    "name": "_Player_join33",
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
    "name": "_Player_receivePay13",
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
    "name": "_Player_receivePay16",
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
    "name": "_Player_receivePay19",
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
    "name": "_Player_receivePay23",
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
    "name": "_Player_receivePay26",
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
    "name": "_Player_receivePay29",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "_Player_seeWinner10",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "_Player_seeWinner20",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "_Player_seeWinner30",
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
    "name": "_Player_wager32",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
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
        "internalType": "struct T6",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1453",
                "type": "tuple"
              }
            ],
            "internalType": "struct T39",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T40",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1566",
                "type": "bool"
              }
            ],
            "internalType": "struct T46",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T47",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
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
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
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
                "name": "v1625",
                "type": "bool"
              }
            ],
            "internalType": "struct T52",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T53",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
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
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m17",
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
                "name": "v1719",
                "type": "bool"
              }
            ],
            "internalType": "struct T57",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T58",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m19",
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
        "internalType": "struct T6",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1501",
                "type": "tuple"
              }
            ],
            "internalType": "struct T59",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T60",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m20",
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
                "name": "v1866",
                "type": "bool"
              }
            ],
            "internalType": "struct T66",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T67",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m23",
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
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m24",
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
                "name": "v1925",
                "type": "bool"
              }
            ],
            "internalType": "struct T72",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T73",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m26",
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
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m27",
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
                "name": "v2019",
                "type": "bool"
              }
            ],
            "internalType": "struct T77",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T78",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m29",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1801",
                "type": "tuple"
              }
            ],
            "internalType": "struct T79",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T80",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m30",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1419",
                "type": "tuple"
              }
            ],
            "internalType": "struct T81",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T82",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m31",
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
                "name": "v1340",
                "type": "bool"
              }
            ],
            "internalType": "struct T83",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T84",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m32",
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
                "name": "v1266",
                "type": "bool"
              }
            ],
            "internalType": "struct T85",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T86",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m33",
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
                "name": "v1225",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
                "name": "v1295",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1376",
                "type": "tuple"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T31",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200771438038062007714833981016040819052620000269162000255565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a162000095341560076200014e565b620000ca604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a0909301905281516200014592600292019062000178565b50505062000329565b81620001745760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200018690620002ec565b90600052602060002090601f016020900481019282620001aa5760008555620001f5565b82601f10620001c557805160ff1916838001178555620001f5565b82800160010185558215620001f5579182015b82811115620001f5578251825591602001919060010190620001d8565b506200020392915062000207565b5090565b5b8082111562000203576000815560010162000208565b604051606081016001600160401b03811182821017156200024f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200026957600080fd5b604080519081016001600160401b03811182821017156200029a57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002b457600080fd5b620002be6200021e565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200030157607f821691505b602082108114156200032357634e487b7160e01b600052602260045260246000fd5b50919050565b6173db80620003396000396000f3fe6080604052600436106102745760003560e01c8063891e833b1161014e578063c8b91c9e116100bb578063edd136c611610077578063edd136c614610599578063f0b0bac1146105a1578063f3200965146105a9578063f6053350146105b1578063f780ed47146105c4578063fd83a4e8146105d757005b8063c8b91c9e14610518578063cadc2e7a1461052b578063d09ec8de14610558578063e07016ee1461056b578063e4a4e8801461057e578063ecacb5b51461059157005b8063a9b9855c1161010a578063a9b9855c146104ac578063ab53f2c6146104bf578063ac420936146104e2578063b26072a7146104ea578063b69e158a146104fd578063c855f5d01461051057005b8063891e833b146104505780638ebe74ee1461045857806398b99f6b1461046b5780639f25181014610473578063a035b2e014610486578063a98bf2231461049957005b80634565f536116101ec5780636da017a0116101a85780636da017a0146103da5780637eea518c146103ed578063817d57f3146104005780638323075714610420578063876496881461043557806387daa2191461043d57005b80634565f5361461037e57806351b5d6d214610386578063531291b71461039957806355887919146103ac57806358892c90146103bf5780635dde45b3146103c757005b80632c10a1591161023b5780632c10a159146102ed5780633750b462146103005780633b55bda3146103185780633bc5b7bf1461032b5780633c2493ab146103585780634364845c1461036b57005b80630b9184ce1461027d5780630ca328e4146102905780631e93b0f1146102a35780631f6a9c4d146102c7578063230f396e146102da57005b3661027b57005b005b61027b61028b366004616784565b6105df565b61027b61029e366004616784565b610603565b3480156102af57600080fd5b506003545b6040519081526020015b60405180910390f35b61027b6102d5366004616784565b610623565b61027b6102e8366004616784565b610643565b61027b6102fb366004616784565b610663565b610308610683565b60405190151581526020016102be565b61027b610326366004616784565b610762565b34801561033757600080fd5b5061034b6103463660046167b5565b610782565b6040516102be91906167f8565b61027b610366366004616784565b6107ae565b61030861037936600461682a565b6107ce565b6103086107fe565b61030861039436600461682a565b61082e565b6103086103a736600461682a565b61085e565b61027b6103ba366004616784565b61088f565b6103086108af565b61027b6103d5366004616784565b6108df565b61027b6103e8366004616784565b6108ff565b61027b6103fb366004616784565b61091f565b34801561040c57600080fd5b5061034b61041b3660046167b5565b61093f565b34801561042c57600080fd5b506001546102b4565b610308610965565b61030861044b36600461682a565b610995565b6103086109c6565b61027b610466366004616784565b6109f6565b610308610a16565b61027b610481366004616784565b610a45565b61027b610494366004616784565b610a65565b61027b6104a7366004616784565b610a85565b61027b6104ba366004616784565b610aa5565b3480156104cb57600080fd5b506104d4610ac5565b6040516102be929190616843565b610308610b62565b6103086104f836600461682a565b610d75565b61030861050b36600461682a565b610e70565b610308610eeb565b61030861052636600461682a565b610f9e565b34801561053757600080fd5b5061054b6105463660046167b5565b610fcf565b6040516102be91906168a0565b61027b610566366004616784565b610ff5565b61027b610579366004616784565b611015565b61027b61058c366004616784565b611035565b610308611055565b610308611085565b6103086110b5565b6103086110e5565b61027b6105bf366004616784565b611114565b61027b6105d2366004616784565b611134565b610308611154565b6105e761622a565b6105ff6105f9368490038401846169f6565b82611183565b5050565b61060b61622a565b6105ff61061d368490038401846169f6565b82611503565b61062b61622a565b6105ff61063d368490038401846169f6565b82611741565b61064b61622a565b6105ff61065d36849003840184616a77565b82611974565b61066b61622a565b6105ff61067d36849003840184616a93565b82611baa565b600080546006148061069757506000546020145b6106a057600080fd5b6000546006141561071457306001600160a01b031663edd136c66040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070f9190616b02565b905090565b6000546020141561075f57306001600160a01b031663f0b0bac16040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b90565b61076a61622a565b6105ff61077c36849003840184616a77565b82611d93565b60408051606081018252600080825260208201819052918101919091526107a882612130565b92915050565b6107b661622a565b6105ff6107c836849003840184616a77565b82612208565b60006107d86162ce565b6020810151518390526107e961622a565b6107f38282611503565b602001519392505050565b6000610808616300565b60208101516000905261081961622a565b6108238282612208565b610160015192915050565b60006108386162ce565b60208101515183905261084961622a565b6108538282611741565b604001519392505050565b60006108686162ce565b60208101515183905261087961622a565b61088382826125a5565b6101c001519392505050565b61089761622a565b6105ff6108a9368490038401846169f6565b826125a5565b60006108b9616300565b6020810151600090526108ca61622a565b6108d48282611d93565b610100015192915050565b6108e761622a565b6105ff6108f936849003840184616a77565b8261292e565b61090761622a565b6105ff61091936849003840184616a77565b82612c5c565b61092761622a565b6105ff61093936849003840184616a93565b82612e79565b60408051606081018252600080825260208201819052918101919091526107a882612feb565b600061096f616300565b60208101516000905261098061622a565b61098a828261292e565b610140015192915050565b600061099f6162ce565b6020810151518390526109b061622a565b6109ba8282611183565b6101e001519392505050565b60006109d0616300565b6020810151600090526109e161622a565b6109eb8282613078565b610120015192915050565b6109fe61622a565b6105ff610a1036849003840184616a93565b82613415565b6000610a20616300565b602081015160009052610a3161622a565b610a3b828261370a565b60e0015192915050565b610a4d61622a565b6105ff610a5f36849003840184616a93565b82613a38565b610a6d61622a565b6105ff610a7f36849003840184616a93565b82613d27565b610a8d61622a565b6105ff610a9f36849003840184616a77565b82613f1f565b610aad61622a565b6105ff610abf36849003840184616a77565b8261370a565b600060606000546002808054610ada90616b1f565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0690616b1f565b8015610b535780601f10610b2857610100808354040283529160200191610b53565b820191906000526020600020905b815481529060010190602001808311610b3657829003601f168201915b50505050509050915091509091565b60008054600d1480610b7657506000546010145b80610b8357506000546013145b80610b9057506000546017145b80610b9d5750600054601a145b80610baa5750600054601d145b610bb357600080fd5b600054600d1415610bfe57306001600160a01b03166398b99f6b6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b60005460101415610c4957306001600160a01b03166358892c906040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b60005460131415610c9457306001600160a01b031663891e833b6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b60005460171415610cdf57306001600160a01b031663876496886040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b600054601a1415610d2a57306001600160a01b0316634565f5366040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b600054601d141561075f57306001600160a01b031663ecacb5b56040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b60008054600a1480610d8957506000546014145b80610d965750600054601e145b610d9f57600080fd5b600054600a1415610e0d5760405163531291b760e01b815260048101839052309063531291b7906024015b6020604051808303816000875af1158015610de9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a89190616b02565b60005460141415610e3c576040516387daa21960e01b81526004810183905230906387daa21990602401610dca565b600054601e1415610e6b5760405163645c8e4f60e11b815260048101839052309063c8b91c9e90602401610dca565b919050565b6000805460081480610e845750600054601f145b610e8d57600080fd5b60005460081415610ebc576040516310d9211760e21b8152600481018390523090634364845c90602401610dca565b600054601f1415610e6b576040516328daeb6960e11b81526004810183905230906351b5d6d290602401610dca565b6000805460041480610eff57506000546021145b610f0857600080fd5b60005460041415610f5357306001600160a01b031663f32009656040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b6000546021141561075f57306001600160a01b031663fd83a4e86040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b6000610fa86162ce565b602081015151839052610fb961622a565b610fc3828261414a565b61020001519392505050565b60408051606081018252600080825260208201819052918101919091526107a8826144bf565b610ffd61622a565b6105ff61100f36849003840184616a77565b82614582565b61101d61622a565b6105ff61102f36849003840184616a77565b8261491f565b61103d61622a565b6105ff61104f368490038401846169f6565b8261414a565b600061105f616300565b60208101516000905261107061622a565b61107a8282614582565b610180015192915050565b600061108f616300565b6020810151600090526110a061622a565b6110aa8282612c5c565b610240015192915050565b60006110bf616300565b6020810151600090526110d061622a565b6110da8282611974565b610260015192915050565b60006110ef616300565b60208101516000905261110061622a565b61110a8282613f1f565b6080015192915050565b61111c61622a565b6105ff61112e36849003840184616a93565b82614b3f565b61113c61622a565b6105ff61114e36849003840184616a77565b82613078565b600061115e616300565b60208101516000905261116f61622a565b611179828261491f565b60a0015192915050565b6111936015600054146034614d37565b81516111ae9015806111a757508251600154145b6035614d37565b6000808055600280546111c090616b1f565b80601f01602080910402602001604051908101604052809291908181526020018280546111ec90616b1f565b80156112395780601f1061120e57610100808354040283529160200191611239565b820191906000526020600020905b81548152906001019060200180831161121c57829003601f168201915b50505050508060200190518101906112519190616be6565b90507fdcf26d41875d589aabd0f8284691cd0af439a4906f715a9a317c07aa814cb6fb3384604051611284929190616c03565b60405180910390a161129834156033614d37565b60208301515151600190816112ac336144bf565b5160018111156112be576112be6167d2565b146112ca5760006112d8565b6112d3336144bf565b604001515b146112e45760006112e7565b60015b141561140d57604051600181527f0a61b072160f17fa78768e6f644361e769269baa0c8ad48f8ccdf0a6dfb32b3a9060200160405180910390a160016101a08301819052336000908152600560209081526040808320805461ffff19168155840183905560069091529020805462ff00ff1916909117905561136761632a565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08201516113c5906001614d5d565b60208201515260e08201516113db906001614dac565b602080830180519091019190915280514360409091015261010083015190516060015261140781614df9565b50505050565b604051600081527fdd08d1866c7cccb5f106a449cbf051667410ab18a1bb8482ce151580f3d747e59060200160405180910390a160006101a08301819052338152600560205260408120805461ffff191681556001015561146c61632a565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08201516114ca906001614d5d565b602080830180519290925260e084015182519091015280514360409091015261010083015190516060015261140781614df9565b505050565b6115136009600054146019614d37565b815161152e90158061152757508251600154145b601a614d37565b60008080556002805461154090616b1f565b80601f016020809104026020016040519081016040528092919081815260200182805461156c90616b1f565b80156115b95780601f1061158e576101008083540402835291602001916115b9565b820191906000526020600020905b81548152906001019060200180831161159c57829003601f168201915b50505050508060200190518101906115d19190616cdd565b90507f0d0c50c34bf538d7a3a69bc85bb10bcfe23f8f46c119741a7807a8319a6ae2483384604051611604929190616c03565b60405180910390a161161834156017614d37565b805161165a906001600160a01b03163314611634576000611653565b600161163f33612130565b516001811115611651576116516167d2565b145b6018614d37565b604051600081527f9ba7f6380427bbb863c55398ee115ad098fdc732d8d7b6e6e6e59f43563d77a89060200160405180910390a16000808352338152600560209081526040909120805460ff1916600190811782559185015151519101556116c0616395565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925260808085015184519091015260a08085015184519091015260c08085015184519091015280830180516000905280514392019190915260e084015190519091015261140781614ffa565b611751602060005414604f614d37565b815161176c90158061176557508251600154145b6050614d37565b60008080556002805461177e90616b1f565b80601f01602080910402602001604051908101604052809291908181526020018280546117aa90616b1f565b80156117f75780601f106117cc576101008083540402835291602001916117f7565b820191906000526020600020905b8154815290600101906020018083116117da57829003601f168201915b505050505080602001905181019061180f9190616be6565b90507f116e00b68618d6bd158da087caeeece48a5b0b1ea3e15a88ffd71f966f8f9e3e3384604051611842929190616c03565b60405180910390a16118563415604d614d37565b61187e600161186433612130565b516001811115611876576118766167d2565b14604e614d37565b604051600081527fbc40d7fb273924ac9d18414b540bf8b05eb65fdfbd01425485288414754d5a409060200160405180910390a16000808352338152600560209081526040909120805460ff1916600190811782559185015151519101556118e4616395565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e082015161194e906001614dac565b602080830180519290925281514391015261010083015190516040015261140781614ffa565b6119846021600054146053614d37565b815161199f90158061199857508251600154145b6054614d37565b6000808055600280546119b190616b1f565b80601f01602080910402602001604051908101604052809291908181526020018280546119dd90616b1f565b8015611a2a5780601f106119ff57610100808354040283529160200191611a2a565b820191906000526020600020905b815481529060010190602001808311611a0d57829003601f168201915b5050505050806020019051810190611a429190616be6565b90507f2ab3768601c2011922bc14e77a3294be1b91cae31d82de5271d70e979c7499ad3384604051611a75929190616cfa565b60405180910390a1611aa56001611a8b33612130565b516001811115611a9d57611a9d6167d2565b146051614d37565b611ab6816040015134146052614d37565b604051600081527f8c3f55784306e3d9a23bd771a8532086625c490325a8889bb1974ebe26ef77b39060200160405180910390a16000610220830152611afa61641b565b815181516001600160a01b039182169052602080840151835190910152604080840180518451909201919091526060808501518451931692019190915260808084015183519091015260a08084015183519091015260c08301519051611b609190614dac565b60208201515260e0820151611b76906001614d5d565b6020828101805190910191909152514360409182015261010083015190830151015b6020820151606001526114078161520d565b611bba600160005414600a614d37565b8151611bd5901580611bce57508251600154145b600b614d37565b600080805560028054611be790616b1f565b80601f0160208091040260200160405190810160405280929190818152602001828054611c1390616b1f565b8015611c605780601f10611c3557610100808354040283529160200191611c60565b820191906000526020600020905b815481529060010190602001808311611c4357829003601f168201915b5050505050806020019051810190611c789190616d24565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051611cab929190616da1565b60405180910390a1611cbf34156008614d37565b8051611cd7906001600160a01b031633146009614d37565b611d0b604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b031680825260208084015181840190815260408086015181860190815260608088015181880190815260026000554360015583519586019690965292519184019190915251908201529051608082015260a0015b60405160208183030381529060405260029080519060200190611d8c92919061645a565b5050505050565b611da36011600054146029614d37565b8151611dbe901580611db757508251600154145b602a614d37565b600080805560028054611dd090616b1f565b80601f0160208091040260200160405190810160405280929190818152602001828054611dfc90616b1f565b8015611e495780601f10611e1e57610100808354040283529160200191611e49565b820191906000526020600020905b815481529060010190602001808311611e2c57829003601f168201915b5050505050806020019051810190611e619190616e63565b90507f0ee57ec4ccee7f41c279d8e964cfed8c10ea2cf1f82984995d6aa5922d4a28683384604051611e94929190616cfa565b60405180910390a1611ea834156027614d37565b611ed06001611eb633612130565b516001811115611ec857611ec86167d2565b146028614d37565b6001611edb33612feb565b516001811115611eed57611eed6167d2565b141561202c57604051600081527f67401f23d0c02ba65a30b974a3f28a5d61fb024f16e7453e9479114b4b3f7cdc9060200160405180910390a1600060c0830181905233808252600660209081526040808420805462ffffff19908116909155600490925280842080549092169091556101208401519051919281156108fc029290818181858888f19350505050158015611f8c573d6000803e3d6000fd5b50611f956164de565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e0820151611fff906001614d5d565b60208281018051929092528151339101525143604090910152600060208201516060015261140781615414565b604051600081527f2fbfe01e7b67edf7597bb09c11c6681a693fc2402f44aaf5556280d8048b6ded9060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff191690556120876164de565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e08201516120f1906001614d5d565b602080830180519290925261010084015182516001600160a01b0390911691015280514360409091015261012083015190516060015261140781615414565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561217c5761217c6167d2565b14156121f9576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156121bd576121bd6167d2565b60018111156121ce576121ce6167d2565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b612218601b600054146040614d37565b815161223390158061222c57508251600154145b6041614d37565b60008080556002805461224590616b1f565b80601f016020809104026020016040519081016040528092919081815260200182805461227190616b1f565b80156122be5780601f10612293576101008083540402835291602001916122be565b820191906000526020600020905b8154815290600101906020018083116122a157829003601f168201915b50505050508060200190518101906122d69190616e63565b90507fadd4c7f3d57d8b248e35dfaeed2d54392e536e02c2c4de5ab6fb5ef4e5e63ad03384604051612309929190616cfa565b60405180910390a161231d3415603e614d37565b612345600161232b33612130565b51600181111561233d5761233d6167d2565b14603f614d37565b600161235033612feb565b516001811115612362576123626167d2565b14156124a157604051600081527f05cb7705122c27ca8c96d9880392876a9e7d85949afe84114bed8e6729245d6d9060200160405180910390a1600060c0830181905233808252600660209081526040808420805462ffffff19908116909155600490925280842080549092169091556101208401519051919281156108fc029290818181858888f19350505050158015612401573d6000803e3d6000fd5b5061240a6164de565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e0820151612474906001614d5d565b60208281018051929092528151339101525143604090910152600060208201516060015261140781615673565b604051600081527fdd26c114887d496334eef3624700df275c8ac3cd0a49875a70dc420e183d05049060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff191690556124fc6164de565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e0820151612566906001614d5d565b602080830180519290925261010084015182516001600160a01b0390911691015280514360409091015261012083015190516060015261140781615673565b6125b5600b60005414601d614d37565b81516125d09015806125c957508251600154145b601e614d37565b6000808055600280546125e290616b1f565b80601f016020809104026020016040519081016040528092919081815260200182805461260e90616b1f565b801561265b5780601f106126305761010080835404028352916020019161265b565b820191906000526020600020905b81548152906001019060200180831161263e57829003601f168201915b50505050508060200190518101906126739190616cdd565b90507f8ef10ecf82600a0e607d2b4732e42a9011d02a836d5c8900039202caf70fa8f233846040516126a6929190616c03565b60405180910390a16126ba3415601b614d37565b80516126fc906001600160a01b031633146126d65760006126f5565b60016126e133612130565b5160018111156126f3576126f36167d2565b145b601c614d37565b6020830151515160019081612710336144bf565b516001811115612722576127226167d2565b1461272e57600061273c565b612737336144bf565b604001515b1461274857600061274b565b60015b141561284d57604051600181527face832e68c7775900da8eedd5bd1c7934a816009598647f32ba401fa07ddca279060200160405180910390a160016101a08301819052336000908152600560209081526040808320805461ffff19168155840183905560069091529020805462ff00ff191690911790556127cb61632a565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855194169381019390935260808086015185519091015260a08086015185519091015260c08501518285018051919091528051600193019290925281514391015260e084015190519091015261140781614df9565b604051600081527fb0b86b8922ecf9bbc9a14377fc09a64d65bd1c14c496cf8d62aad77aab0cc4729060200160405180910390a160006101a08301819052338152600560205260408120805461ffff19168155600101556128ac61632a565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855194169381019390935260808086015185519091015260a08086015185519091015260c08501518285018051919091528051600093019290925281514391015260e0840151905190910152611407816158ab565b61293e6018600054146038614d37565b815161295990158061295257508251600154145b6039614d37565b60008080556002805461296b90616b1f565b80601f016020809104026020016040519081016040528092919081815260200182805461299790616b1f565b80156129e45780601f106129b9576101008083540402835291602001916129e4565b820191906000526020600020905b8154815290600101906020018083116129c757829003601f168201915b50505050508060200190518101906129fc9190616f0e565b90507f680249228d8618a45b50a0ae255e010443406da860026841fad3e6b41439b6183384604051612a2f929190616cfa565b60405180910390a1612a4334156036614d37565b8051612a85906001600160a01b03163314612a5f576000612a7e565b6001612a6a33612130565b516001811115612a7c57612a7c6167d2565b145b6037614d37565b6001612a9033612feb565b516001811115612aa257612aa26167d2565b1415612b8257604051600081527f7ea145b609ec0c258dfd4aa02121e0f3bd2641c340ad958f3545813a4991f5419060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff19169055612b0361652a565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a0808501519084015260c08085015115159084015260e0808501519084015261010080850151908401526019600055436001559051611d6891839101616f2b565b604051600081527f700dab99efc2bfdc457f230d89c677693c882ca8a5db08102961f6b24b3ee4ce9060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff19169055612bdd61652a565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a0808501519084015260c08085015115159084015260e080850151908401526101008085015190840152601c600055436001559051611d6891839101616f2b565b612c6c6007600054146015614d37565b8151612c87901580612c8057508251600154145b6016614d37565b600080805560028054612c9990616b1f565b80601f0160208091040260200160405190810160405280929190818152602001828054612cc590616b1f565b8015612d125780601f10612ce757610100808354040283529160200191612d12565b820191906000526020600020905b815481529060010190602001808311612cf557829003601f168201915b5050505050806020019051810190612d2a9190616f9a565b90507f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe3384604051612d5d929190616cfa565b60405180910390a1612d76816040015134146013614d37565b8051612db8906001600160a01b03163314612d92576000612db1565b6001612d9d33612130565b516001811115612daf57612daf6167d2565b145b6014614d37565b604051600081527f08b0bdf16eec4a5e57b130dbae23904f939408d978df55e6656d936aa94484349060200160405180910390a16000610220830152612dfc61641b565b815181516001600160a01b03918216905260208084015183518201526040808501805185518301526060808701518651951694019390935260808086015185519091015260a080860180518651909201919091528351838601805191909152905181519093019290925290514391015260c0830151905101611b98565b612e89600260005414600d614d37565b8151612ea4901580612e9d57508251600154145b600e614d37565b600080805560028054612eb690616b1f565b80601f0160208091040260200160405190810160405280929190818152602001828054612ee290616b1f565b8015612f2f5780601f10612f0457610100808354040283529160200191612f2f565b820191906000526020600020905b815481529060010190602001808311612f1257829003601f168201915b5050505050806020019051810190612f479190616d24565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503384604051612f7a929190616da1565b60405180910390a1612f8e3415600c614d37565b612f9661658a565b815181516001600160a01b039091169052602080830151825182015260408084015183518201528251336060918201528401518284018051919091528051439301929092529051600091015261140781615a88565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115613037576130376167d2565b14156121f9576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156121bd576121bd6167d2565b6130886014600054146031614d37565b81516130a390158061309c57508251600154145b6032614d37565b6000808055600280546130b590616b1f565b80601f01602080910402602001604051908101604052809291908181526020018280546130e190616b1f565b801561312e5780601f106131035761010080835404028352916020019161312e565b820191906000526020600020905b81548152906001019060200180831161311157829003601f168201915b50505050508060200190518101906131469190616e63565b90507fc481898b6397924b9ae6276db21d0cd8f5b982e79a481d958d8e360148cf6a7e3384604051613179929190616cfa565b60405180910390a161318d3415602f614d37565b6131b5600161319b33612130565b5160018111156131ad576131ad6167d2565b146030614d37565b60016131c033612feb565b5160018111156131d2576131d26167d2565b141561331157604051600081527fa7e1a5b3c13dda7c0db5483e8aa81d88c969f236d087525df7839b774a8924a99060200160405180910390a1600060c0830181905233808252600660209081526040808420805462ffffff19908116909155600490925280842080549092169091556101208401519051919281156108fc029290818181858888f19350505050158015613271573d6000803e3d6000fd5b5061327a6164de565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e08201516132e4906001614d5d565b60208281018051929092528151339101525143604090910152600060208201516060015261140781615c0a565b604051600081527f5b9c2256bf87017eedbe543df4072f1e75ed21f95819bcaee2b9d0fef861699b9060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff1916905561336c6164de565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e08201516133d6906001614d5d565b602080830180519290925261010084015182516001600160a01b0390911691015280514360409091015261012083015190516060015261140781615c0a565b613425601c600054146044614d37565b815161344090158061343957508251600154145b6045614d37565b60008080556002805461345290616b1f565b80601f016020809104026020016040519081016040528092919081815260200182805461347e90616b1f565b80156134cb5780601f106134a0576101008083540402835291602001916134cb565b820191906000526020600020905b8154815290600101906020018083116134ae57829003601f168201915b50505050508060200190518101906134e39190616f0e565b90506134fb6040518060200160405280600081525090565b7ffa2742024f1977b0cd88e2d1726ea822f20bb74e6ab0a49a9257e9f2c72aed7d338560405161352c929190616da1565b60405180910390a161010082015160a083015101815260a08201516135549034146042614d37565b606082015161356f906001600160a01b031633146043614d37565b8160c0015115613613576135816164de565b825181516001600160a01b0391821690526020808501805184518301526040808701518551820152606080880180518751908716908301526080808a015188519091015260a0808a015188519091015260e0890151875160c001529251848701805191909152925183519516949093019390935280514393019290925283519151015261360d81615d4f565b50611407565b815181516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561364d573d6000803e3d6000fd5b5081516001600160a01b03166000908152600660205260409020805462ffffff191690556136796165ba565b825181516001600160a01b03918216905260208085015183518201526040808601518451909101526060808601518451931692019190915260808085015183519091015260a08085015183519091015281015160019081905260e08401516136e091614d5d565b602082810180519091019190915251436040909101526000602082015160600152611d8c81615e94565b61371a600e600054146021614d37565b815161373590158061372e57508251600154145b6022614d37565b60008080556002805461374790616b1f565b80601f016020809104026020016040519081016040528092919081815260200182805461377390616b1f565b80156137c05780601f10613795576101008083540402835291602001916137c0565b820191906000526020600020905b8154815290600101906020018083116137a357829003601f168201915b50505050508060200190518101906137d89190616f0e565b90507fc299decf3d819192b45fbfa5962d20828e9997091c154d6e4234231c271ca3a3338460405161380b929190616cfa565b60405180910390a161381f3415601f614d37565b8051613861906001600160a01b0316331461383b57600061385a565b600161384633612130565b516001811115613858576138586167d2565b145b6020614d37565b600161386c33612feb565b51600181111561387e5761387e6167d2565b141561395e57604051600081527fb188ee517e49399024ed70b44f37b3d169c2280756b8ddcc606a98082b1ecc2d9060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff191690556138df61652a565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a0808501519084015260c08085015115159084015260e080850151908401526101008085015190840152600f600055436001559051611d6891839101616f2b565b604051600081527f2305335f26d36f1d84e5720282fc25f9af7fdf9d9c8cd02131ad1e9ee44f8d109060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff191690556139b961652a565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a0808501519084015260c08085015115159084015260e0808501519084015261010080850151908401526012600055436001559051611d6891839101616f2b565b613a48601260005414602d614d37565b8151613a63901580613a5c57508251600154145b602e614d37565b600080805560028054613a7590616b1f565b80601f0160208091040260200160405190810160405280929190818152602001828054613aa190616b1f565b8015613aee5780601f10613ac357610100808354040283529160200191613aee565b820191906000526020600020905b815481529060010190602001808311613ad157829003601f168201915b5050505050806020019051810190613b069190616f0e565b9050613b1e6040518060200160405280600081525090565b7f64113158b98ebf731808bbb342c34e04d362d554ea35de57d908ad65e9eed2353385604051613b4f929190616da1565b60405180910390a161010082015160a083015101815260a0820151613b77903414602b614d37565b6060820151613b92906001600160a01b03163314602c614d37565b8160c0015115613c3057613ba46164de565b825181516001600160a01b0391821690526020808501805184518301526040808701518551820152606080880180518751908716908301526080808a015188519091015260a0808a015188519091015260e0890151875160c001529251848701805191909152925183519516949093019390935280514393019290925283519151015261360d81615c0a565b815181516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613c6a573d6000803e3d6000fd5b5081516001600160a01b03166000908152600660205260409020805462ffffff19169055613c966165ba565b825181516001600160a01b03918216905260208085015183518201526040808601518451909101526060808601518451931692019190915260808085015183519091015260a08085015183519091015281015160019081905260e0840151613cfd91614d5d565b602082810180519091019190915251436040909101526000602082015160600152611d8c81615ffc565b613d37600f600054146025614d37565b8151613d52901580613d4b57508251600154145b6026614d37565b600080805560028054613d6490616b1f565b80601f0160208091040260200160405190810160405280929190818152602001828054613d9090616b1f565b8015613ddd5780601f10613db257610100808354040283529160200191613ddd565b820191906000526020600020905b815481529060010190602001808311613dc057829003601f168201915b5050505050806020019051810190613df59190616f0e565b9050613e0d6040518060200160405280600081525090565b7fbceae83a94d4d1f9424beafb2b187ba867236f6cf452b6b01322429f647490043385604051613e3e929190616da1565b60405180910390a161010082015160a083015101815260a0820151613e669034146023614d37565b6060820151613e81906001600160a01b031633146024614d37565b8160c0015115613c3057613e936164de565b825181516001600160a01b0391821690526020808501805184518301526040808701518551820152606080880180518751908716908301526080808a015188519091015260a0808a015188519091015260e0890151875160c001529251848701805191909152925183519516949093019390935280514393019290925283519151015261360d81615414565b613f2f6005600054146011614d37565b8151613f4a901580613f4357508251600154145b6012614d37565b600080805560028054613f5c90616b1f565b80601f0160208091040260200160405190810160405280929190818152602001828054613f8890616b1f565b8015613fd55780601f10613faa57610100808354040283529160200191613fd5565b820191906000526020600020905b815481529060010190602001808311613fb857829003601f168201915b5050505050806020019051810190613fed9190617040565b90507f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943384604051614020929190616cfa565b60405180910390a16140343415600f614d37565b8051614083906001600160a01b0316331461405057600061407c565b600161405b33612130565b51600181111561406d5761406d6167d2565b1461407957600161407c565b60005b6010614d37565b604051600081527f8ef6d9030e76fb511b23f254a3fab7bf79f377bb5d6cfb1e5fe1f639c9ff94379060200160405180910390a1600060608301819052338152600460205260409020805462ff00ff191660011790556140e1616626565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925260808085015184519091015280830180516000905280514392019190915260a084015190519091015261140781616099565b61415a601f60005414604b614d37565b815161417590158061416e57508251600154145b604c614d37565b60008080556002805461418790616b1f565b80601f01602080910402602001604051908101604052809291908181526020018280546141b390616b1f565b80156142005780601f106141d557610100808354040283529160200191614200565b820191906000526020600020905b8154815290600101906020018083116141e357829003601f168201915b50505050508060200190518101906142189190616be6565b90507f5c8035541e3eb92c09bc1ada379548674f80095669b9e303e40e255cf856ffc2338460405161424b929190616c03565b60405180910390a161425f3415604a614d37565b6020830151515160019081614273336144bf565b516001811115614285576142856167d2565b1461429157600061429f565b61429a336144bf565b604001515b146142ab5760006142ae565b60015b14156143ce57604051600181527f03a08e883d1d3209f7aef71e4cc9e6af717f728b79e1b262fa079a2083c39c699060200160405180910390a160016101a08301819052336000908152600560209081526040808320805461ffff19168155840183905560069091529020805462ff00ff1916909117905561432e61632a565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c082015161438c906001614d5d565b60208201515260e08201516143a2906001614dac565b6020808301805190910191909152805143604090910152610100830151905160600152611407816158ab565b604051600081527f0b09433980944e575a6dab7566c8bfde6a7d0075efe2ee572428f0b0940c357b9060200160405180910390a160006101a08301819052338152600560205260408120805461ffff191681556001015561442d61632a565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c082015161448b906001614d5d565b602080830180519290925260e0840151825190910152805143604090910152610100830151905160600152611407816158ab565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561450b5761450b6167d2565b14156121f9576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561454c5761454c6167d2565b600181111561455d5761455d6167d2565b81528154610100900460ff161515602082015260019091015460409091015292915050565b614592601e600054146048614d37565b81516145ad9015806145a657508251600154145b6049614d37565b6000808055600280546145bf90616b1f565b80601f01602080910402602001604051908101604052809291908181526020018280546145eb90616b1f565b80156146385780601f1061460d57610100808354040283529160200191614638565b820191906000526020600020905b81548152906001019060200180831161461b57829003601f168201915b50505050508060200190518101906146509190616e63565b90507f77b3d5475f0eb469e120f27f05b37e58961501ecbd05cd52e95078115592da823384604051614683929190616cfa565b60405180910390a161469734156046614d37565b6146bf60016146a533612130565b5160018111156146b7576146b76167d2565b146047614d37565b60016146ca33612feb565b5160018111156146dc576146dc6167d2565b141561481b57604051600081527f2f0262f54d4f8123262521c5ef663d6abec5513fc6aec6c7f3235ddb7c1e19469060200160405180910390a1600060c0830181905233808252600660209081526040808420805462ffffff19908116909155600490925280842080549092169091556101208401519051919281156108fc029290818181858888f1935050505015801561477b573d6000803e3d6000fd5b506147846164de565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e08201516147ee906001614d5d565b60208281018051929092528151339101525143604090910152600060208201516060015261140781615d4f565b604051600081527f17ba506155d223665950ee90d7653388a393de0bfc491078628bc588f501e75d9060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff191690556148766164de565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e08201516148e0906001614d5d565b602080830180519290925261010084015182516001600160a01b0390911691015280514360409091015261012083015190516060015261140781615d4f565b61492f6022600054146057614d37565b815161494a90158061494357508251600154145b6058614d37565b60008080556002805461495c90616b1f565b80601f016020809104026020016040519081016040528092919081815260200182805461498890616b1f565b80156149d55780601f106149aa576101008083540402835291602001916149d5565b820191906000526020600020905b8154815290600101906020018083116149b857829003601f168201915b50505050508060200190518101906149ed9190616f9a565b90507f5b2fd06f7ff40893bb60fe663e74f44b402062c661e4681e9c1523019d37a44f3384604051614a20929190616cfa565b60405180910390a1614a3434156055614d37565b614a6a6001614a4233612130565b516001811115614a5457614a546167d2565b14614a60576001614a63565b60005b6056614d37565b604051600081527f2b544fb01b5c82d9429464e59cda4607d4ed8520c6f2a7cadf1d32f4745eb3819060200160405180910390a1600060608301819052338152600460205260409020805462ff00ff19166001179055614ac8616626565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a0820151614b1a906001614dac565b602080830180519290925281514391015260c083015190516040015261140781616099565b614b4f601960005414603c614d37565b8151614b6a901580614b6357508251600154145b603d614d37565b600080805560028054614b7c90616b1f565b80601f0160208091040260200160405190810160405280929190818152602001828054614ba890616b1f565b8015614bf55780601f10614bca57610100808354040283529160200191614bf5565b820191906000526020600020905b815481529060010190602001808311614bd857829003601f168201915b5050505050806020019051810190614c0d9190616f0e565b9050614c256040518060200160405280600081525090565b7fc16265324396b4615004177193a57a0697de14cc64da1feff4f20c97b4ac24b83385604051614c56929190616da1565b60405180910390a161010082015160a083015101815260a0820151614c7e903414603a614d37565b6060820151614c99906001600160a01b03163314603b614d37565b8160c001511561361357614cab6164de565b825181516001600160a01b0391821690526020808501805184518301526040808701518551820152606080880180518751908716908301526080808a015188519091015260a0808a015188519091015260e0890151875160c001529251848701805191909152925183519516949093019390935280514393019290925283519151015261360d81615673565b816105ff5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082614d6a83826170ef565b91508111156107a85760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401614d54565b600082614db98382617106565b91508110156107a85760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401614d54565b614e0161665d565b60208201515115614f1757614e6d60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a0908101519085015281860180515160c0860152805183015160e086015251909201516101008401526015600055436001559051614ef39183910161711e565b6040516020818303038152906040526002908051906020019061140792919061645a565b80516003905280516000608090910152805160405160008051602061738683398151915291614f459161718b565b60405180910390a1614f556165ba565b82515181516001600160a01b0391821690528351602090810151835182015284516040908101518451909101528451606090810151845193169201919091528351608090810151835190910152835160a001518185015190910151614fba91906161dc565b815160a00152602080820180516000905284518201518151830152908401805160409081015183519091015251606090810151915101526114fe81615ffc565b61500261665d565b815160a0015160208301515110156150ff5761507560405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252845160809081015190840152845160a09081015190840152845160c0908101519084015280850180515160e0850152518201516101008401526000819055436001559051614ef39183910161711e565b805160009081905281516020015280516040516000805160206173868339815191529161512b9161718b565b60405180910390a161518d60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252845160809081015190840152845160c09081015160a0850152818601805151918501919091525182015160e0840152600b600055436001559051614ef39183910161720c565b61521561665d565b6020808301510151156153095761528360405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a0908101519085015281860180515160c0860152805183015160e086015251909201516101008401526021600055436001559051614ef39183910161711e565b8051600490528051600060a0909101528051604051600080516020617386833981519152916153379161718b565b60405180910390a161539960405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a0908101519085015281860180515160c0860152519092015160e08401526009600055436001559051614ef39183910161720c565b8060000151606001516001600160a01b03168160200151602001516001600160a01b03161461544457600061544d565b60208101515115155b1561557d576154c360405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151841681860152855160809081015190860152855160a09081015190860152855160c0908101519086015282860180515160e087015286518201519094166101008601529251909201516101208401526011600055436001559051615559918391016172fd565b604051602081830303815290604052600290805190602001906114fe92919061645a565b8060200151602001516001600160a01b03166108fc8260200151606001519081150290604051600060405180830381858888f193505050501580156155c6573d6000803e3d6000fd5b506155cf6165ba565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451909101528351606090810151845193169201919091528251608090810151835190910152825160a090810151835190910152810151600190819052825160c0015161564291614d5d565b602082810180518201929092528301516040908101519151015260006020820151606001526105ff81615ffc565b50565b8060000151606001516001600160a01b03168160200151602001516001600160a01b0316146156a35760006156ac565b60208101515115155b156157b85761572260405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151841681860152855160809081015190860152855160a09081015190860152855160c0908101519086015282860180515160e08701528651820151909416610100860152925190920151610120840152601b600055436001559051615559918391016172fd565b8060200151602001516001600160a01b03166108fc8260200151606001519081150290604051600060405180830381858888f19350505050158015615801573d6000803e3d6000fd5b5061580a6165ba565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451909101528351606090810151845193169201919091528251608090810151835190910152825160a090810151835190910152810151600190819052825160c0015161587d91614d5d565b602082810180518201929092528301516040908101519151015260006020820151606001526105ff81615e94565b6158b361665d565b602082015151156159a55761591f60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a0908101519085015281860180515160c0860152805183015160e08601525190920151610100840152601f600055436001559051614ef39183910161711e565b805160039052805160006080909101528051604051600080516020617386833981519152916159d39161718b565b60405180910390a16159e36165ba565b82515181516001600160a01b0391821690528351602090810151835182015284516040908101518451909101528451606090810151845193169201919091528351608090810151835190910152835160a001518185015190910151615a4891906161dc565b815160a00152602080820180516000905284518201518151830152908401805160409081015183519091015251606090810151915101526114fe81615e94565b615a90616670565b60208201515115615bbb5780516002905280516000606090910152805160405160008051602061738683398151915291615ac99161718b565b60405180910390a1615b1c6040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b018051516080808c01918252915186015160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951694830194909452925191810191909152905160c082015260e001614ef3565b60208101805160019052805160006040918201529051905160008051602061738683398151915291615bec9161718b565b60405180910390a1600080805560018190556105ff90600290616690565b8060000151606001516001600160a01b03168160200151602001516001600160a01b031614615c3a576000615c43565b60208101515115155b1561557d57615cb960405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151841681860152855160809081015190860152855160a09081015190860152855160c0908101519086015282860180515160e087015286518201519094166101008601529251909201516101208401526014600055436001559051615559918391016172fd565b8060000151606001516001600160a01b03168160200151602001516001600160a01b031614615d7f576000615d88565b60208101515115155b156157b857615dfe60405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151841681860152855160809081015190860152855160a09081015190860152855160c0908101519086015282860180515160e08701528651820151909416610100860152925190920151610120840152601e600055436001559051615559918391016172fd565b602080820151015115615f3157615ea961652a565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931683850152845160809081015190850152845160a09081015190850152818501805151151560c0860152805183015160e08601525190920151610100840152601860005543600155905161555991839101616f2b565b8060000151606001516001600160a01b03166108fc8260200151606001519081150290604051600060405180830381858888f19350505050158015615f7a573d6000803e3d6000fd5b50615f8361658a565b81515181516001600160a01b03918216905282516020908101518351909101528251604090810151835190910152825160609081015183519216910152815160800151615fd1906001614d5d565b602082810180519290925283810151604001519151015260006020820151604001526105ff81615a88565b602080820151015115615f315761601161652a565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931683850152845160809081015190850152845160a09081015190850152818501805151151560c0860152805183015160e08601525190920151610100840152600e60005543600155905161555991839101616f2b565b6160a161665d565b81516020908101519083015151101561612d576160bc6166ca565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925284516080908101519084015280850180515160a08501525182015160c08401526022600055436001559051614ef39183910161730c565b8051600590528051600060c09091015280516040516000805160206173868339815191529161615b9161718b565b60405180910390a161616b6166ca565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925284516080908101519084015280850180515160a08501525182015160c08401526007600055436001559051614ef39183910161730c565b6000816162195760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b6044820152606401614d54565b6162238284617363565b9392505050565b6040805161028081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e0810182905261020081018290526102208101829052610240810182905261026081019190915290565b6040518060400160405280600081526020016162fb60408051808201909152600060208201908152815290565b905290565b6040518060400160405280600081526020016162fb60405180602001604052806000151581525090565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201929092529081905b81526020016162fb6040518060800160405280600081526020016000815260200160008152602001600081525090565b60405180604001604052806163f26040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81526020016162fb60405180606001604052806000815260200160008152602001600081525090565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820192909252908190616365565b82805461646690616b1f565b90600052602060002090601f01602090048101928261648857600085556164ce565b82601f106164a157805160ff19168380011785556164ce565b828001600101855582156164ce579182015b828111156164ce5782518255916020019190600101906164b3565b506164da929150616719565b5090565b60405180604001604052806164f16166ca565b81526020016162fb60405180608001604052806000815260200160006001600160a01b0316815260200160008152602001600081525090565b60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160001515815260200160008152602001600081525090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081906163f2565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082019290925290819081526020016162fb60405180608001604052806000151581526020016000815260200160008152602001600081525090565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c08201929092529081906163f2565b60405180602001604052806162fb61672e565b604051806040016040528061668361672e565b81526020016162fb61672e565b50805461669c90616b1f565b6000825580601f106166ac575050565b601f0160209004906000526020600020908101906156709190616719565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b5b808211156164da576000815560010161671a565b6040805160e08101909152806000815260006020820181905260408201819052606082018190526080820181905260a0820181905260c09091015290565b60006040828403121561677e57600080fd5b50919050565b60006040828403121561679657600080fd5b616223838361676c565b6001600160a01b038116811461567057600080fd5b6000602082840312156167c757600080fd5b8135616223816167a0565b634e487b7160e01b600052602160045260246000fd5b60028110615670576156706167d2565b81516060820190616808816167e8565b8083525060208301511515602083015260408301511515604083015292915050565b60006020828403121561683c57600080fd5b5035919050565b82815260006020604081840152835180604085015260005b818110156168775785810183015185820160600152820161685b565b81811115616889576000606083870101525b50601f01601f191692909201606001949350505050565b815160608201906168b0816167e8565b808352506020830151151560208301526040830151604083015292915050565b6040516020810167ffffffffffffffff8111828210171561690157634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff8111828210171561690157634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff8111828210171561690157634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561690157634e487b7160e01b600052604160045260246000fd5b600081830360408112156169af57600080fd5b6169b7616907565b8335815291506020601f19820112156169cf57600080fd5b506169d86168d0565b6169e06168d0565b6020938401358152815291810191909152919050565b600060408284031215616a0857600080fd5b616223838361699c565b801515811461567057600080fd5b60008183036040811215616a3357600080fd5b616a3b616907565b8335815291506020601f1982011215616a5357600080fd5b50616a5c6168d0565b6020830135616a6a81616a12565b8152602082015292915050565b600060408284031215616a8957600080fd5b6162238383616a20565b600060408284031215616aa557600080fd5b6040516040810181811067ffffffffffffffff82111715616ad657634e487b7160e01b600052604160045260246000fd5b604052823581526020830135616aeb81616a12565b60208201529392505050565b8051610e6b81616a12565b600060208284031215616b1457600080fd5b815161622381616a12565b600181811c90821680616b3357607f821691505b6020821081141561677e57634e487b7160e01b600052602260045260246000fd5b8051610e6b816167a0565b60006101208284031215616b7257600080fd5b616b7a616938565b9050616b8582616b54565b81526020820151602082015260408201516040820152616ba760608301616b54565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525092915050565b60006101208284031215616bf957600080fd5b6162238383616b5f565b6001600160a01b0383168152606081016162236020830184805182526020908101515151910152565b6000610100808385031215616c4057600080fd5b6040519081019067ffffffffffffffff82118183101715616c7157634e487b7160e01b600052604160045260246000fd5b8160405280925083519150616c85826167a0565b8181526020840151602082015260408401516040820152616ca860608501616b54565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b60006101008284031215616cf057600080fd5b6162238383616c2c565b6001600160a01b038316815260608101616223602083018480518252602090810151511515910152565b600060808284031215616d3657600080fd5b6040516080810181811067ffffffffffffffff82111715616d6757634e487b7160e01b600052604160045260246000fd5b6040528251616d75816167a0565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b60006101408284031215616ddc57600080fd5b616de461696a565b9050616def82616b54565b81526020820151602082015260408201516040820152616e1160608301616b54565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e0820152610100616e4c818401616b54565b818301525061012080830151818301525092915050565b60006101408284031215616e7657600080fd5b6162238383616dc9565b60006101208284031215616e9357600080fd5b616e9b616938565b9050616ea682616b54565b81526020820151602082015260408201516040820152616ec860608301616b54565b60608201526080820151608082015260a082015160a0820152616eed60c08301616af7565b60c082015260e082015160e082015261010080830151818301525092915050565b60006101208284031215616f2157600080fd5b6162238383616e80565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c08083015115159082015260e08083015190820152610100808301519082015261012081016107a8565b600060e08284031215616fac57600080fd5b60405160e0810181811067ffffffffffffffff82111715616fdd57634e487b7160e01b600052604160045260246000fd5b6040528251616feb816167a0565b8082525060208301516020820152604083015160408201526060830151617011816167a0565b806060830152506080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600060c0828403121561705257600080fd5b60405160c0810181811067ffffffffffffffff8211171561708357634e487b7160e01b600052604160045260246000fd5b6040528251617091816167a0565b80825250602083015160208201526040830151604082015260608301516170b7816167a0565b60608201526080838101519082015260a0928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b600082821015617101576171016170d9565b500390565b60008219821115617119576171196170d9565b500190565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012081016107a8565b815160e0820190600681106171a2576171a26167d2565b8083525060208301511515602083015260408301511515604083015260608301511515606083015260808301516171dd608084018215159052565b5060a08301516171f160a084018215159052565b5060c083015161720560c084018215159052565b5092915050565b61010081016107a8828460018060a01b038082511683526020820151602084015260408201516040840152806060830151166060840152506080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b80516001600160a01b03168252602081015160208301526040810151604083015260608101516172ab60608401826001600160a01b03169052565b506080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100808201516172ef828501826001600160a01b03169052565b505061012090810151910152565b61014081016107a88284617270565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b60008261738057634e487b7160e01b600052601260045260246000fd5b50049056fe3457ee6571e662a8bb768bc5dc3a2139ed5d5cd81c69401f82a7339096e9bf5da2646970667358221220c8d7d34ee70022d4f9f233db6d608837e743dbfd88ca14c43c2988b67630ad3264736f6c634300080c0033`,
  BytecodeLen: 30484,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:61:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:65:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:322:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:153:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:172:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:190:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:212:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:274:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:276:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:289:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: './index.rsh:276:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  20: {
    at: './index.rsh:289:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  21: {
    at: './index.rsh:216:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  24: {
    at: './index.rsh:274:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  25: {
    at: './index.rsh:276:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  27: {
    at: './index.rsh:289:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  28: {
    at: './index.rsh:276:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  30: {
    at: './index.rsh:289:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  31: {
    at: './index.rsh:216:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  32: {
    at: './index.rsh:194:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  33: {
    at: './index.rsh:176:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  34: {
    at: './index.rsh:157:19:after expr stmt semicolon',
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
  "Player_getRole": Player_getRole,
  "Player_join": Player_join,
  "Player_receivePay": Player_receivePay,
  "Player_seeWinner": Player_seeWinner,
  "Player_wager": Player_wager
  };
export const _APIs = {
  Player: {
    getRole: Player_getRole,
    join: Player_join,
    receivePay: Player_receivePay,
    seeWinner: Player_seeWinner,
    wager: Player_wager
    }
  };

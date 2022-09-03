import io from 'socket.io-client'

export default class ConnectionManager {
  constructor (props) {
    this.socket = null
    this.initSocket();
  }

  initSocket () {
    if (!this.socket) {
      if (window.location.hostname === 'localhost') {
        this.socket = io('http://localhost:8081',{transports: ['websocket'], upgrade: false})
      } else {
        this.socket = io('wss://server-spyfalling.herokuapp.com',{transports: ['websocket'], upgrade: false})
      }
    } else {
      this.socket.connect();
    }
  }

  connect (playerName, sessionId, wager, numPlayers, rounds, pType, connectionClosedCallback, onMessageCallback) {

    this.initSocket()
    this.send('join-session', {
      sessionId: sessionId,
      playerName: playerName,
      sessionWager: wager,
      sessionNumP: numPlayers,
      sessionRounds: rounds,
      playerType: pType,
      game: 'spy'
    })

    this.socket.on('disconnect', () => {
      this.socket = null
      connectionClosedCallback()
    })

    this.socket.on('message', (msg,callback) => {
      console.log(msg);
      onMessageCallback(msg.type,msg,callback)
    })
  }

  disconnect () {
    this.socket.disconnect()
    this.socket = null
  }

  send (type, data) {
    this.socket.emit(type, data)
  }
}

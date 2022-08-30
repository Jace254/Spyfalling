import io from 'socket.io-client'

export default class ConnectionManager {
  constructor (props) {
    this.socket = null
    this.initSocket()
  }

  initSocket () {
    if (!this.socket) {
      if (window.location.hostname === 'localhost') {
        this.socket = io('http://localhost:8081')
      } else {
        this.socket = io('https://spyfall-server.onrender.com')
      }
    } else {
      this.socket.connect()
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

    this.socket.on('message', (msg) => {
      onMessageCallback(msg.type, msg)
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

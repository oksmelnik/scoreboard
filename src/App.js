import React, { Component } from 'react'
import Title from './components/Title'
import './App.css'
import Player from './components/Player'
import Board from './containers/Board'
import Podium from './containers/Podium'

export const players = [
  { id: 1, name: 'Arno', score: 4 },
  { id: 2, name: 'Mat', score: 6 },
  { id: 3, name: 'Mike', score: 3 },
  { id: 4, name: 'Wouter', score: 4 },
  { id: 5, name: 'Bram', score: 5 },
  { id: 6, name: 'Mimi', score: 3 }
]


class App extends Component {
  state = { players }

  updatePlayer = (playerId, updates) => {
      this.setState({
        players: this.state.players.map((player) => {
          if (player.id !== playerId) return player
          return { ...player, ...updates }
        })
      })
    }

  render() {
    return (
      <div className="App">
    
      <Board players={this.state.players}
      updatePlayer={this.updatePlayer}
      />
      </div>
    )
  }
}

export default App

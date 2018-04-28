import React, { PureComponent } from 'react'
import Title from '../components/Title'
import Player from '../components/Player'
import './Board.css'

export default class Board extends PureComponent {

newArray(array) {
  let newa = array.slice(0)
  newa.sort(function(a,b) {
    return  b.score - a.score
  })
  return newa
}

  render() {
    const { players } = this.props
    let playersSorted = this.newArray(players)

    return (
      <div>
        <Title content="Scoreboard" />
        <ul className="Board">
          {
            playersSorted.map((player, index) => (
              <Player key={index} { ...player } />
            ))
          }
        </ul>
      </div>
    )
  }
}

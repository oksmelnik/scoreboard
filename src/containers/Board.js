import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Player, { playerShape } from '../components/Player'
import './Board.css'

import Trophy from '../components/Trophy'

export default class Board extends PureComponent {
  static propTypes = {
    players: PropTypes.arrayOf(playerShape).isRequired,
    updatePlayer: PropTypes.func.isRequired
  }

newArray(array) {
  let newa = array.slice(0)
  newa.sort(function(a,b) {
    return  b.score - a.score
  })
  return newa
}

  render() {
    const { players, updatePlayer } = this.props
    let playersSorted = this.newArray(players)

    return (
      <div>
        <Title content="Scoreboard" />

        <ul className="Board">
          {playersSorted
            .map((player, index) => (
              <Player key={index}
              onChange={updatePlayer}
              { ...player } />
            ))
          }
        </ul>
      </div>
    )
  }
}

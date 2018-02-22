import React, { PureComponent } from 'react'
import './Player.css'

export default class Player extends PureComponent {
  render() {
    const { name, score } = this.props

    return (
      <li className="Player">
        <p className="name">{name}</p>
        <p className="score">{score}</p>
      </li>
    )
  }
}

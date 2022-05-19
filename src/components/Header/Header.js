import "./style.css"
import { useSelector } from "react-redux"

import React from 'react'

function Header() {

  const score = useSelector(state => state.game.score)

  return (
    <div>
        <h2>Score : {score}</h2>
    </div>
  )
}

export default Header
import React from 'react'
import "./style.css"

function Card({ card, handleChoise, flipped, disabled }) {

    return (
        <div className='card'>
            <div className={flipped || card.matched === true ? 'flipped' : ''}>
                <img className='front' src={card.src} alt='card' />
                <img className='back' src='/images/cover.png' alt='card' onClick={() => !disabled && handleChoise(card)} />
            </div>
        </div>
    )
}

export default Card
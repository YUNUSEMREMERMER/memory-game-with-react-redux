import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { initialcards, shufflecards, matchedCards, scoreDown, scoreUp, resetScore } from '../../redux/Game/gameSlice';
import Card from "../Card/Card"


import "./style.css"

function Content() {

  const cards = useSelector((state) => state.game.cards);
  const dispatch = useDispatch();
  const [turn, setTurn] = useState(0);
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    dispatch(initialcards());
    dispatch(shufflecards());
  },[dispatch])
  
  const playAgain = () => {
    dispatch(initialcards());
    dispatch(shufflecards());
    dispatch(resetScore());
  }
       
  useEffect(() => {
    if (choiseOne && choiseTwo) {
      setDisabled(true);
      if (choiseOne.src === choiseTwo.src) {
        dispatch(scoreUp());
        dispatch(matchedCards(choiseOne));
        resetTurn();
      }
      else {
        dispatch(scoreDown());
        setTimeout(() => resetTurn(), 1000);
      }
    }
    // eslint-disable-next-line
  }, [choiseOne, choiseTwo])

  const handleChoise = (card) => {
    choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
  }
 
  const resetTurn = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
    setTurn(turn + 1);
    setDisabled(false);
  }
 
  return (
    <>
      <div className='content'>
        {cards.map((card) => (<Card key={card.id} card={card}
          handleChoise={handleChoise}
          flipped={card === choiseOne || card === choiseTwo}
          disabled={disabled}
        />)
        )}
      </div>
      <button className='playagainbutton' onClick={playAgain}>Play again</button>
    </>
  )
}

export default Content
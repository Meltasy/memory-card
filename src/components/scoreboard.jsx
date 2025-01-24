import '../styles/scoreboard.css'
import { catsList } from './data'

function Scoreboard({ currentScore, bestScore, winnerRef, newGame }) {

  return (
    <div>
      <h2>Current score: {currentScore}</h2>
      <h2>Best score: {bestScore} </h2>
      <dialog className='winnerDialog' ref={winnerRef}>
        {currentScore === catsList.length ? (
          <h2>Congratulations, you remembered all of them!</h2>
        ) : (
          <h2>Congratulations, you scored {currentScore}!</h2>
        )}
        <button onClick={newGame}>Play again!</button>
      </dialog>
    </div>
  )
}

export default Scoreboard

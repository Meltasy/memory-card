import { useState, useRef } from 'react'
import Scoreboard from './scoreboard.jsx'
import Cards from './cards.jsx'
import { catsList } from './data'
import '../styles/App.css'

function App() {
  const [catsArray, setCatsArray] = useState(shuffleCards(catsList))
  const [clickedCats, setClickedCats] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const winnerRef = useRef()

  function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  function newGame() {
    const shuffledCatsList = [...catsArray]
    shuffleCards(shuffledCatsList)
    setCatsArray(shuffledCatsList)
    setCurrentScore(0)
    setClickedCats([])
    winnerRef.current.close()
  }

  function endGame() {
    winnerRef.current.showModal()
    if (currentScore > bestScore) {
      setBestScore(currentScore)
    }
  }

  function handleClick(cat) {
    if (clickedCats.includes(cat.id)) {
      endGame()
    } else {
      setClickedCats([ ...clickedCats, cat.id])
      setCurrentScore(currentScore + 1)
    }
    const shuffledCatsList = [...catsArray]
    shuffleCards(shuffledCatsList)
    setCatsArray(shuffledCatsList)
  }

  return (
    <main>
      <header>
        <h1>Memory Card</h1>
        <h2>How many cats can you remember?</h2>
        <h3>There are 24 cats and the goal of the game is to click on every cat once.
          You can try to remember the photo, the breed, or both! Do you have a good memory?</h3>
      </header>
      <section className='scoreboard'>
        <Scoreboard
          currentScore={currentScore}
          bestScore={bestScore}
          winnerRef={winnerRef}
          newGame={newGame}
        />
      </section>
      <section className='cards'>
        <Cards catsArray={catsArray} handleClick={handleClick} />
      </section>
      <footer>
        <h2>Meltasy games for fun!</h2>
      </footer>
    </main>
  )
}

export default App

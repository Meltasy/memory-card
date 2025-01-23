import '../styles/cards.css'

function Cards({ catsArray, handleClick }) {

  return (
    <div>
      {catsArray.map((cat) => (
        <div className='card' key={cat.id} value={cat} onClick={() => handleClick(cat)}>
            <img src={cat.url} alt={cat.name} />
            <p>{cat.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Details = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [id])

  if (!pokemon) return <p>Loading...</p>

  return (
    <div className='ditalspage'>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Base Experience: {pokemon.base_experience}</p>
      <p>Weight: {pokemon.weight}</p>
      <br />
      <Link to="/">Back</Link>
        
    
    </div>
  )
}

export default Details

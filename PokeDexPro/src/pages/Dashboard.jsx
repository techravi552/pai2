// pages/Dashboard.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'

const Dashboard = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [offset, setOffset] = useState(0)

  const fetchPokemons = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    const data = await res.json()
    const details = await Promise.all(
      data.results.map(p => fetch(p.url).then(res => res.json()))
    )
    setPokemonList(details)
  }

  useEffect(() => {
    fetchPokemons()
  }, [offset])

  return (
    <div>
      <h1 >Pokemon Dashboard</h1>
      <div className="grid">
        {pokemonList.map(pokemon => (
          <div key={pokemon.id} className="card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            <p>Base Exp: {pokemon.base_experience}</p>
            <p>Weight: {pokemon.weight}</p>
        
            <Link to={`/details/${pokemon.id}`}>More Info</Link>
          </div>
        ))}
      </div>

  
      <Pagination offset={offset} setOffset={setOffset} />
    </div>
  )
}

export default Dashboard

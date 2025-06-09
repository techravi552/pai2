// App.jsx
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Details from './pages/Details.jsx'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h3 className='header'>
          <Link to="/">Dashboard</Link>
          <Link to="/details/1">Deteils-page</Link>

          <Link to="/">Back</Link>
         </h3>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App

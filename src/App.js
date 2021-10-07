import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import Header from './components/ui/Header'
import CharacterGrid from './components/character/CharacterGrid'

const BASE_URL = 'https://www.breakingbadapi.com/api/characters'

function App() {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(async () => {
    const response = await axios(BASE_URL)
    setCharacters(response.data)
    setIsLoading(false)
  }, [])

  return (
    <div className='App'>
      <Header />
      <CharacterGrid characters={characters} isLoading={isLoading} />
    </div>
  )
}

export default App

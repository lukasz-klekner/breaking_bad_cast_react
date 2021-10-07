import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import Header from './components/ui/Header'
import CharacterGrid from './components/character/CharacterGrid'
import SearchInput from './components/ui/SearchInput'

const BASE_URL = 'https://www.breakingbadapi.com/api/characters'

function App() {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(async () => {
    const response = await axios(`${BASE_URL}?name=${query}`)
    setCharacters(response.data)
    setIsLoading(false)
  }, [query])

  return (
    <div className='App'>
      <Header />
      <SearchInput getQuery={(q) => setQuery(q)} />
      <CharacterGrid characters={characters} isLoading={isLoading} />
    </div>
  )
}

export default App

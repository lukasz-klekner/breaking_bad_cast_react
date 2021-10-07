import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import Header from './components/ui/Header'

const BASE_URL = 'https://www.breakingbadapi.com/api/characters'

function App() {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(async () => {
    const response = await axios(BASE_URL)
    setCharacters(response.data)
    setIsLoading(false)
  }, [])

  console.log(characters)
  return (
    <div className='App'>
      <Header />
    </div>
  )
}

export default App

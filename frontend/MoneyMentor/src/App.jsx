import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/Main'
import { SearchBar } from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <SearchBar />
      <MainContent />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Crudjob from './components/CrudJob/Crudjob'
import './scss/_index.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Crudjob></Crudjob>
    </>
  )
}

export default App

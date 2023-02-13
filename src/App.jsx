import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CustomerReg from './CustomerReg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CustomerReg />
  )
}

export default App

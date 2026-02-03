import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponentExample from './FunctionalComponentExample'

function App() {
  return (
    <>
      <h1>Hello react</h1>
      <p>Hello world</p>
      <p>{2+2}</p>
      <FunctionalComponentExample/>
    </>

  )
}

export default App

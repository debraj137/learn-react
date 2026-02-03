import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponentExample from './FunctionalComponentExample'
import JSXRules from './JSXRules'
import Props from './Props'

// function Header(){
//   return <h1>Header</h1>
// }

// function Footer(){
//   return <h1>Footer</h1>
// }

function Card(){
  return (
    <>
    <h2>Title</h2>
    <p>Description</p>
    </>
  )
}

function App() {
  return (
    <>
      {/* <h1>Hello react</h1>
      <p>Hello world</p>
      <p>{2+2}</p>
      <FunctionalComponentExample/>
      <JSXRules/>
      <Props name='props example'/> */}
      {/* <Header/>
      <Footer/> */}
      <Card/>
    </>

  )
}

export default App

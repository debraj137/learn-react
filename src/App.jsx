import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponentExample from './FunctionalComponentExample'
import JSXRules from './JSXRules'
import Props from './Props'
import ModuleCssExample from './modulecss/ModuleCssExample'

// function Header(){
//   return <h1>Header</h1>
// }

// function Footer(){
//   return <h1>Footer</h1>
// }

// function Card(){
//   return (
//     <>
//     <h2>Title</h2>
//     <p>Description</p>
//     </>
//   )
// }

// const isLoggedIn = true;

// const fruits = ['Apple','Banana','Orange']
// const handleClick=()=>{
//   alert('Clicked');
// }



function App() {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  console.log('App rendered');
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
      {/* <Card/> */}
      {/* <h1>
        {isLoggedIn ? 'Dashboard': 'Login'}
      </h1> */}
      {/* <ul>
        {fruits.map(fruit=>(
          <li key={fruit}>{fruit}</li>
        ))}
      </ul> */}
      {/* <button onClick={handleClick}>Click here</button> */}
      {/* <div className='box'>Hello</div> */}
      {/* <div style={{color:'red',fontSize:'20px'}}>Hello</div> */}
      {/* <ModuleCssExample/> */}
      {/* <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Increase count by 1</button> */}
      {/* <input value={name} onChange={e=>setName(e.target.value)}/>
      <input defaultValue='dev'/> */}
      {/* <button onClick={()=>{setCount(count+1)}}>Increment</button> */}
      <h1>Static Text</h1>
      <button onClick={()=>setCount(count)}>Click(no state change)</button>
    </>

  )
}

export default App

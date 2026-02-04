import { memo, useEffect, useState } from 'react'
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
const Child = memo(function Child() {
  console.log('Child rendered')
  return <p>I am child</p>
})


function App() {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState('');
  // const [count, setCount] = useState(0);
  // const user = { name: "Debraj" }; // new object every render
  // console.log('App rendered');
  // useEffect(()=>{
  //   console.log('useEffect ran')
  // })
  // const [count, setCount] = useState(0);
  // console.log('App render');
  // useEffect(()=>{
  //   console.log('Effect run: count=',count)
  // },[count])
  // useEffect(()=>{
  //   const timer= setInterval(()=>{
  //     console.log('Running...')
  //   },1000)

  //   return ()=>{
  //     console.log('cleanup');
  //     clearInterval()
  //   }
  // },[])
  // const [users, setUsers] = useState([]);
  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>setUsers(data))
  // },[])
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(()=>{
  //   const fetchUser = async()=>{
  //     try {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //       if(!res.ok) throw new Error('Failed to fetch');
  //       const data = await res.json();
  //       console.log('data: ',data)
  //       setUsers(data);
  //     } catch (error) {
  //       setError(error.message)
  //     }
  //     finally{
  //       setLoading(false);
  //     }
  //   }
  //   fetchUser();
  // },[]);

  // if(loading) return <p>Loading...</p>
  // if(error) return <p>Error: {error}</p>
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   let isActive = true;

  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then(res => res.json())
  //     .then(result => {
  //       if (isActive) {
  //         setData(result);
  //       }
  //     });

  //   return () => {
  //     isActive = false;
  //   };
  // }, []);

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  // function handleSubmit(e){
  //   e.preventDefault();
  //   console.log('email: ',email);
  // }
  const [email, setEmail]=useState('');
  const [error, setError]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!email.includes('@')){
      setError('Invalid email');
      return;
    } 
    setError('');
    console.log('email submitted: ',email);
  }
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
      {/* <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      <Child/> */}
      {/* <h1>useEffect example, check console</h1> */}
      {/* <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button> */}
      {/* <h1>Cleanup function in useEffect: check console</h1> */}
      {/* <ul>
        {users.map(user=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
      {/* <ul>
        {users.map(user=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <input type='text' value={name} onChange={e=>setName(e.target.value)} placeholder="Enter name"/>
      <p>You typed: {name}</p> */}
      {/* <form onSubmit={handleSubmit}>
        <input type='email' value={email} onChange={e=>setEmail(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form> */}
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={e=>setEmail(e.target.value)}/>
        <button>Submit</button>
        {error && <p style={{color:'red'}}>Error: {error}</p>}
      </form>
    </>

  )
}

export default App

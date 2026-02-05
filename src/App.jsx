import { memo, useEffect, useReducer, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponentExample from './FunctionalComponentExample'
import JSXRules from './JSXRules'
import Props from './Props'
import ModuleCssExample from './modulecss/ModuleCssExample'
import { useForm } from 'react-hook-form'

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
// const Child = memo(function Child() {
//   console.log('Child rendered')
//   return <p>I am child</p>
// })

// const fields=[
//   {name:'name', placeholder: 'Enter name'},
//   {name: 'password', placeholder: 'Enter password'}
// ]


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
  // const [email, setEmail]=useState('');
  // const [error, setError]=useState('');
  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   if(!email.includes('@')){
  //     setError('Invalid email');
  //     return;
  //   } 
  //   setError('');
  //   console.log('email submitted: ',email);
  // }

  // const [form, setForm] = useState({});

  // const handleChange=(e)=>{
  //   setForm(
  //     {
  //       ...form,
  //       [e.target.name]: e.target.value
  //     }
  //   )
  // }

  // const inputRef = useRef();

  // const focusInput = ()=>{
  //   return inputRef.current.focus();
  // }

  // const {register, handleSubmit}= useForm();
  // const onSubmit = (data)=>{
  //   console.log(data);
  // }

  const initialState = {count: 0}

  function reducer(state,action){
    switch(action.type){
      case 'increment': return {count: state.count+1};
      case 'decrement': return {count: state.count-1};
      default: return state;
    }
  }
  
  const [state, dispatch] = useReducer(reducer, initialState)
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
      {/* <form onSubmit={handleSubmit}>
        <input value={email} onChange={e=>setEmail(e.target.value)}/>
        <button>Submit</button>
        {error && <p style={{color:'red'}}>Error: {error}</p>}
      </form> */}
      {/* <form>
        {fields.map(field=>(
          <input key={field.name} name={field.name} placeholder={field.placeholder} onChange={handleChange}/>
        ))}
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </form> */}
      {/* <div>
        <input type="text" ref={inputRef} placeholder='Click button to focus'/>
        <button onClick={focusInput}>Focus</button>
      </div> */}
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder='Enter Email'/>
        <input {...register('password')} placeholder='Enter Password'/>
        <button>Submit</button>
      </form> */}
      <div>
        <p>Count: {state.count}</p>
        <button onClick={()=>dispatch({type: 'increment'})}>+</button>
        <button onClick={()=>dispatch({type: 'decrement'})}>-</button>
      </div>
    </>

  )
}

export default App

const JSXRules = () => {
  const name = 'Debraj'  
  const flag = true;
  return (
    <>
    <h1>JSX rule</h1>
    <h2>Hello {name}</h2>
    <p>{2+2}</p>
    <p>{flag==true? 'yes': 'no'}</p>
    </>
  )
}

export default JSXRules
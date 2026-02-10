import React from 'react'

const GlobalError = ({message}) => {
  return (
    <div style={{color:'red'}}>
        <h3>Something went wrong</h3>
        <p>{message}</p>
    </div>
  )
}

export default GlobalError
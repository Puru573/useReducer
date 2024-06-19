import React from 'react'

function Button({dispatch}) {
 return (
    <div>
      <h1>buttonComponent</h1>
      <button onClick={()=>dispatch({type:"Inc"})}>Button</button>
      <button onClick={()=>dispatch({type:"Dec"})}>Button</button>
    </div>
  )
}

export default Button

import React,{useReducer}from 'react'
import Button from './Button'
const initialState={
    count:1
}

const reducer=(state,action)=>{   //i have to use one state in different component than i use useReducer
    switch (action.type){
        case "Inc":
            return {count:state.count+1}
        case "Dec":
            return{count:state.count-1}

    }
}
function Counter() {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
    <h1>{state.count}</h1>
    <button onClick={()=>dispatch({type:"Inc"})}>button</button>
    <button onClick={()=>dispatch({type:"Dec"})}>button</button>
    <Button dispatch={dispatch}/>
    </div>
  )
}

export default Counter

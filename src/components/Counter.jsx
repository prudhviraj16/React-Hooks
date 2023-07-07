import React,{useState,useEffect} from 'react'
import Documenttitle from './Documenttitle'
import Customcount from './Customcount'
const Counter = () => {
    // const [count,setCount] = useState(0)
    // Documenttitle(count)
    const [count,increment,decrement,reset]= Customcount(0)
  return (
    <div>
      {/* <button onClick={}>Click me</button> */}
      {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Decrement</button>
    </div>
  )
}

export default Counter

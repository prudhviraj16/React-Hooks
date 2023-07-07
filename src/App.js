import React from 'react'
import Usereducer from './components/Usereducer'
import Age from './components/Age'
import Salary from './components/Salary'
import Count from './components/Count'
import Title from './components/Title'
import Useref from './components/Useref'
import Counter from './components/Counter'
import UseInputcustom from './components/UseInputcustom'
const App = () => {

  const [count,setCount] = React.useState(0)
  const [count1,setCount1] = React.useState(0)
  const [timer,setTimer] = React.useState(0)
  const [input,setInput] = UseInputcustom()
  const [value,bind,reset]  = UseInputcustom()
  
  React.useEffect(() =>{
    document.title = count
    console.log('render')
  },[count])

  const [age,setAge] = React.useState(0)
  const [salary,setSalary] = React.useState(0)
  const ref = React.useRef()

  const ageIncrease = () => {
    setAge(age+10)
    console.log("ageIncrease")
  }

  const salaryIncrease = () => {
    setSalary(salary+1000)
    console.log("salaryIncrease")
  }

  React.useEffect(() => {
    ref.current = setInterval(() => {
      setTimer(prevTimer => prevTimer+1)
    },1000)

    return () => {
      clearInterval(ref.current)
    }
  },[])

  
  return (
    <>
      {timer}
      <button onClick={() => setCount(count+1)}>Click Me</button>
      <button onClick={() => setCount1(count1+1)}>Click Me</button>
      <Title/>
      <Usereducer/>
      <Count type="text" count={age}/>
      <button onClick={ageIncrease}>Increase Age</button>
      <Count type="salary" count={salary}/>
      <button onClick={salaryIncrease}>Increase Salary</button>
      <button onClick={()=>clearInterval(ref.current)}>Clear</button>
      <Age />
      <Salary/>
      <Useref/>
      <Counter/>
      {/* <input type="text" onChange={setInput(e.target.value)}/> */}
    </>

  )
}

export default App

import { useState } from "react"

function App() {

  const [value, setValue] = useState(0)

  const [num, setNum] = useState({user: 'Dekiru', age: 16})

  function increasing() {
    setValue(value + 1)
  }

  function decreasing() {
    setValue(value - 1)
  }

  function jump() {
    setValue(value + 5)
  }

  function click() {
    const newNum = {...num}
    newNum.user =  'saksham'
    console.log(newNum)
  }

  
  
  return <div>
    <div className="count">
      <h1 className="h1">{value}</h1>
    </div>
    <button className="inc_dec" onClick={increasing}>Increasing</button>
    <button className="inc_dec" onClick={decreasing}>Decreassing</button>
    <button className="inc_dec" onClick={jump}>Jump by 5</button>
    <button onClick={click}>click</button>
  </div>
}

export default App

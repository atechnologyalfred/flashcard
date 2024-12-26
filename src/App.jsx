import { useState } from "react"

export default function App () {
  return (
    <div id = "container">
      <h1>Todolist</h1>
      <Todolist />
    </div>
  )
}

function Todolist () {

  const [state, setState] = useState("")
  const [inputValue, setInputValue] = useState([])
  function handleChange (e) {
    setState(e.target.value)
   
  }
  function handleClick(e) {
    e.preventDefault()
    setInputValue(preValue => {
      return [
        ...preValue,
        state,
      ]
    })
    setState("")
  }
  return (
    <form className = "todolist" onSubmit={handleClick}>
      <div className = "list">
        <input type = "text" placeholder="enter task" value = {state}  onChange={handleChange} />
        <button>+</button>
      </div>
      <ul className = "item" >
        {inputValue.map((item, itemIndex) => <li key = {itemIndex}>{item}</li>)}
      </ul>
    </form>
  )
}
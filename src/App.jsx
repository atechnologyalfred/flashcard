import { useState } from "react"

const items = [
  {id: 1, question: 'The property of react that is UI is called what ?', answer: 'JSX', },
  {id: 2, question: 'The custom component in react is called', answer: 'Props'},
  {id: 3, question: 'The memory of a react component that is responsible for re-rendering of the entire component is called ?', answer: 'useState'},
  {id: 4, question: 'The property of react that is UI is called what ?', answer: 'JSX', },
  {id: 5, question: 'The custom component in react is called', answer: 'Props'},
  {id: 6, question: 'The memory of a react component that is responsible for re-rendering of the entire component is called ?', answer: 'useState'},

]
export default function App () {
  return (
    <div id = "container">
      <h1>The flashcard exercise</h1>
      <FlashChild/>
    </div>
  )
}


  function FlashChild () {
   const [getAnswer, setGetAnswer] = useState(null)
    function handleChange(id) {
      setGetAnswer(id)
    }

    return (
      <ul className = "flash-card">
        {items.map((item, itemIndex) => <li key = {itemIndex} onClick={() => handleChange(item.id)}  className = {item.id === getAnswer ? "active" : null }> 
        {item.id === getAnswer ? item.answer: item.question}</li>
        )}
       </ul>
         
    )
    
  }
  
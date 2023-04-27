import { useState } from "react"
import Button from "../Button/Button"
import "../CreateTodo/CreateTodo.css"

const CreateTodo = ({ handleClickFunc }) => {
  const [inputValue, setInputValue] = useState('')

  const getValue = () => {
    if (!inputValue) return
    handleClickFunc(inputValue)
    setInputValue('')
  }

  return (
    <div>
      <input className="create-todo" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Button handleClickFunc={() => getValue()} title={'Add task'} />
    </div>
  )
}

export default CreateTodo
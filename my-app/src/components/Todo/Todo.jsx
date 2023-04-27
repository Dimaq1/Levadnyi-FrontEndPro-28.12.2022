import { useState } from "react"
import { todo } from '../../TodoData.mock'
import TodoItem from "../TodoItem/TodoItem"
import Button from "../Button/Button"
import CreateTodo from "../CreateTodo/CreateTodo"
import '../Todo/Todo.css'



const Todo = () => {
  const [todoList, setTodoList] = useState(todo)

  const handleCheck = (completed, id) => {
    const copyList = [...todoList]
    copyList.forEach((el) => {
      if (el.id === id) {
        el.completed = completed
      }
    })
    setTodoList(copyList)
  }


  const handleClickFunc = (value) => {
    const copyList = [...todoList]

    const newTodo = {
      "userId": 1,
      "id": Math.random(),
      "title": value,
      "completed": false
    }

    copyList.push(newTodo)
    setTodoList(copyList)
  }

  return (
    <div>
      <div className="todo-wrap">
        <h2>List tasks</h2>
        {todoList.map((todo) => {
          return <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleCheck={handleCheck}
          />
        })}

        <CreateTodo
          handleClickFunc={handleClickFunc}
        />

      </div>
    </div>
  )

}



export default Todo
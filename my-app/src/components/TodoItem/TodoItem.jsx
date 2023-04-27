

const TodoItem = ({ title, completed, handleCheck, id }) => {

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={(e) => handleCheck(e.target.checked, id)} />
      {title}
    </div>
  )
}

export default TodoItem

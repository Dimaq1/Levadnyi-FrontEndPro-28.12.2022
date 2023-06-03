import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from '../store/slices/todoListSlice.js'

const TodoList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      const newTask = {
        id: Date.now(),
        title: newTaskTitle,
      };
      dispatch(addTask(newTask));
      setNewTaskTitle('');
    }
  };

  const handleDeleteTask = taskId => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTaskTitle}
        onChange={e => setNewTaskTitle(e.target.value)}
        placeholder="Enter task title"
      />
      <button onClick={handleAddTask}>Add Task</button>
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.title}
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

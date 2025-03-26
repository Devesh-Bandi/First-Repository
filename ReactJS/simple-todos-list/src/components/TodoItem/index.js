//src/components/TodoItem/index.js
import './index.css'
const TodoItem = props => {
  const { todoDetails, deleteTodo } = props
  const { id, title } = todoDetails
  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className='todo-item'>
      <p className='title'>{title}</p>
      <button className='delete-button' type='button' onClick={onDeleteTodo}>Delete</button>
    </li>
  )
}

export default TodoItem
export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span
          className={`todo-item__title ${todo.completed ? 'done' : ''}`}
        >
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  )
}

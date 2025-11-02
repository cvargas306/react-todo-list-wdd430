import { useState } from 'react'

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return
    onAdd(title)
    setTitle('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-form__input"
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="todo-form__btn">Add</button>
    </form>
  )
}

import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './styles.css'

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, completed: false },
    ])
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div className="app">
      <h1 className="app__title">React To-Do List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  )
}

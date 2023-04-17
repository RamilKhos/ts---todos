import { useCallback, useEffect, useState } from 'react'
import { Todo, TodoResponse, UseTodos } from '../types/types'

const url: string = 'https://dummyjson.com/todos?limit=5&skip=10'



export const useTodos = (): UseTodos => {
  const [todos, setTodos] = useState <Todo[]> ([])

  useEffect(() => {
    fetches()
  }, [url])

  async function fetches () {
    try {
      const resp = await fetch(url)
      if (resp.ok) {
        const { todos }: TodoResponse = await resp.json()
        setTodos(todos)
      }
    } catch (err) {
      alert(err)
    }
  }

  const addTodo = useCallback((title: string) => {
    const addNewTodo: Todo = {
      id: Date.now(),
      todo: title,
      completed: false,
    }
    setTodos((prev) => [addNewTodo, ...prev])
  }, [])

  const changeStatusCompleted = (id: number) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    }))
  }

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const clearListTodos = useCallback(() => {
    setTodos([])
  }, [])

  return {
    todos,
    addTodo,
    changeStatusCompleted,
    deleteTodo,
    clearListTodos,
  }
}

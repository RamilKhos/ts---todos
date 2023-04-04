import React, { useState } from "react"
import { HeaderProps } from "../types/types"


export const Header: React.FC <HeaderProps> = React.memo(({ addTodo }) => {
  const [input, setInput] = useState<string>('')

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const addBtnHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input) {
      addTodo(input)
      setInput('')
    }
  }

  return (
    <div className="pt-5">
      <form onSubmit={addBtnHandler} className="d-flex flex-column align-items-center">
        <div className="mb-3">
          <input value={input} className="form-control" onChange={changeHandler} placeholder="add todo..." />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  )
})
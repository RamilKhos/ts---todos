import React, { useState } from "react"
import { HeaderProps } from "../types/types"
import Button from '@mui/material/Button';
import { CssTextField } from "../../utils/utils";

export const Header: React.FC <HeaderProps> = React.memo(({ addTodo }) => {
  const [input, setInput] = useState<string>('')

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const addBtnHandler = (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
      if (input) {
        addTodo(input)
        setInput('')
    }
  }

  return (
    <header className="header">
        <h3 className="header__title">todos</h3>
        <div className="d-flex justify-content-center align-items-center">
            <CssTextField 
                id="custom-css-outlined-input" 
                label="Add todo" 
                size="small" 
                variant="outlined"
                value={input}
                onChange={changeHandler}
            />
            <Button onClick={(e) => addBtnHandler(e)} variant="contained" sx={{marginLeft: 1, opacity: .8}}>Add</Button>
        </div>
    </header>
  )
})                     
import React from 'react'
import { FooterProps } from '../types/types'

export const Footer: React.FC<FooterProps> = React.memo(({ clearListTodos }) => (
  <div className="w-75 mx-auto d-flex justify-content-center align-items-center">
    <button type="button" className="btn btn-warning" onClick={clearListTodos}>Clear list</button>
  </div>
))

import React from 'react'
import { FooterProps } from '../types/types'
import Button from '@mui/material/Button';

export const Footer: React.FC<FooterProps> = React.memo(({ clearListTodos }) => (
  <footer className="footer">
    <Button onClick={clearListTodos} variant="contained">Clear list</Button>
  </footer>
))

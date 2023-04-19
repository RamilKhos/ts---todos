import React from 'react'
import { FooterProps } from '../types/types'
import { CssButton } from '../../utils/utils';

export const Footer: React.FC<FooterProps> = React.memo(({ clearListTodos }) => (
  <footer className="footer">
    <CssButton onClick={clearListTodos} variant="contained">Clear list</CssButton>
  </footer>
))

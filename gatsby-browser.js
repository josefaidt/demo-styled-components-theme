import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  main: '#c6797e',
}
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)

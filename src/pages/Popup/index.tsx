import './index.css'

import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import React, { useMemo } from 'react'
import { render } from 'react-dom'

import { themeOptions } from '../../data'
import Popup from './Popup'

const App: React.FC = () => {
  const theme = useMemo<Theme>(() => createMuiTheme(themeOptions), [])
  return (
    <ThemeProvider theme={theme}>
      <Popup/>
    </ThemeProvider>
  )
}

render(<App/>, window.document.querySelector('#app-container'))

if (module.hot) module.hot.accept()

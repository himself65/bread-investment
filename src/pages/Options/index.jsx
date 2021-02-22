import './index.css'

import React from 'react'
import { render } from 'react-dom'

import Options from './Options'

render(
  <Options title={'settings'} />,
  window.document.querySelector('#app-container')
)

if (module.hot) module.hot.accept()

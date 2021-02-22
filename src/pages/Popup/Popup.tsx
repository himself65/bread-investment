import './Popup.css'

import { Paper } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'

import FundsTable from '../../components/FundsTable'
import IndexFundsGrid from '../../components/IndexFundsGrid'

const Popup: React.FC = () => {
  return (
    <Paper className='App'>
      <CssBaseline/>
      <IndexFundsGrid/>
      <FundsTable funds={[]}/>
    </Paper>
  )
}

export default Popup

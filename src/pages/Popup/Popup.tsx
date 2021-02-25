import './Popup.css'

import {
  alpha,
  AppBar, Container, makeStyles,
  Paper,
  Toolbar, Typography
} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { useLocalObservable } from 'mobx-react'
import React from 'react'
import { useAsync, useList, useUnmount } from 'react-use'

import { getFunds, getIndexFunds, getSearchFund } from '../../api'
import IndexFundsGrid from '../../components/IndexFundsGrid'
import FundsTable from '../../components/InvestmentTable'
import Search from '../../components/Search'
import { marketIndexes } from '../../data'
import { createUserSettings } from '../../store'
import { Index, Investment } from '../../type'
import { initUserSettings, saveUserSettings } from '../../util'

const useStyles = makeStyles(theme => ({
  searchBar: {
    marginLeft: '1rem',
    position: 'relative',
    backgroundColor: alpha(theme.palette.common.white, 0.55),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.65)
    }
  }
}))

const MarketIndexes: React.FC = () => {
  const [indexes, { set: setIndexes }] = useList<Index>([])
  useAsync(async () => {
    const index = await getIndexFunds(marketIndexes.map(index => index.id))
    setIndexes(index)
  }, [])
  return (
    <React.Fragment>
      <IndexFundsGrid indexes={indexes}/>
    </React.Fragment>
  )
}

const Popup: React.FC = () => {
  const classes = useStyles()
  const userSettings = useLocalObservable(createUserSettings)
  const [investments, { set: setInvestments }] = useList<Investment>([])
  useAsync(async () => {
    const products = [] as Investment[]
    await initUserSettings(userSettings)
    // load fund list
    const funds = await getFunds(userSettings.selectedProductIDs, userSettings.userID)
    products.push(...funds)
    setInvestments(products)

    // load stock list
    // todo
  }, [userSettings])

  useUnmount(async () => {
    await saveUserSettings(userSettings)
  })

  return (
    <Paper classes={{ root: 'App' }}>
      <CssBaseline/>
      <AppBar>
        <Toolbar>
          <Typography>
            基金助手
          </Typography>
          <div className={classes.searchBar}>
            <Search onSearch={getSearchFund}/>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <Container>
        <MarketIndexes/>
        <FundsTable investments={investments}/>
      </Container>
    </Paper>
  )
}

export default Popup

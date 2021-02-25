import './Popup.css'

import { Paper } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { useLocalStore } from 'mobx-react'
import React from 'react'
import { useAsync, useList } from 'react-use'

import { getFunds, getIndexFunds } from '../../api'
import FundsTable from '../../components/FinancialProductTable'
import IndexFundsGrid from '../../components/IndexFundsGrid'
import { marketIndexes } from '../../data'
import { createUserSettings } from '../../store'
import { FinancialProduct, Index } from '../../type'
import { initUserSettings } from '../../util'

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
  const userSettings = useLocalStore(createUserSettings)
  const [products, { set: setProducts }] = useList<FinancialProduct>([])
  useAsync(async () => {
    const products = [] as FinancialProduct[]
    await initUserSettings(userSettings)
    // load fund list
    const funds = await getFunds(userSettings.selectedProductIDs, userSettings.userID)
    products.push(...funds)
    setProducts(products)

    // load stock list
    // todo
  }, [userSettings])
  return (
    <Paper className='App'>
      <CssBaseline/>
      <MarketIndexes/>
      <FundsTable products={products}/>
    </Paper>
  )
}

export default Popup

import {
  GridList,
  GridListTile,
  ListSubheader
} from '@material-ui/core'
import React from 'react'
import { useAsync, useList } from 'react-use'

import { getIndexFunds } from '../../api'
import { indexFunds } from '../../data'
import IndexFundCard from '../IndexFundCard'

export type IndexFund = {
  id: string
  name: string
  total: number
  growthRate: number
  growthPrice: number
}

const IndexFundsGrid: React.FC = () => {
  const [indexFundList, { set: setIndexFundList }] = useList<IndexFund>([])
  useAsync(async () => {
    const index = await getIndexFunds(indexFunds.map(fund => fund.id))
    setIndexFundList(index)
  }, [])
  return (
    <GridList cellHeight={70} cols={4}>
      <GridListTile style={{ height: 'auto', paddingBottom: 0 }} cols={4}>
        <ListSubheader component='div'>
          行情看版
        </ListSubheader>
      </GridListTile>
      {indexFundList.map(indexFund => {
        return (
          <GridListTile key={indexFund.id} cols={1}>
            <IndexFundCard indexFund={indexFund} />
          </GridListTile>
        )
      })}
    </GridList>
  )
}

export default IndexFundsGrid

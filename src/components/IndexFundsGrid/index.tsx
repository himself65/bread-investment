import {
  GridList,
  GridListTile,
  ListSubheader
} from '@material-ui/core'
import React from 'react'

import { Index } from '../../type'
import IndexFundCard from '../IndexFundCard'

export type IndexFundsGridProps = {
  indexes: Index[]
}

const IndexFundsGrid: React.FC<IndexFundsGridProps> = ({ indexes }) => {
  return (
    <GridList cellHeight={70} cols={4}>
      <GridListTile style={{ height: 'auto', paddingBottom: 0 }} cols={4}>
        <ListSubheader component='div'>
          行情看版
        </ListSubheader>
      </GridListTile>
      {indexes.map(index => {
        return (
          <GridListTile key={index.id} cols={1}>
            <IndexFundCard index={index} />
          </GridListTile>
        )
      })}
    </GridList>
  )
}

export default IndexFundsGrid

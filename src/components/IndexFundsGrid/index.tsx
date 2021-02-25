import {
  Grid,
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
    <Grid container justifyContent='flex-start' alignItems='flex-start' spacing={2}>
      <Grid item style={{ height: 'auto', paddingBottom: 0 }} xs={12}>
        <ListSubheader component='div'>
          行情看版
        </ListSubheader>
      </Grid>
      {indexes.map(index => {
        return (
          <Grid item key={index.id} xs={3}>
            <IndexFundCard index={index}/>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default IndexFundsGrid

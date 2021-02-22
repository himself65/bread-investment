import './index.css'

import {
  Paper,
  Table,
  TableBody,
  TableCell, TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import React from 'react'

export type FundsTableProps = {
  funds: any[]
}

const FundsTable: React.FC<FundsTableProps> = ({ funds }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='a funds table'>
        <TableHead>
          <TableRow>
            <TableCell>基金名称（{funds.length}）</TableCell>
            <TableCell align='right'>估算净值</TableCell>
            <TableCell align='right'>持有额</TableCell>
            <TableCell align='right'>持有收益</TableCell>
            <TableCell align='right'>持有收益率</TableCell>
            <TableCell align='right'>涨跌幅</TableCell>
            <TableCell align='right'>估算收益</TableCell>
            <TableCell align='right'>最后更新</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            funds.map(fund => {
              return (
                <TableRow key={fund.id}>
                  <TableCell/>
                  <TableCell/>
                  <TableCell/>
                  <TableCell/>
                  <TableCell/>
                  <TableCell/>
                  <TableCell/>
                  <TableCell/>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default FundsTable

import './index.css'

import {
  Box,
  createStyles,
  Paper,
  Table,
  TableBody,
  TableCell, TableContainer,
  TableHead,
  TableRow, useTheme, withStyles
} from '@material-ui/core'
import React from 'react'

import { Investment } from '../../type'

export type InvestmentTableProps = {
  investments: Investment[]
}

const InvestmentTableCell = withStyles(theme => createStyles({
  head: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingLeft: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingRight: '4px'
  },
  body: {
    paddingLeft: '0.9rem'
  }
}))(TableCell)

const InvestmentTableRow = withStyles(theme => createStyles({

}))(TableRow)

const InvestmentTable: React.FC<InvestmentTableProps> = ({ investments }) => {
  const theme = useTheme()
  return (
    <TableContainer component={Paper}>
      <Table aria-label='a funds table'>
        <TableHead>
          <InvestmentTableRow>
            <InvestmentTableCell align='left'>基金名称（{investments.length}）</InvestmentTableCell>
            <InvestmentTableCell align='right'>估算净值</InvestmentTableCell>
            <InvestmentTableCell align='right'>持有额</InvestmentTableCell>
            <InvestmentTableCell align='right'>持有收益</InvestmentTableCell>
            <InvestmentTableCell align='right'>持有收益率</InvestmentTableCell>
            <InvestmentTableCell align='right'>涨跌幅</InvestmentTableCell>
            <InvestmentTableCell align='right'>估算收益</InvestmentTableCell>
            <InvestmentTableCell align='right'>最后更新</InvestmentTableCell>
          </InvestmentTableRow>
        </TableHead>
        <TableBody>
          {
            investments.map(investment => {
              return (
                <InvestmentTableRow key={investment.id}>
                  <InvestmentTableCell align='left'>
                    <Box
                      fontWeight={theme.typography.fontWeightMedium}
                      fontSize={theme.typography.caption.fontSize}
                    >
                      {investment.name}
                    </Box>
                  </InvestmentTableCell>
                  <InvestmentTableCell/>
                  <InvestmentTableCell/>
                  <InvestmentTableCell/>
                  <InvestmentTableCell/>
                  <InvestmentTableCell/>
                  <InvestmentTableCell/>
                  <InvestmentTableCell/>
                </InvestmentTableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default InvestmentTable

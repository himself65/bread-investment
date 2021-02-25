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

import { FinancialProduct } from '../../type'

export type FinancialProductTableProps = {
  products: FinancialProduct[]
}

const FinancialProductTableCell = withStyles(theme => createStyles({
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

const FinancialProductTableRow = withStyles(theme => createStyles({

}))(TableRow)

const FinancialProductTable: React.FC<FinancialProductTableProps> = ({ products }) => {
  const theme = useTheme()
  return (
    <TableContainer component={Paper}>
      <Table aria-label='a funds table'>
        <TableHead>
          <FinancialProductTableRow>
            <FinancialProductTableCell align='left'>基金名称（{products.length}）</FinancialProductTableCell>
            <FinancialProductTableCell align='right'>估算净值</FinancialProductTableCell>
            <FinancialProductTableCell align='right'>持有额</FinancialProductTableCell>
            <FinancialProductTableCell align='right'>持有收益</FinancialProductTableCell>
            <FinancialProductTableCell align='right'>持有收益率</FinancialProductTableCell>
            <FinancialProductTableCell align='right'>涨跌幅</FinancialProductTableCell>
            <FinancialProductTableCell align='right'>估算收益</FinancialProductTableCell>
            <FinancialProductTableCell align='right'>最后更新</FinancialProductTableCell>
          </FinancialProductTableRow>
        </TableHead>
        <TableBody>
          {
            products.map(product => {
              return (
                <FinancialProductTableRow key={product.id}>
                  <FinancialProductTableCell align='left'>
                    <Box
                      fontWeight={theme.typography.fontWeightMedium}
                      fontSize={theme.typography.caption.fontSize}
                    >
                      {product.name}
                    </Box>
                  </FinancialProductTableCell>
                  <FinancialProductTableCell/>
                  <FinancialProductTableCell/>
                  <FinancialProductTableCell/>
                  <FinancialProductTableCell/>
                  <FinancialProductTableCell/>
                  <FinancialProductTableCell/>
                  <FinancialProductTableCell/>
                </FinancialProductTableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FinancialProductTable

import {
  Box,
  Card,
  CardActionArea,
  makeStyles,
  Typography,
  useTheme
} from '@material-ui/core'
import React, { useMemo } from 'react'

import { IndexFund } from '../IndexFundsGrid'

const useStyles = makeStyles({
  card: {
    height: '100%',
    paddingLeft: '1rem'
  }
})

export type IndexFundCardProps = {
  indexFund: IndexFund
}

const IndexFundCard: React.FC<IndexFundCardProps> = ({ indexFund }) => {
  const theme = useTheme()
  const isUp = useMemo(() => indexFund.growthPrice > 0, [indexFund])
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Typography component='div'>
          <Box
            fontWeight={theme.typography.fontWeightLight}
          >
            {indexFund.name}
          </Box>
          <Box
            color={isUp ? 'red' : 'green'}
            fontSize={theme.typography.caption.fontSize}
            fontWeight={theme.typography.caption.fontWeight}
          >
            {indexFund.total}
          </Box>
          <Box
            color={isUp ? 'red' : 'green'}
            fontSize={theme.typography.caption.fontSize}
            fontWeight={theme.typography.caption.fontWeight}
          >
            {Math.abs(indexFund.growthPrice)}
            {' '}{isUp ? '+' : '-'}
            {Math.abs(indexFund.growthRate)}{'%'}
          </Box>
        </Typography>
      </CardActionArea>
    </Card>
  )
}

export default IndexFundCard

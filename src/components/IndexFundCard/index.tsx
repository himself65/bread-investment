import {
  Box,
  Card,
  CardActionArea,
  makeStyles,
  Typography,
  useTheme
} from '@material-ui/core'
import React, { useMemo } from 'react'

import { Index } from '../../type'
import { fixedNumber } from '../../util'

const useStyles = makeStyles({
  card: {
    height: '100%'
  },
  body: {
    padding: '1rem'
  }
})

export type IndexFundCardProps = {
  index: Index
}

const IndexFundCard: React.FC<IndexFundCardProps> = ({ index }) => {
  const theme = useTheme()
  const color = useMemo(() => (index.growth.price > 0) ? 'red' : 'green', [index.growth.price])
  const classes = useStyles()
  return (
    <Card variant='outlined' className={classes.card}>
      <CardActionArea className={classes.body}>
        <Typography component='div'>
          <Box
            fontWeight={theme.typography.fontWeightLight}
          >
            {index.name}
          </Box>
          <Box
            color={color}
            fontSize={theme.typography.caption.fontSize}
            fontWeight={theme.typography.caption.fontWeight}
          >
            {index.price}
          </Box>
          <Box
            color={color}
            fontSize={theme.typography.caption.fontSize}
            fontWeight={theme.typography.caption.fontWeight}
          >
            {Math.abs(index.growth.price)}
            {' '}
            {fixedNumber(index.growth.rate)}{'%'}
          </Box>
        </Typography>
      </CardActionArea>
    </Card>
  )
}

export default IndexFundCard

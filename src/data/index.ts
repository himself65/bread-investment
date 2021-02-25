import type { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

export const marketIndexes: {id: string; name: string}[] = [
  {
    id: '1.000001',
    name: '上证指数'
  },
  {
    id: '1.000300',
    name: '沪深300'
  },
  {
    id: '0.399001',
    name: '深证成指'
  },
  {
    id: '1.000688',
    name: '科创50'
  },
  {
    id: '0.399006',
    name: '创业板指'
  },
  {
    id: '0.399005',
    name: '中小板指'
  },
  {
    id: '100.HSI',
    name: '恒生指数'
  },
  {
    id: '100.DJIA',
    name: '道琼斯'
  },
  {
    id: '100.NDX',
    name: '纳斯达克'
  },
  {
    id: '100.SPX',
    name: '标普500'
  }
]

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#082850'
    }
  }
}

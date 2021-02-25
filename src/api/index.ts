import Axios from 'axios'

import { Fund, Index, Investment, Market } from '../type'

const axios = Axios.create()
if (process.env.NODE_ENV === 'development') {
  axios.interceptors.response.use(response => {
    console.log('Axios response: ', response)
    return response
  })
}

const getTime = () => new Date().getTime()

export function getIndexFunds (funds: string[]): Promise<Index[]> {
  const targetUrl = `https://push2.eastmoney.com/api/qt/ulist.np/get?fltt=2&fields=f2,f3,f4,f12,f13,f14&secids=${funds.join(',')}&_=${getTime()}`
  return axios.get(targetUrl).then(response => {
    return (response.data.data.diff as {f2: number; f3:number; f4:number; f12 :string; f13:number; f14: string}[]).map<Index>(diff => {
      return {
        name: diff.f14,
        id: diff.f12,
        market: 'UNKNOWN',
        price: diff.f2,
        growth: {
          rate: diff.f3,
          price: diff.f4
        }
      }
    })
  })
}

export function getFunds (funds: string[], id: string): Promise<Fund[]> {
  const targetUrl = `https://fundmobapi.eastmoney.com/FundMNewApi/FundMNFInfo?pageIndex=1&pageSize=200&plat=Android&appType=ttjj&product=EFund&Version=1&deviceid=${id}&Fcodes=${funds.join(',')}`
  console.log('send: ', targetUrl)
  return axios.get(targetUrl).then(response => {
    const data = response.data.Datas as any[]
    return data.map(fund => ({
      name: fund.SHORTNAME,
      id: fund.FCODE,
      market: 'CN',
      rate: fund.CHANGERATIO
    }))
  })
}

export type ChartData<Product = Investment, Data = string[]> = {
  data: Data
  product: Product
}

export function getIndexFundData (code: number | string): Promise<ChartData<Index>> {
  const targetUrl = `https://push2.eastmoney.com/api/qt/stock/trends2/get?secid=${code}&fields1=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13&fields2=f51,f53,f56,f58&iscr=0&iscca=0&ndays=1&forcect=1`
  return axios.get(targetUrl).then(response => {
    const data = response.data
    const fund = data.data
    return {
      data: fund.trends as string[],
      product: {
        name: fund.name,
        id: fund.code,
        market: fund.market === 1 ? 'CN' : 'UNKNOWN', // fixme: what is the full types of this
        price: fund.preClose,
        growth: {
          price: 0,
          rate: 0
        }
      }
    }
  })
}

export function getFundData (code: number | string): Promise<ChartData<Fund>> {
  const targetUrl = `https://fundmobapi.eastmoney.com/FundMApi/FundVarietieValuationDetail.ashx?FCODE=${code}&deviceid=Wap&plat=Wap&product=EFund&version=2.0.0&_=${getTime()}`;
  return axios.get(targetUrl).then(response => {
    const data = response.data
    const fund = data.Expansion
    return {
      data: data.Datas as string[],
      product: {
        name: fund.SHORTNAME,
        id: fund.FCODE,
        market: fund.Market as Market,
        rate: fund.rate
      }
    }
  })
}

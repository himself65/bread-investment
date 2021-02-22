import Axios from 'axios'

import { IndexFund } from '../components/IndexFundsGrid'

const axios = Axios.create()
if (process.env.NODE_ENV === 'development') {
  axios.interceptors.response.use(response => {
    console.log('Axios response: ', response)
    return response
  })
}

const getTime = () => new Date().getTime()

export function getIndexFunds (funds: string[]): Promise<IndexFund[]> {
  const targetUrl = `https://push2.eastmoney.com/api/qt/ulist.np/get?fltt=2&fields=f2,f3,f4,f12,f13,f14&secids=${funds.join(',')}&_=${getTime()}`
  return axios.get(targetUrl).then(response => {
    return (response.data.data.diff as {f2: number; f3:number; f4:number; f12 :string; f13:number; f14: string}[]).map<IndexFund>(diff => {
      return {
        total: diff.f2,
        growthRate: diff.f3,
        growthPrice: diff.f4,
        name: diff.f14,
        id: diff.f12
      }
    })
  })
}

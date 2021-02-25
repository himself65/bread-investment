export type Market = 'CN' | 'EN' | 'UNKNOWN'

export type InvestmentCode = string

export type Investment = {
  name: string
  id: InvestmentCode
  market: Market
}

export interface Index extends Investment {
  price: number
  growth: {
    rate: number
    price: number
  }
}

export interface Fund extends Investment {
  rate: number
}

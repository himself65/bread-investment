export type Market = 'CN' | 'EN' | 'UNKNOWN'

export type FinancialProductCode = string

export type FinancialProduct = {
  name: string
  id: FinancialProductCode
  market: Market
}

export interface Index extends FinancialProduct {
  price: number
  growth: {
    rate: number
    price: number
  }
}

export interface Fund extends FinancialProduct {
  rate: number
}

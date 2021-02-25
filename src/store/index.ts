import { InvestmentCode } from '../type'

export const createUserSettings = () => ({
  userID: '',
  selectedProductIDs: ((process.env.NODE_ENV === 'development') ? ['161725', '005827', '003095'] : []) as InvestmentCode[]
})

export type UserSetting = ReturnType<typeof createUserSettings>

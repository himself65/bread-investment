import { FinancialProductCode } from '../type'

export const createUserSettings = () => ({
  userID: '',
  selectedProductIDs: ((process.env.NODE_ENV === 'development') ? ['161725', '005827', '003095'] : []) as FinancialProductCode[]
})

export type UserSetting = ReturnType<typeof createUserSettings>

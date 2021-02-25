export const createUserSettings = () => ({
  userID: '',
  selectedProductIDs: [] as string[]
})

export type UserSetting = ReturnType<typeof createUserSettings>

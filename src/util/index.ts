import { UserSetting } from '../store'

export async function initUserSettings (store: UserSetting): Promise<void> {
  return new Promise(resolve => {
    chrome.storage.sync.get([
      'userID'
    ], res => {
      store.userID = res.userID
      resolve()
    })
  })
}

export const saveUserSettings = (store: Partial<UserSetting>): Promise<void> => {
  return new Promise(resolve => {
    chrome.storage.sync.set(store, () => {
      resolve()
    })
  })
}

export const fixedNumber = (num: number | string): string => {
  if (typeof num === 'number') {
    num = Number(num)
  }
  return num >= 0 ? `+${num}` : `-${num}`
}

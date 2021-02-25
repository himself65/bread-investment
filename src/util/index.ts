import { toJS } from 'mobx'

import { UserSetting } from '../store'

export async function initUserSettings (store: UserSetting): Promise<void> {
  return new Promise(resolve => {
    chrome.storage.sync.get([
      'userID',
      'selectedProductIDs'
    ], (res: Record<string, unknown>) => {
      if (res.userID && typeof res.userID === 'string') {
        store.userID = res.userID
      }
      if (res.selectedProductIDs && Array.isArray(res.selectedProductIDs)) {
        store.selectedProductIDs = res.selectedProductIDs
      }
      if (process.env.NODE_ENV === 'development') {
        console.log('store init: ', res)
      }
      resolve()
    })
  })
}

export const saveUserSettings = (store: Partial<UserSetting>): Promise<void> => {
  return new Promise(resolve => {
    const save = toJS(store)
    chrome.storage.sync.set(save, () => {
      if (process.env.NODE_ENV === 'development') {
        console.log('store saved: ', save)
      }
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

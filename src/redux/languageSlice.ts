import { createSlice } from '@reduxjs/toolkit'

type LanguageType = 'en' | 'de'

export interface LanguageState {
  code: LanguageType
}

const initialState: LanguageState = {
  code: 'en'
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguageState: (state) => {
      state.code = state.code === 'en' ? 'de' : 'en'
    }
  }
})

export const { changeLanguageState } = languageSlice.actions
export default languageSlice.reducer

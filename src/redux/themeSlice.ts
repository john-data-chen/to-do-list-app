import { createSlice } from '@reduxjs/toolkit'

type Theme = 'dark' | 'light'

export interface ThemeState {
  mode: Theme
}

const initialState: ThemeState = {
  mode: 'dark'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
    }
  }
})

export const { switchTheme } = themeSlice.actions
export default themeSlice.reducer

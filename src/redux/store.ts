import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { listenerMiddleware } from './localStorageMiddleware'
import themeReducer, { ThemeState } from './themeSlice'
import languageReducer, { LanguageState } from './languageSlice'
import todoReducer from './todoSlice'
import { DEMO_TASKS } from '../constants/constants'

const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  todos: todoReducer
})

const getInitialState = () => {
  const storedTheme = localStorage.getItem('theme')
  const storedLanguage = localStorage.getItem('i18nextLng')
  const storedTodos = localStorage.getItem('todos')

  return {
    theme: {
      mode: storedTheme ? (storedTheme as ThemeState['mode']) : 'dark'
    },
    language: {
      code: (storedLanguage as LanguageState['code']) || 'en'
    },
    todos: {
      todos: (() => {
        try {
          return storedTodos ? JSON.parse(storedTodos).todos : DEMO_TASKS
        } catch (error) {
          console.error('Failed to parse todos from localStorage:', error)
          return DEMO_TASKS
        }
      })()
    }
  }
}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: getInitialState(),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().prepend(listenerMiddleware.middleware)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

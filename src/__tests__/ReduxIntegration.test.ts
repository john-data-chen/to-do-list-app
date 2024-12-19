import { store } from '../redux/store'
import { addTodo, toggleComplete, deleteTodo, editTodo } from '../redux/todoSlice'
import { switchTheme } from '../redux/themeSlice'
import { changeLanguageState } from '../redux/languageSlice'
import { DEMO_TASKS } from '../constants/constants'

describe('Redux Store Integration Tests', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe('Todo Operations', () => {
    it('should handle adding, editing, completing and deleting todos', () => {
      // Add todo
      store.dispatch(
        addTodo({
          text: 'Test Todo',
          dueDate: '2024-01-01'
        })
      )

      let state = store.getState()
      expect(state.todos.todos).toHaveLength(DEMO_TASKS.length + 1)
      expect(state.todos.todos.at(-1)!.text).toBe('Test Todo')

      const todoId = state.todos.todos.at(-1)!.id

      // Edit todo
      store.dispatch(
        editTodo({
          id: todoId,
          text: 'Updated Todo',
          dueDate: '2024-01-02'
        })
      )

      state = store.getState()
      expect(state.todos.todos.at(-1)!.text).toBe('Updated Todo')
      expect(state.todos.todos.at(-1)!.dueDate).toBe('2024-01-02')

      // Toggle complete
      store.dispatch(toggleComplete(todoId))

      state = store.getState()
      expect(state.todos.todos.at(-1)!.completed).toBe(true)

      // Delete todo
      store.dispatch(deleteTodo(todoId))

      state = store.getState()
      expect(state.todos.todos).toHaveLength(DEMO_TASKS.length)
    })
  })

  describe('Theme Operations', () => {
    it('should handle theme switching and persist to localStorage', () => {
      // Initial state should be dark
      let state = store.getState()
      expect(state.theme.mode).toBe('dark')

      // Switch theme
      store.dispatch(switchTheme())

      state = store.getState()
      expect(state.theme.mode).toBe('light')
      expect(localStorage.getItem('theme')).toBe('light')

      // Switch back
      store.dispatch(switchTheme())

      state = store.getState()
      expect(state.theme.mode).toBe('dark')
      expect(localStorage.getItem('theme')).toBe('dark')
    })
  })

  describe('Language Operations', () => {
    it('should handle language switching and persist to localStorage', () => {
      // Initial state should be English
      let state = store.getState()
      expect(state.language.code).toBe('en')

      // Switch language
      store.dispatch(changeLanguageState())

      state = store.getState()
      expect(state.language.code).toBe('de')
      expect(localStorage.getItem('i18nextLng')).toBe('de')

      // Switch back
      store.dispatch(changeLanguageState())

      state = store.getState()
      expect(state.language.code).toBe('en')
      expect(localStorage.getItem('i18nextLng')).toBe('en')
    })
  })
  localStorage.clear()
})

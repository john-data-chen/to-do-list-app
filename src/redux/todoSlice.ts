import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Todo from '../type/Todo'
interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string; dueDate: string | null }>) => {
      state.todos.push({
        id: Date.now().toString(),
        text: action.payload.text,
        dueDate: action.payload.dueDate,
        completed: false
      })
    },
    handleDragEnd: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      )
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },

    editTodo: (
      state,
      action: PayloadAction<{
        id: string
        text: string
        dueDate: string | null
      }>
    ) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text, dueDate: action.payload.dueDate }
          : todo
      )
    }
  }
})

export const { addTodo, handleDragEnd, toggleComplete, deleteTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer

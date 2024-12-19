import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from '../component/TodoList'
import { DEMO_TASKS } from '../constants/constants'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key
  })
}))

describe('TodoList', () => {
  const mockTodos = DEMO_TASKS
  const mockToggleComplete = jest.fn()
  const mockDeleteTodo = jest.fn()
  const mockHandleEditTodo = jest.fn()

  test('test_todo_list_renders_all_items', () => {
    render(
      <TodoList
        todos={mockTodos}
        toggleComplete={mockToggleComplete}
        deleteTodo={mockDeleteTodo}
        handleEditTodo={mockHandleEditTodo}
      />
    )

    const todoList = screen.getByTestId('todoList')
    expect(todoList).toBeInTheDocument()
    expect(todoList.children).toHaveLength(mockTodos.length)
  })

  test('test_todo_list_passes_correct_props', () => {
    const { container } = render(
      <TodoList
        todos={mockTodos}
        toggleComplete={mockToggleComplete}
        deleteTodo={mockDeleteTodo}
        handleEditTodo={mockHandleEditTodo}
      />
    )

    const todoCards = container.getElementsByClassName('todoList')[0].children
    expect(todoCards).toHaveLength(mockTodos.length)

    expect(todoCards[0]).toHaveTextContent(mockTodos[0].text)
  })
})

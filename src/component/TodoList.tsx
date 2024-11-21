import TodoCard from "./TodoCard";
import Todo from "../type/Todo";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, toggleComplete, deleteTodo }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;

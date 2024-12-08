import styled from "styled-components";
import Todo from "../type/Todo";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import { motion } from "motion/react";

// styled components
const TodoItem = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  span {
    text-align: left;
  }

  &:hover {
    background-color: #e6f7ff;
  }
`;

const Text = styled.span<{ $completed: boolean }>`
  flex: 1;
  font-size: 1.2rem;
  color: ${(props) => (props.$completed ? "#b0b0b0" : "#333")};
  text-decoration: ${(props) => (props.$completed ? "line-through" : "none")};
`;

const CompleteButton = styled(motion.button)<{
  $completed: boolean;
}>`
  background-color: ${(props) => (props.$completed ? "#52c41a" : "#1890ff")};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-left: 10px;

  &:hover {
    background-color: ${(props) => (props.$completed ? "#52c41a" : "#096dd9")};
  }
`;

const DeleteButton = styled(motion.button)`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7875;
  }
`;

const EditButton = styled(motion.button)`
  background-color: #512da8;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6f42c1;
  }
`;

interface TodoCardProps {
  todo: Todo;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  handleEditTodo: (id: string, text: string, dueDate: Date | null) => void;
}

const TodoCard = ({
  todo,
  toggleComplete,
  deleteTodo,
  handleEditTodo,
}: TodoCardProps) => {
  const [isEditingOpen, setIsEditingOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <TodoItem key={todo.id} whileHover={{ scale: 1.1 }}>
      <Text $completed={todo.completed}>{todo.text}</Text>
      <Text $completed={todo.completed}>
        {t("todo-card.due-date")}
        {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : "None"}
      </Text>

      <CompleteButton
        $completed={todo.completed}
        onClick={() => toggleComplete(todo.id)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {todo.completed ? t("todo-card.completed") : t("todo-card.complete")}
      </CompleteButton>
      <EditButton
        onClick={() => setIsEditingOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {t("todo-card.edit")}
      </EditButton>
      {isEditingOpen && (
        <EditTodoForm
          todo={todo}
          editTodo={handleEditTodo}
          closeEditForm={() => setIsEditingOpen(false)}
        />
      )}
      <DeleteButton
        onClick={() => deleteTodo(todo.id)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {t("todo-card.delete")}
      </DeleteButton>
    </TodoItem>
  );
};

export default TodoCard;

import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import Todo from "./type/Todo";
import { lightTheme, darkTheme, GlobalStyles } from "./theme/ThemeSets";
import { LANGUAGES } from "./constants/constants";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  editTodo,
  deleteTodo,
  handleDragEnd,
  toggleComplete,
} from "./redux/todoSlice";

import ThemeToggle from "./component/ThemeToggle";

interface todosSelectorProps {
  todos: Todo[];
}

interface themeSelectorProps {
  theme: "dark" | "light";
}

function App() {
  const todosSelector = useSelector(
    (state: { todos: todosSelectorProps }) => state.todos
  );
  const themeSelector = useSelector(
    (state: { theme: themeSelectorProps }) => state.theme
  );
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("i18nextLng") || "en"
  );

  const handleAddTodo = (text: string, dueDate: Date | null) => {
    const dueDateStr = dueDate ? dueDate.toISOString() : null;
    dispatch(addTodo({ text, dueDate: dueDateStr }));
  };

  const onDragEnd = (event: DropResult) => {
    const { source, destination } = event;
    if (!destination) return;
    const newTodos = [...todosSelector.todos];
    const [removed] = newTodos.splice(source.index, 1);
    newTodos.splice(destination.index, 0, removed);
    dispatch(handleDragEnd(newTodos));
  };

  const handleToggleComplete = (id: string) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id: string, text: string, dueDate: Date | null) => {
    const dueDateStr = dueDate ? dueDate.toISOString() : "";
    dispatch(editTodo({ id, text, dueDate: dueDateStr }));
  };

  const { i18n, t } = useTranslation();
  const onChangeLang = (lang_code: string) => {
    i18n.changeLanguage(lang_code);
    setSelectedLanguage(lang_code);
    localStorage.setItem("i18nextLng", lang_code);
  };
  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("i18nextLng", selectedLanguage);
  }, [i18n, selectedLanguage]);

  return (
    <ThemeProvider
      theme={themeSelector.theme === "dark" ? darkTheme : lightTheme}
    >
      <GlobalStyles />
      <div className="appContainer">
        <div className="topContainer">
          <ThemeToggle />
          <select
            className="languageSelector"
            defaultValue={selectedLanguage}
            onChange={(e) => onChangeLang(e.target.value)}
          >
            {LANGUAGES.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
        <h1 className="appTitle">{t("app-title")}</h1>
        <TodoForm addTodo={handleAddTodo} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="drop-id">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {todosSelector.todos.map((item: Todo, i: number) => (
                  <div key={item.id}>
                    <Draggable draggableId={item.id} index={i} key={item.id}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {
                            <TodoList
                              todos={[item]}
                              key={item.id}
                              toggleComplete={handleToggleComplete}
                              deleteTodo={handleDeleteTodo}
                              handleEditTodo={handleEditTodo}
                            />
                          }
                        </div>
                      )}
                    </Draggable>
                  </div>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </ThemeProvider>
  );
}

export default App;

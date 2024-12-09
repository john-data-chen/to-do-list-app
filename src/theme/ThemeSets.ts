import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.boxShadow};
    font-size: 16px;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    // theme switching transition
    transition: background-color 1s ease;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
    padding: 1rem;
    @media (min-width: 500px) {
      padding: 1rem;
    }
    @media (min-width: 768px) {
      padding: 1.5rem;
    }
    @media (min-width: 1024px) {
      padding: 2rem;
    }
  }

  h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  }

  select {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 1rem;
  }

  p {
  font-size: 1rem;
  margin-top: 10px;
  }

  .themeSwitch {
  background-color: ${({ theme }) => theme.buttonBackground};
  }

  .addTodoForm {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  }

  .addTodoInput {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 40px;
  font-size: 1rem;
  }

  .addTaskButton {
  background-color: #1890ff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #096dd9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  }

  .AddTaskDatePicker {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 1rem;
}

.EditTaskDatePicker {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}
`;

export const lightTheme = {
  body: "#f7f7f7",
  text: "#333",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
  buttonBackground: "#FFDF00",
};

export const darkTheme = {
  body: "#333",
  text: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
  buttonBackground: "#FFF44F",
};

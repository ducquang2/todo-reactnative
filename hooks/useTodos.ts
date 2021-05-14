import { useState, useEffect } from "react";

const getTodoList = () => {
  const todoListLocal = localStorage.getItem("todo-list");
  return todoListLocal ? JSON.parse(todoListLocal) : [];
};

const useTodos = (initialTodos = getTodoList()) => {
  const [todos, setTodos] = useState(initialTodos);
  useEffect(() => { 
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    addTodo: (text: any) => {
      setTodos([
        ...todos,
        {
          text,
          id: todos.reduce((maxId: any, todo: any) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          removed: false,
        },
      ]);
    },
    toggleTodo: (id: any) => {
      setTodos(
        todos.map((todo: any) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    prepareRemove: (id: any) => {
      setTodos(
        todos.map((todo: any) =>
          todo.id === id ? { ...todo, removed: true } : todo
        )
      );
    },
    removeTodo: (_: any) => {
      setTodos(todos.filter((todo: any) => !todo.removed));
    },
  };
};

export default useTodos;
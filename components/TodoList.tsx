import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
const TodoList = (todos:any, onToggleTodo:any, onPrepareRemove:any, onRemoveTodo:any) =>{
  return (
  <div className="todo-container">
    <ul className="todo-list">
      {todos.map((todo:any) => (
        <Todo 
          key={`todo ${todo.id}`}
          {...todo}
          onToggleTodo={() => onToggleTodo(todo.id)}
          onPrepareRemove={() => onPrepareRemove(todo.id)}
          onRemoveTodo={() => onRemoveTodo(todo.id)}
        />
      ))}
    </ul>
  </div>
)
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      removed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onPrepareRemove: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;
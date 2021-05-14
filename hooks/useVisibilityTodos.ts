import { VisibilityFilters } from '../constants/Filter'
import { useState, useEffect} from "react";

const useVisibilityTodos = (todos= [], filterBy = VisibilityFilters.SHOW_ALL ) => {
  const [visibilityTodos, setVisibilityTodos] = useState(todos)
  useEffect(() => {
    switch (filterBy) { 
      case VisibilityFilters.SHOW_ALL:
        setVisibilityTodos(todos);
        break
      case VisibilityFilters.SHOW_COMPLETED:
        setVisibilityTodos(todos.filter((t: any) => t.completed));
        break
      case VisibilityFilters.SHOW_UNCOMPLETED:
        setVisibilityTodos(todos.filter((t: any) => !t.completed));
        break
      default:
        throw new Error("Unknown filter: " + filterBy);
    }
  },[filterBy, todos]) 
    return {
      visibilityTodos,
    }
}

export default useVisibilityTodos;
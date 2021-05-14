// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
// import Navigation from './navigation';

// export default function App() {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();

//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <SafeAreaProvider>
//         <Navigation colorScheme={colorScheme} />
//         <StatusBar />
//       </SafeAreaProvider>
//     );
//   }
// }
import React from "react";
import TodoList from "./components/TodoList";
import Filter from "./components/FilterList";
import AddTodo from "./components/AddTodo";
import useFilterBy from './hooks/useFilterBy';
import useTodos from './hooks/useTodos';
import useVisibilityTodos from './hooks/useVisibilityTodos';


function App() {
  
  const { filterBy, changeFilter } = useFilterBy();
  const { todos, addTodo, toggleTodo, prepareRemove, removeTodo } = useTodos();
  const { visibilityTodos } = useVisibilityTodos(todos, filterBy);

  return ( 
    <>
      <div className="action-bar">
        <AddTodo onAddTodo={addTodo} />
        <Filter onChangeFilter={changeFilter} />
      </div>
      <TodoList
        todos={visibilityTodos}
        onToggleTodo={toggleTodo}
        onPrepareRemove={prepareRemove}
        onRemoveTodo={removeTodo}
      />
    </>
  );
}

export default App;
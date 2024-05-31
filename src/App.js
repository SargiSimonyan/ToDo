// import {useState} from "react";
// import TodoForm from "./TodoForm";
// import TodoList from "./TodoListt";
// import TodoFooter from "./TodoFooter";
// import './App.css';
// function App() {
// const [todos, setTodos] = useState([
//   {
//     id: Math.random(),
//     text: "Learn React",
//     isCompleted: false
//   },
//   {
//     id: Math.random(),
//     text: "Learn Dart",
//     isCompleted: false
//   },
//   {
//     id: Math.random(),
//     text: "Learn Swift",
//     isCompleted: false
//   }
// ]);
//   return (
//     <div className="App">
//       <TodoForm  onAdd = {(text)=>{
        
//           setTodos([
//             ...todos,
//             {
//               id: Math.random(),
//               text: text,
//               isCompleted: false
//             }
//           ]);
        
//       }}/>
//       <TodoList todos = {todos}/>
//       <TodoFooter todos = {todos} onClear={()=>{
//         setTodos(todos.filter((todo)=>!todo.isCompleted))
//       }
//       }/>
//     </div>
//   );
// }

// export default App;


import {useState, useReducer} from "react";
import './App.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

function reducer(state, action) {
  if(action.type === "add") {
    return [
      ...state,
      {
        id: Math.random(),
        text: action.payload.text,
        isCompleted: false
      }
    ];
  } else if(action.type === "delete") {
    return state.filter((t) => t.id !== action.payload.id);
  } else if(action.type === "clear-completed") {
    return state.filter((todo) => !todo.isCompleted);
  } else if(action.type === "update") {
    return state.map((todo) => {
      if(todo.id === action.payload.updatedTodo.id) {
        return action.payload.updatedTodo;
      }
      return todo;
    });
  }
}

function App() {

  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random(),
      text: "No need to lie",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "No need to believe",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Don't be afraid",
      isCompleted: false
    }
  ]);
  

  return (
    <div className="App">
      <header>
          <h1 className="todoAppTitle">today's todos</h1>
        </header>
        
      <TodoForm onAdd={(text) => {
        dispatch({
          type: 'add',
          payload: {
            text: text
          }
        });
      }}/>
      <TodoList 
        todos={todos} 
        onDelete={(todo) => {
          dispatch({
            type: "delete",
            payload: {
              id: todo.id
            }
          });
        }}
        onChange={(newTodo) => {
          dispatch({
            type: "update",
            payload: {
              updatedTodo: newTodo
            }
          });
        }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        dispatch({
          type: "clear-completed"
        });
      }}/>
    </div>
  );
}

export default App;

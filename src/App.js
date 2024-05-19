import {useState} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoListt";
import TodoFooter from "./TodoFooter";
import './App.css';
function App() {
const [todos, setTodos] = useState([
  {
    id: Math.random(),
    text: "Learn React",
    isCompleted: false
  },
  {
    id: Math.random(),
    text: "Learn Dart",
    isCompleted: false
  },
  {
    id: Math.random(),
    text: "Learn Swift",
    isCompleted: false
  }
]);
  return (
    <div className="App">
      <TodoForm  onAdd = {(text)=>{
        
          setTodos([
            ...todos,
            {
              id: Math.random(),
              text: text,
              isCompleted: false
            }
          ]);
        
      }}/>
      <TodoList todos = {todos}/>
      <TodoFooter todos = {todos} onClear={()=>{
        setTodos(todos.filter((todo)=>!todo.isCompleted))
      }
      }/>
    </div>
  );
}

export default App;


import "./App.css";
import Input from "./components/Input";
import Box from "./components/Box";
import { useState } from "react";

function App() {
  const [todos,setTodos] = useState([]);

  const removeToDo = (id) =>{
    const newTodos = todos.filter(
      (d,index)=>{
        if(index !==id){
          return true
        }else{
          return false
        }
      }
    )
    setTodos(newTodos)
    // console.log(id)

  }

  const addToDoHandler = (item) =>{
    // console.log(item)
    setTodos([
      ...todos,
      {
        item,
        time:new Date().toLocaleTimeString()
      }
    ])

  }
  console.log(todos)

  return (
    <div className="bg-black h-screen p-3">
      <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white">
        <Input handler = {addToDoHandler} />
        <Box data={todos} removeHandler={removeToDo} />
      </div>
    </div>
  );
}

export default App;

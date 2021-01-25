import React,{Fragment, useEffect, useState} from "react";
import EditTodo from "./EditTodo";

const ListTodos = ()=> {

    const [todos,setTodos] = useState([]);

    //delete

    const deleteTodo = async (id) =>{
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
                method:"DELETE"
            });
            setTodos(todos.filter(todo=> todo.todo_id !== id))
        } catch (error) {
            console.error(error.message)
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            setTodos(jsonData);

        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect ( ()=>{
        getTodos();
    },[]);
    console.log(todos);
    return(
        <Fragment> <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Descripcion</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          
              {/* <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
          </tr>*/}
          {todos.map(todo=>(
              <tr key={todo.todo_id}>
                  <td>
                      {todo.description}
                  </td>
                  <td>
                      <EditTodo todo ={todo} />
                  </td>
                  <td>
                      <button className="btn btn-danger" onClick={()=>deleteTodo(todo.todo_id)}>Eliminar</button>
                  </td>
              </tr>
          ))}
           
        </tbody>
      </table></Fragment>
        
    )
};

export default ListTodos;
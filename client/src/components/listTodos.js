import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./editTodo"

const ListTodos = () => {

  const [todos, setTodos] =useState([]);

  //delete function

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`https://inventario-nine-tan.vercel.app/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async() => {
    try {
      const response = await fetch("https://inventario-nine-tan.vercel.app/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);
  return (
  <Fragment>
    {" "}
    <table class="table mt-5 text-center">
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {/*<tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>*/}
        {todos.map(todo => (
          <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td>
              <EditTodo todo = {todo} />
            </td>
            <td>
              <button 
              className="btn btn-danger" 
              onClick={() => deleteTodo(todo.todo_id)}>Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Fragment>
  );    
};

export default ListTodos;
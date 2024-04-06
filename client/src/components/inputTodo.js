import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description , setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(description);
    try {
      const body = { description };
      console.log(body);
      const response = await fetch("api/todos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Inventario de equipo de Cómputo</h1>
      <form className="d-flex mt-5" onSubmit={ onSubmitForm }>
        <input 
          type="text" 
          className="form-control" 
          value={description} 
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Agregar</button>
      </form>
    </Fragment>
  );
};


export default InputTodo;
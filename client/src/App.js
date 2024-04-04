import React, { Fragment } from 'react';
import './App.css';

//components
import inputTodo from "./components/inputTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <inputTodo />
      </div>
    </Fragment>
  );
}

export default App;

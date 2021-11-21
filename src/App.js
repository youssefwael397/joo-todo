import './App.css';
import React from 'react';
import TodosTable from './components/TodosTable';
const App = () => {

  return (
    <div className='App container'>
      <h1 className=' mt-2 text-primary text-center todo'>Joo  ToDo</h1>
      <TodosTable/>
    </div>
  );
}

export default App;
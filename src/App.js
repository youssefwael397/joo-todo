import './App.css';
import React, { useState, useEffect } from 'react';
// import TodoItems from './components/TodoItems/TodoItems';
// import AddItem from './components/AddItem/AddItem';
const App = () => {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  let count = 1;


  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  }, [])

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos])

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === '') {
      return false
    } else {
      const newTodo = {
        id: new Date().getTime(),
        text: todo,
        completed: false
      }
      setTodos([...todos, newTodo]);
      setTodo('');
    }

  }


  const handleDelete = (id) => {
    const updatedTodos = [...todos].filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div className="App container">
      {/* <span className='fs-2 text-primary text-center todo'><i class="bi bi-journal-bookmark-fill"></i></span> */}

      <h1 className='mt-2 text-primary text-center todo'>Joo  ToDo</h1>

      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Title</th>
            <th scope="col">Done</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo) =>
              <tr key={todo.id}>
                <th scope="row">{count++}</th>
                <td>{todo.text}</td>
                <td ><i className="btn text-primary bi bi-check-circle" onClick={() => handleDelete(todo.id)}></i></td>
              </tr>
            )
          }
        </tbody>
      </table>

      {
        todos < 1 ? <p className='text-center nothing'>There is nothing to do. Have fun</p> : null
      }

      <form className='row m-0 input-group' onSubmit={handleSubmit}>


        <input className='input-group-text form-control col-md-5' type="text" name="title" id="title" placeholder='Enter title' onChange={handleChange} value={todo} required />
        <input className='btn btn-primary col-md-2' type="submit" value="Add Todo" />
      </form>

    </div>
  );
}

export default App;

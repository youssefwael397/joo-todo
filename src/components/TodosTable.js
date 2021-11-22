import React, { useState, useEffect } from 'react'
import TodoRow from './TodoRow';
import AddTodo from './AddTodo';


function TodosTable() {

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



    const handleDelete = (id) => {
        const updatedTodos = [...todos].filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    return (
        <>

            <table className="table text-center">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Done</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) =>

                            <TodoRow key={todo.id} todo={todo} handleDelete={handleDelete} count={count++} index={index} setTodos={setTodos} />

                        )
                    }

                </tbody>
            </table>
            {
                todos < 1 ? <p className='text-center text-success nothing'>There is nothing to do. Have fun</p> : null
            }

            <AddTodo todos={todos} setTodos={setTodos} todo={todo} setTodo={setTodo} />
        </>

    )
}

export default TodosTable

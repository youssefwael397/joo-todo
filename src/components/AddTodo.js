import React from 'react'

function AddTodo(props) {
    const { todo, todos, setTodo, setTodos } = props;


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

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    return (
        <form className='row m-0 input-group' onSubmit={handleSubmit}>
            <i class="bi bi-pencil-square input-group-text form-control w-10 "></i>
            <input className='input-group-text form-control col-md-5 w-75' type="text" name="title" id="title" placeholder='Enter title' onChange={handleChange} value={todo} required />
            <input className='btn btn-primary col-md-2' type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo

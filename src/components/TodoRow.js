import React, {useState} from 'react'

function TodoRow(props) {
    const { todo, handleDelete, count , index ,setTodos} = props;
    const [isChecked, setIsChecked] = useState(todo.completed); // false
    // let count = props.count;

    // const handleCheckBox = () => {
    //     setIsChecked(!isChecked); 
    //     todo.completed = !isChecked
    // }

    
    const handleCheckBox = (checked, index) => {
        setIsChecked(!isChecked); 
        todo.completed = !isChecked
        setTodos((currentTodos)=> {
            const todos = [...currentTodos]
            todos[index] = {...todos[index], completed : todo.completed}
            window.localStorage.clear();
            window.localStorage.setItem('todos',[...todos])
            return todos
        })
    }

    return (
        <tr>
            <th scope="row">{count}</th>
            <td className={todo.completed ? 'text-primary' : ''}>{todo.text}</td>
            <td><input type="checkbox" checked={isChecked} onChange={()=>handleCheckBox(isChecked, index)}/></td>
            <td ><i className="btn text-danger bi bi-trash-fill" onClick={() => handleDelete(todo.id)}></i></td>
        </tr>
    )
}

export default TodoRow

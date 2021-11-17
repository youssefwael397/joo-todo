import React, { useState } from 'react';
const AddItem = (props) => {
    const [title, setTitle] = useState('');




    return (
        <div className='text-center'>
            <form className='row m-0 input-group' onSubmit={handleSubmit}>
                <input className='input-group-text form-control col-md-5' type="text" name="title" id="title" placeholder='Enter title' onChange={handleChange} value={title} required />
                <input className='btn btn-primary col-md-2' type="submit" value="Add Todo" />
            </form>
        </div>
    );

}

export default AddItem;
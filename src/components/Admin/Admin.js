import React from 'react';
import './Admin.css'

const Admin = () => {
    return (
        <div className='m-5'>
            <h1>ADMIN</h1>
            <form className='input-container'>
                <input type="category" name="" placeholder="Category" />
                <br />
                <input placeholder="Name of Product" type="name" name="" id="" />
                <br />
                <input placeholder="Price of Product" type="price" name="" id="" />
                <br />
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default Admin;
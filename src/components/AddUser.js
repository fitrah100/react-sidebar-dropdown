import React from "react";

export const AddUser = ({onAdd}) =>{
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        onAdd(e.target.name.value,e.target.email.value);
        e.target.name.value="";
        e.target.email.value="";
    };

    return(
        <form onSubmit={handleOnSubmit} >
            <div className="header">Add User</div>
            <input placeholder="Name" name="name" />
            <input placeholder="Email" name="email" />
            <button onSubmit={handleOnSubmit}>Add</button>
        </form> 
    );
};
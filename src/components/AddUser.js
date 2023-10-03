import React, {useState} from "react";

export const AddUser = ({onAdd}) =>{
    const handleOnSubmit = (e)=>{
        e.preventDefault();

        if(e.target.name.value===''){
            setIsValidName(false);
            return;
        }
        if(e.target.email.value===''){
            setIsValidEmail(false);
            return;
        }
        if(isValidName && isValidEmail ){
            onAdd(e.target.name.value,e.target.email.value);
        }
        e.target.name.value="";
        e.target.email.value="";

    };


    const[isValidName,setIsValidName] =useState(true);
    const[isValidEmail,setIsValidEmail] =useState(true);

    return(

        <form onSubmit={handleOnSubmit} >
            <div className="header">Add User</div>
            <input placeholder="Name" name="name" style={{ borderColor: isValidName?'orange':'red'  }} />
            <input placeholder="Email" name="email" style={{ borderColor: isValidEmail?'orange':'red' }}   />
            <button onSubmit={handleOnSubmit}>Add</button>
        </form> 
    );
};
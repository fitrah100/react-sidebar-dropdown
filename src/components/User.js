import React, {useState} from "react";

export const User = ({name, email,id, onEdit, onDelete}) => {
    const[isEdit, setIsEdit] = useState(false);
    const handleEdit = () => {
        setIsEdit(!isEdit);
    };
    const handleDelete = () =>{
        onDelete(id);
    };

    const handleOnEditSubmit =(e)=>{
        e.preventDefault();
        onEdit(id, e.target.name.value, e.target.email.value);
        setIsEdit(!isEdit);
    };

    return(
       <div>
         {isEdit ?
            (
                    <form onSubmit={handleOnEditSubmit}>
                        <input placeholder="Name" name="name" defaultValue={name} />
                        <input placeholder="Email" name="email" defaultValue={email} />
                        <button onSubmit={handleOnEditSubmit}>Add</button>

                    </form>
                    ):
                    (
                        <div className="user">
                            <span className="user-name">{name}</span>
                            <span className="user-email">{email}</span>
                            <div>
                                <button onClick={handleEdit}>Edit</button>
                                <button onClick={handleDelete}>Delete</button>
                                
                            </div>
                        </div>
                    )}
        </div>
    );
};


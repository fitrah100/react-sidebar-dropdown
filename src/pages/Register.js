import React, { useEffect,useState } from "react";
import {User} from  "../components/User";
import {AddUser} from "../components/AddUser";
import styled from "styled-components";
import "../styling/styles.css";

const Container = styled.div`
    margin-top:5vh;
`;

function Register(){

    const[users,setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);
    
    const fetchData = async ()=>{
        await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data)=> setUsers(data))
        .catch((error)=> console.log(error))
    };

    const onAdd = async (name,email)=>{
        await fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            body:JSON.stringify({
                name:name,
                email:email
            }),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        })
        .then((response)=>{
            if(response.status !==201){
                return;
            }else{
                return response.json();
            }
        })
        .then((data)=>{
            setUsers((users)=>[...users,data]);
        })
        .catch((error)=>console.log(error));
    };

    const onEdit = async (id,name,email)=>{
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:"PUT",
            body:JSON.stringify({
                name:name,
                emmail:email
            }),
            headers:{
                "Content-type":"application/json;charset=UTF-8"
            }
        })
        .then((response)=>{
            if(response.status !==200){
                return;
            }else{
                return response.json();
            }
        })
        .then((data)=>{
            const updatedUsers = users.map((user)=>{
                
            console.log("here::"+user.id);
            
            console.log("here::"+user.email);
                if(user.id ===id){
                    user.name = name;
                    user.email = email;
                }
                return users;
            });
            setUsers((users) => updatedUsers);
        })
        .catch((error)=>console.log(error));
    };

    const onDelete = async (id)=>{
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method:"DELETE"
        })
            .then((response)=>{
                if(response.status !== 200){
                    return;
                }else{
                    setUsers(
                        users.filter((user)=>{
                            return user.id  !== id;
                        })
                    );
                }
            })
        .catch((error)=> console.log(error));
    };

    return(
        <Container>
            <div className="register">
                <div>
                     <AddUser onAdd={onAdd} />
                </div>
                <br/>
                <div>
                    { users.map((user, index)=>(
                            <User 
                                id={user.id}
                                key={index}
                                name={user.name}
                                email={user.email}
                                onEdit ={onEdit}
                                onDelete={onDelete}
                                />
                    ))}
                </div>
            </div>
        </Container>
    );

}

export default Register;
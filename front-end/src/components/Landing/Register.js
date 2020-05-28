import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import axios from 'axios'

export default function SignUp(props) {

    const [newUser, setNewUser] = useState(
        {
            "username": "",
            "password": "",
            "first_name": "",
            "last_name": ""
        }
    )

    const handleChange = e => {
         setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('api/auth/register', newUser)
        .then(res => {
           console.log(res)
           props.history.push('/login')
           alert(`Login to Continue!`)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
           <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input 
                    placeholder='User Name'
                    id='usernameinput'
                    name='username'
                    type= 'text'
                    value={newUser.username}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input 
                    placeholder='User Name'
                    id='passwordinput'
                    name='password'
                    type= 'password'
                    value={newUser.password}
                    onChange={handleChange}
                />
                <label>First Name</label>
                <input 
                    placeholder='First Name'
                    name='first_name'
                    type= 'text'
                    value={newUser.first_name}
                    onChange={handleChange}
                />
                <label>Last Name</label>
                <input 
                    placeholder='Last Name'
                    name='last_name'
                    type= 'text'
                    value={newUser.last_name}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}
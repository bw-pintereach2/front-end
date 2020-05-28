import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from 'axios'

export default function Login() {

    const [logindata, setLoginData] = useState(
        {
            "username": "", 
            "Password": "", 
        }
    )
    
    const handleChange = e => {
        return setLoginData({...logindata, [e.target.name]: e.target.value}, )
    } 

    useEffect(() => {
        axios.post('api/auth/login', logindata)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
          <form onSubmit={handleChange}>
        <label htmlFor='username'>Username</label>
           <input 
            placeholder='User Name'
            id='usernameinput'
            name='Username'
            type= 'text'
            value=''
           />
          </form>
          <form>
        <label htmlFor='username'>Password</label>
           <input 
            placeholder='User Name'
            id='passwordinput'
            name='Password'
            type= 'text'
            value=''
           />

           <button type="submit">Submit</button>
          </form>
        </div>
    )
}
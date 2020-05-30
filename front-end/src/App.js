
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Route, Link } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./components/Landing/Home";
import SignUp from './components/Landing/Register';
import Login from './components/Landing/Login';
import Dashboard from "./components/Dashboard"
import NavBar from './components/NavBar';
import { Container, Header } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"
import useSWR from "swr"// import PrivateRoute from "./components/PrivateRoute";

// import { fetchCategories } from "./actions/categories";

import "./App.css";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import axios from "axios"

const userInitial = {
  username: "",
  password: ""
}

function App(props) {
  const [user, setUser] = useState(userInitial)
  const [loggedIn, toggleLoggedIn] = useState(false)

  const history = useHistory()
  const login = async (formState) => {
    const res = await axios.post("https://pintereach2-backend.herokuapp.com/api/auth/login", formState)
    localStorage.setItem("token", res.data.token)
    history.push("/dashboard")
  }

  const signup = async (formState) => {


    const res = await axios.post("https://pintereach2-backend.herokuapp.com/api/auth/register", formState)
    console.log(res)
    return res

    // history.push("/dashboard")
  }


  return (
    <div className="App">
      {/* <Container> */}
      {/* <NavBar user={user} setUser={setUser} loggedIn={loggedIn}/>} */}
      <Route exact path="/Signup" render={() => <SignUp signup={signup} />} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Dashboard" component={Dashboard} />
      {/* <Route exact path="/dashboard" component={NavBar} /> */}
      {/* </Container> */}
    </div>
  );
}


const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};


export default connect(mapStateToProps, {})(App);

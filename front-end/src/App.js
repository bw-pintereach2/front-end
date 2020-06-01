import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signin from "./components/Landing/Signin";
import SignUp from "./components/Landing/Signup";
import Articles from "./components/Articles";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route
                        exact path="/"
                        render={(props) => <Signin {...props} />}
                    />
                    <Route
                        path="/Signin"
                        render={(props) => <Signin {...props} />}
                    />
                    <Route
                        path="/signup"
                        render={(props) => <SignUp {...props} />}
                    />
                    <Route
                       path="/logout"
                       render={(props) => <Login {...props} />}
                    />
                   <ProtectedRoute exact path="/articles" component={Articles} />
                   {/* <PrivateRoute
                    exact path="/articles/category/:id"
                    component={ArticlesByCategory}
                    /> */}
                    <ProtectedRoute
                        exact path="/add-article"
                        component={AddForm}
                    />
                    {/* <ProtectedRoute
                     exact path="/edit-article/:id"
                     component={EditForm}
                    /> */}
               </Switch>
            </div>
        </Router>
    );
}

export default App;



// {
//     username: "guitarllamama12",
//     password: "!g0tap@ssword"
//   },
//   {
//     username: "dooWop",
//     password: "th@tT#!ng"
//   },
//   {
//     username: "finalUser",
//     password: "badpassword:("
//   },
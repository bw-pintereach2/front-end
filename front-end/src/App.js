import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Articles from "./components/Articles"
//import AddForm from "./components/Articles/AddForm";
//import EditForm from "./components/Articles/EditForm";
//import ProtectedRoute from "./components/Articles/ProtectedRoute";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route
                        exact path="/"
                        render={(props) => <Login {...props} />}
                    />
                    <Route
                        path="/Login"
                        render={(props) => <Login {...props} />}
                    />
                    <Route
                        path="/Register"
                        render={(props) => <Register {...props} />}
                    />
                    <Route
                       path="/logout"
                       render={(props) => <Login {...props} />}
                    />
                   {/* <ProtectedRoute exact path="/articles" component={Articles} /> */}
                   {/* <ProtectedRoute
                    exact path="/articles/category/:id"
                    component={ArticlesByCategory}
                    /> */}
                    {/* <ProtectedRoute
                        exact path="/add-article"
                        component={AddForm}
                    /> */}
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
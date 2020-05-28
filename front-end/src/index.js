import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
<<<<<<< HEAD
import reducer from "./reducers";

import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
=======
import logger from "redux-logger";

import { reducer as classesReducer } from "./reducers/classes";
import { reducer as studentReducer } from "./reducers/studentClasses";
import { reducer as categoriesReducer } from "./reducers/categories";

import App from "./App";

const rootReducer = combineReducers({
  studentClasses: studentReducer,
  classes: classesReducer,
  categories: categoriesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
>>>>>>> parent of 77ee5094... updates
);
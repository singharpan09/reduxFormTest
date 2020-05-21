import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { reducer as formReducer } from "redux-form";
import { createStore, combineReducers } from "redux";
//reducer imported from "redux-form" not from "redux"
//we have changed name here b'coz our project code have multiple reducer
//so to avoid name conflict
//form is key for "formReducer"
//react-redux & redux imported
const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

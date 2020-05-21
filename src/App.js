import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>This is redux form</h3>
    </div>
  );
}

export default reduxForm({
  form: "myform",
})(App);
//now the component will be wrapped with redux form  like ...connect
//we have to pass a object to redux form ...with key....& a unique name

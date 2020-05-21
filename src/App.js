import React from "react";
import { Field, reduxForm } from "redux-form";
import Profile from "./Profile";

import "./App.css";
//Field is used to create input fields
//there is some necessary "props" to be provided to it
function App(props) {
  console.log(props);
  const { handleSubmit } = props;
  return (
    <div className="App">
      <h3>This is redux form</h3>
      <form
        onSubmit={handleSubmit((formValues) => {
          console.log(formValues);
        })}
      >
        <label>First name</label>
        <Field type="text" name="firstname" component="input" />
        <br />
        <label>Last name</label>
        <Field type="text" name="lastname" component="input" />
        <br />
        <button type="submit">Submit It</button>
      </form>
      <Profile />
    </div>
  );
}
//will pass a callback function to handleSubmit that will have form values
//onSubmit event form will call handleSubmit..that is coming from redux form "props"
//redux-form provide different type of props
export default reduxForm({
  form: "myform",
})(App);
//component="input" --tells that it is input tag
//type="text"---tells it is of type text
//name field is also necessary
//now the component will be wrapped with redux form  like ...connect
//we have to pass a object to redux form ...with key....& a unique name

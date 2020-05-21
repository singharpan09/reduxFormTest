import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import Profile from "./Profile";

import "./App.css";
//intilly profile will show error
//therfore will make a condition that when form get submitted..then profile will show
//there will make a local state for that
//initlly state will be false..and profile will show when it get true
function App(props) {
  const [showProfile, setProfile] = useState(false);
  const { handleSubmit } = props;
  return (
    <div className="App">
      <h3>This is redux form</h3>
      <form
        onSubmit={handleSubmit((formValues) => {
          setProfile(true);
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
      {showProfile ? <Profile /> : null}
    </div>
  );
}
//will pass a callback function to handleSubmit that will have form values
//onSubmit event form will call handleSubmit..that is coming from redux form "props"
//redux-form provide different type of props
export default reduxForm({
  form: "myForm",
})(App);
//in real application direct component="input" is not passed...we make custom component for that
//component="input" --tells that it is input tag
//type="text"---tells it is of type text
//name field is also necessary
//now the component will be wrapped with redux form  like ...connect
//we have to pass a object to redux form ...with key....& a unique name

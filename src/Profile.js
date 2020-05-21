//now we will use all those from values here
//now will use connect here
import React from "react";
import { connect } from "react-redux";

import "./App.css";

function Profile(props) {
  console.log(props.formdata);
  return (
    <div className="App">
      <h3>This is redux form</h3>
      <h4>{props.formdata.firstname}</h4>
      <h4>{props.formdata.lastname}</h4>
    </div>
  );
}
const mapStatetoProps = (state) => {
  console.log(state);
  return {
    formdata: state.form.myForm.values,
  };
};
export default connect(mapStatetoProps)(Profile);
//initially formdata will show error because..formdata does not exist until form get submit

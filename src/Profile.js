//now we will use all those from values here
//now will use connect here
import React from "react";
import { connect } from "react-redux";

import "./App.css";

function Profile() {
  return (
    <div className="App">
      <h3>This is redux form</h3>
    </div>
  );
}
const mapStatetoProps = (state) => {
  console.log(state);
};
export default connect(mapStatetoProps)(Profile);

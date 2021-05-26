import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h1 style={{ color: "#00bcd4" }}>Success</h1>
          <h1>Thank You!!</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;

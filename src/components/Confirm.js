import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, bio, city },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h1 style={{ color: "#00bcd4" }}>Confirm User Data</h1>
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="Bio" secondaryText={bio} />
            <ListItem primaryText="City" secondaryText={city} />
          </List>
          <br />
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={{ margin: "15px" }}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={{ margin: "15px" }}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;

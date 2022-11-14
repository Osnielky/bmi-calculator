import React, { Component } from "react";

import { Box, AppBar, Toolbar, TextField, Button } from "@mui/material";


class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        
         <AppBar >Enter User Details</AppBar>
         <br/>
        <TextField onChange={handleChange ('firstName')}
        defaultValue={values.firstName} 
        label="Name"
        variant="standard"
        />
        <br/>
        <TextField onChange={handleChange ('firstName')}
        defaultValue={values.firstName} 
        label="Email"
        variant="standard"
        type="email"
        />
       <br/>
      <Button onClick={this.continue}>Continue</Button>

      </React.Fragment>
    );
  }
}
export default FormUserDetails;

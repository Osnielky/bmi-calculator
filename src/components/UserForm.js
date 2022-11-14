import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    weigh: 0,
    heigh: 0,
  };
  // next step

  nextSpet = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  PrevSpet = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, weigh, heigh } = this.state;
    const values = { firstName, lastName, email, weigh, heigh };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextSpet}
            handleChange={this.handleChange}
            values={values}
          />
        );
        break;

      case 2:
        return <h1>FormPersonalDetails</h1>;
      case 3:
        return <h1>Confirm</h1>;

        break;
      case 3:
        return <h1>SUccess</h1>;

     

        break;
    }
  }
}

export default UserForm;

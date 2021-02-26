import React from "react";

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      location: "",
      mobileNumber: "",
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const user = { ...this.state };
    this.props.onSave(user);
  }

  usernameChangeHandler(e) {
    this.setState({
      username: e.target.value,
    });
  }

  passwordChangeHandler(e) {
    this.setState({
      password: e.target.value,
    });
  }

  firstNameChangeHandler(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  lastNameChangeHandler(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  locationChangeHandler(e) {
    this.setState({
      location: e.target.value,
    });
  }

  mobileNumberChangeHandler(e) {
    this.setState({
      mobileNumber: e.target.value,
    });
  }

  render() {
    return (
      <main className="login-form m-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <p>Registration</p>
                </div>
                <div className="card-body">
                  <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="form-group row">
                      <label
                        htmlFor="email_address"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        E-Mail Address
                      </label>
                      <div className="col-md-6">
                        <input
                          type="text"
                          id="email_address"
                          className="form-control"
                          name="email-address"
                          onChange={(e) => this.usernameChangeHandler(e)}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="password"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Password
                      </label>
                      <div className="col-md-6">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          name="password"
                          onChange={(e) => this.passwordChangeHandler(e)}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="firstName"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        First Name
                      </label>
                      <div className="col-md-6">
                        <input
                          type="text"
                          id="firstName"
                          className="form-control"
                          name="firstName"
                          onChange={(e) => this.firstNameChangeHandler(e)}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="lastName"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Last Name
                      </label>
                      <div className="col-md-6">
                        <input
                          type="text"
                          id="lastName"
                          className="form-control"
                          name="lastName"
                          onChange={(e) => this.lastNameChangeHandler(e)}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="location"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Location
                      </label>
                      <div className="col-md-6">
                        <input
                          type="text"
                          id="location"
                          className="form-control"
                          name="location"
                          onChange={(e) => this.locationChangeHandler(e)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="mobileNumber"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Mobile Number
                      </label>
                      <div className="col-md-6">
                        <input
                          type="number"
                          id="mobileNumber"
                          className="form-control"
                          name="mobileNumber"
                          onChange={(e) => this.mobileNumberChangeHandler(e)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 offset-md-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

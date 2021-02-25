import React from "react";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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

  render() {
    return (
      <main className="login-form m-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <p>Sign In</p>
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
                    <div className="col-md-6 offset-md-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Sign In
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

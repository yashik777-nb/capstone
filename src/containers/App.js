import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import NewIssue from "../containers/NewIssue/NewIssue";
import NotFound from "../containers/NotFound/NotFound";
import AllIssues from "../containers/IssuesList/AllIssues";
import About from "../components/About/About";
import IssueDetail from "../containers/IssuesList/IssueDetail/IssueDetail";
import SignInForm from "./Users/SignIn/SignInForm";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actionCreators/IssuesActionCreator";

class App extends React.Component {
  componentDidMount() {
    this.props.getAllIssues();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <div className="container">
              <NavLink activeClassName="active" exact to="/">
                CapStone Project
              </NavLink>
              <NavLink activeClassName="active" exact to="/about">
                About
              </NavLink>
              <NavLink activeClassName="active" exact to="/issues">
                Issues
              </NavLink>
              <NavLink activeClassName="active" exact to="/signin">
                Sign-In
              </NavLink>
              <NavLink activeClassName="active" exact to="/register">
                Register
              </NavLink>
            </div>
          </nav>
          <Switch>
            <Route path="/addIssue" component={NewIssue} />
            <Route path="/about" component={About} />
            <Route path="/signin" component={SignInForm} />
            <Route path="/issues/:issueDescription" component={IssueDetail} />
            <Route path="/" component={AllIssues} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// mapDispatcherToProps
const mapDispatcherToProps = (dispatch) => {
  return {
    getAllIssues: () => dispatch(actionCreators.getIssues()),
  };
};

export default connect(null, mapDispatcherToProps)(App);

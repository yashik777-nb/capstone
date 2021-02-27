import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewIssue from "../containers/NewIssue/NewIssue";
import NotFound from "../containers/NotFound/NotFound";
import AllIssues from "../containers/IssuesList/AllIssues";
import About from "../components/About/About";
import IssueDetail from "../containers/IssuesList/IssueDetail/IssueDetail";
import SignInForm from "./Users/SignIn/SignInForm";
import RegistrationForm from "./Users/Registration/RegistrationForm";
import NavigationBar from "./NavigationBar/NavigationBar";
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
          <NavigationBar />
          <Switch>
            <Route path="/addIssue" component={NewIssue} />
            <Route path="/about" component={About} />
            <Route path="/signin" component={SignInForm} />
            <Route path="/register" component={RegistrationForm} />
            <Route path="/issues/:issueDescription" component={IssueDetail} />
            <Route path="/" component={AllIssues} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    authenticated: state.users.authenticated,
    firstname: state.users.firstname,
  };
};

// mapDispatcherToProps
const mapDispatcherToProps = (dispatch) => {
  return {
    getAllIssues: () => dispatch(actionCreators.getIssues()),
  };
};

export default connect(mapStateToProps, mapDispatcherToProps)(App);

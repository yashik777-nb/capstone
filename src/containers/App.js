import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import * as actionCreators from "../store/actions/actionCreators/IssuesActionCreator";
// import AllIssues from "../containers/IssuesList/AllIssues";
// import NotFound from "../containers/NotFound/NotFound";
// import About from "../components/About/About";
// import NewIssue from "../containers/NewIssue/NewIssue";
// import IssueDetail from "../containers/IssuesList/IssueDetail/IssueDetail";
// import SignInForm from "./Users/SignIn/SignInForm";
// import RegistrationForm from "./Users/Registration/RegistrationForm";
// import NavigationBar from "./NavigationBar/NavigationBar";
const AllIssues = lazy(() => import("../containers/IssuesList/AllIssues"));
const NotFound = lazy(() => import("../containers/NotFound/NotFound"));
const About = lazy(() => import("../components/About/About"));
const IssueDetail = lazy(() =>
  import("../containers/IssuesList/IssueDetail/IssueDetail")
);
const SignInForm = lazy(() => import("./Users/SignIn/SignInForm"));
const RegistrationForm = lazy(() =>
  import("./Users/Registration/RegistrationForm")
);
const NavigationBar = lazy(() => import("./NavigationBar/NavigationBar"));
const NewIssue = lazy(() => import("../containers/NewIssue/NewIssue"));

class App extends React.Component {
  componentDidMount() {
    this.props.getAllIssues();
  }

  render() {
    return (
      <Suspense fallback={<h1>Loading...</h1>}>
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
      </Suspense>
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

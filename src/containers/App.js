import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import * as actionCreators from "../store/actions/actionCreators/IssuesActionCreator";
import Loader from "../components/Loader/Loader";
// import AllIssues from "../containers/IssuesList/AllIssues";
// import NotFound from "../containers/NotFound/NotFound";
// import About from "../components/About/About";
// import NewIssue from "../containers/NewIssue/NewIssue";
// import IssueDetail from "../containers/IssuesList/IssueDetail/IssueDetail";
// import SignInForm from "./Users/SignIn/SignInForm";
// import RegistrationForm from "./Users/Registration/RegistrationForm";
// import NavigationBar from "./NavigationBar/NavigationBar";
import NavigationBar from "./NavigationBar/NavigationBar";
const AllIssues = lazy(() => import("../containers/IssuesList/AllIssues"));
const NotFound = lazy(() => import("../components/NotFound/NotFound"));
const About = lazy(() => import("../components/About/About"));
const IssueDetail = lazy(() =>
  import("../containers/IssuesList/IssueDetail/IssueDetail")
);
const SignInForm = lazy(() => import("./Users/SignIn/SignInForm"));
const RegistrationForm = lazy(() =>
  import("./Users/Registration/RegistrationForm")
);
const NewIssue = lazy(() => import("../containers/NewIssue/NewIssue"));

class App extends React.Component {
  componentDidMount() {
    this.props.getAllIssues();
  }

  render() {
    return (
      <BrowserRouter>
        <NavigationBar />
        <Suspense fallback={<Loader />}>
          <div className="App">
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
        </Suspense>
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

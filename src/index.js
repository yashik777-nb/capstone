import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import redxuThunk from "redux-thunk";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import issuesReducer from "./store/reducer/issuesReducer";
import usersReducer from "./store/reducer/usersReducer";
import customizeFields from "./store/reducer/customizeFieldsReducer";

const reducer = combineReducers({
  users: usersReducer,
  issues: issuesReducer,
  customize: customizeFields,
});

const store = createStore(reducer, applyMiddleware(redxuThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

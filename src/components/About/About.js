import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <div className="m-5">
        <h4 className="text-center">
          This Applciation shows the list of issues.
        </h4>
        <h6 className="text-center">
          This logged in user can view/edit/delete issues
        </h6>
      </div>
    );
  }
}

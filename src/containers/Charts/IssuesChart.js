import React from "react";
import { connect } from "react-redux";
import { Pie, Doughnut } from "react-chartjs-2";
import { Hidden } from "@material-ui/core";
class IssuesChart extends React.Component {
  render() {
    const graphData = {
      labels: this.props.issues.map((issue) => issue.title),
      datasets: [
        {
          label: "Issues",
          backgroundColor: this.props.issues.map(
            (issue) => issue.backGroundColor
          ),
          hoverBackgroundColor: this.props.issues.map(
            (issue) => issue.hoverBackGroundColor
          ),
          data: this.props.issues.map((issue) => issue.views),
        },
      ],
    };
    return (
      <div>
        <Hidden smDown>
          <Pie
            height={75}
            data={graphData}
            options={{
              title: {
                display: true,
                text: "Issues vs Views  - Pie Chart",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />

          <Doughnut
            height={75}
            data={graphData}
            options={{
              title: {
                display: true,
                text: "Issues vs Views - Doughnut Chart",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </Hidden>
        <Hidden mdUp>
          <Pie
            height={100}
            data={graphData}
            options={{
              title: {
                display: true,
                text: "Issues vs Views  - Pie Chart",
                fontSize: 20,
              },
              legend: {
                display: false,
                position: "right",
              },
            }}
          />

          <Doughnut
            height={100}
            data={graphData}
            options={{
              title: {
                display: true,
                text: "Issues vs Views - Doughnut Chart",
                fontSize: 20,
              },
              legend: {
                display: false,
                position: "right",
              },
            }}
          />
        </Hidden>
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    issues: state.issues.issues,
  };
};

export default connect(mapStateToProps)(IssuesChart);

import React from "react";
import { connect } from "react-redux";
import { Pie, Doughnut } from "react-chartjs-2";
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
        <Pie
          height={100}
          data={graphData}
          options={{
            title: {
              display: true,
              text: "Issues By View  - Pie Chart",
              fontSize: 20,
            },
            legend: {
              display: true,
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
              text: "Issue By View - Doughnut Chart",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
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

import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import * as actionCreators from "../../store/actions/actionsIndex";

export const BlueCheckBox = withStyles({
  root: {
    color: blue[400],
    "&$checked": {
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

class CustomizeFields extends React.Component {
  render() {
    return (
      <div>
        <h6>Customize Fields</h6>
        <FormGroup row>
          <FormControlLabel
            control={
              <BlueCheckBox
                checked={this.props.severity}
                onChange={(event) => this.props.severityHandler()}
                name="severity"
              />
            }
            label="Severity"
          />
          <FormControlLabel
            control={
              <BlueCheckBox
                checked={this.props.status}
                onChange={(event) => this.props.statusHandler()}
                name="status"
              />
            }
            label="Status"
          />
          <FormControlLabel
            control={
              <BlueCheckBox
                checked={this.props.createdDate}
                onChange={(event) => this.props.createdDateHandler()}
                name="creaedDate"
              />
            }
            label="Created Date"
          />
          <FormControlLabel
            control={
              <BlueCheckBox
                checked={this.props.resolvedDate}
                onChange={(event) => this.props.resolvedDateHandler()}
                name="resolvedDate"
              />
            }
            label="Resolved Date"
          />
        </FormGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.customize,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    severityHandler: () => dispatch(actionCreators.severityHandler()),
    statusHandler: () => dispatch(actionCreators.statusHandler()),
    createdDateHandler: () => dispatch(actionCreators.createdDateHandler()),
    resolvedDateHandler: () => dispatch(actionCreators.resolvedDateHandler()),
  };
};

export default withStyles({})(
  connect(mapStateToProps, mapDispatchToProps)(CustomizeFields)
);

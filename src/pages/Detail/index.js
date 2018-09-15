import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import {} from "./style";

class Detail extends PureComponent {
  id = "";
  componentDidMount() {
    this.id = this.props.match.params.id;
    // request data with this.id
  }
  render() {
    return <div>Detail {this.id}</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);

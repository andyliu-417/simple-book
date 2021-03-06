import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import {} from "./style";
import { Header } from "../../components";

class Detail extends PureComponent {
  componentDidMount() {
    console.log(this.getParams("id"));
    // request data with this.id
  }

  getParams = name => {
    return this.props.match.params[name];
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div>Detail {this.getParams("id")}</div>
      </Fragment>
    );
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

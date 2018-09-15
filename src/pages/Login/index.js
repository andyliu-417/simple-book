import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { Header } from "../../components";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = e => {
    let change = {};
    const name = e.target.name;
    const value = e.target.value;
    change[name] = value;
    this.setState(prevState => change);
  };

  login = () => {
    const { login } = this.props;
    login(this.state);
  };

  render() {
    const { loginState } = this.props;
    return !loginState ? (
      <Fragment>
        <Header />
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              name="username"
              value={this.state.username}
              onChange={this.changeHandler}
            />
            <Input
              placeholder="密码"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.changeHandler}
            />
            <Button onClick={this.login}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      </Fragment>
    ) : (
      <Redirect to="/" />
    );
  }
}

const mapStateToProps = state => {
  return {
    loginState: state.getIn(["Login", "login"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => {
      dispatch({ type: "login", payload: data });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

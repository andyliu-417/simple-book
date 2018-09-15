import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { Header } from "../../components";

class Login extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" />
            <Input placeholder="密码" type="password" />
            <Button>登陆</Button>
          </LoginBox>
        </LoginWrapper>
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
)(Login);

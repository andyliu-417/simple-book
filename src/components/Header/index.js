import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button
} from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Header extends Component {
  componentDidMount() {
    this.props._foo();
  }
  
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NavSearch />
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="writing">写文章</Button>
        </Addition>
        <div>{this.props.foo}</div>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    foo: state.Header.get('foo')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _foo: () => {
      dispatch(actionCreators.foo());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

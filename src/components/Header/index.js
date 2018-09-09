import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

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
import { actionCreators, selectors } from "./store";

class Header extends Component {
  render() {
    const { focused, toggleFocused } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <CSSTransition in={focused} timeout={200} classNames="slide">
            <NavSearch
              className={focused ? "focused" : ""}
              onFocus={() => {
                toggleFocused(!focused);
              }}
              onBlur={() => {
                toggleFocused(!focused);
              }}
            />
          </CSSTransition>
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="writing">写文章</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    focused: selectors.focusedSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFocused: data => {
      dispatch(actionCreators.focused(data));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

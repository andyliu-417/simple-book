import React from "react";
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
import { Link } from "react-router-dom";

const Header = props => {
  const { focused, toggleFocused, login } = props;
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>

      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        {login ? (
          <Link to="">
            <NavItem className="right">退出</NavItem>
          </Link>
        ) : (
          <Link to="/login">
            <NavItem className="right">登录</NavItem>
          </Link>
        )}
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
        <Button className="writing">
          {/* <i className="iconfont">&#xe61b;</i> */}
          写文章
        </Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  return {
    focused: selectors.focusedSelector(state),
    login: state.getIn(["Login", "login"])
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

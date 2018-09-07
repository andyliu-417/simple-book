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
  constructor(props) {
    super(props);
    this.state = { focused: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(preState => {
      return {
        focused: !preState.focused
      };
    });
  }

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
          <CSSTransition in={this.state.focused} timeout={200} classNames="slide">
            <NavSearch
              className={this.state.focused ? "focused" : ""}
              onFocus={this.handleToggle}
              onBlur={this.handleToggle}
            />
          </CSSTransition>
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="writing">写文章</Button>
        </Addition>
        {/* <div>{this.props.foo}</div> */}
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    // foo: state.getIn(['Header', 'foo'])
    foo: selectors.fooSelector(state)
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

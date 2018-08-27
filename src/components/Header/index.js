import React, { Component } from "react";
import { styles } from "./style";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <styles.HeaderWrapper>
        <styles.Logo />
        <styles.Nav>
          <styles.NavItem className="left active">首页</styles.NavItem>
          <styles.NavItem className="left">下载App</styles.NavItem>
          <styles.NavItem className="right">登录</styles.NavItem>
          <styles.NavItem className="right">Aa</styles.NavItem>
          <styles.NavSearch />
        </styles.Nav>
        <styles.Addition>
          <styles.Button className="reg">注册</styles.Button>
          <styles.Button className="writing">写文章</styles.Button>
        </styles.Addition>
      </styles.HeaderWrapper>
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
)(Header);

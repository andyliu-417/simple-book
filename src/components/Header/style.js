import styled from "styled-components";
import logoPic from "../../statics/logo.png";

const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;

const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;

const Nav = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;

const NavItem = styled.div`
  height: 56px;
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

const NavSearch = styled.input.attrs({ placeholder: "搜索" })`
  width: 160px;
  height: 38px;
  margin: 9px 0 0 20px;
  padding: 0 20px;
  border: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
`;

const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;

const Button = styled.div`
  display: inline-block;
  line-height: 38px;
  border-radius: 19px;
  border:1px solid #ec6149;
  margin: 9px 20px 9px 0;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
      color: #ec6149;
  }
  &.writing {
      color: #fff;
      background: #ec6149;
  }
`;

export const styles = {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button
};

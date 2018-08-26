import React, { Component } from "react";
import { styles } from "./style";

class Header extends Component {
  render() {
    return (
      <styles.HeaderWrapper>
        <styles.Logo />
      </styles.HeaderWrapper>
    );
  }
}

export default Header;

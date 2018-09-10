import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { Header } from "../../components";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Writer from "./Writer";
import List from "./List";
import Recommend from "./Recommend";
import Topic from "./Topic";

class Home extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <HomeWrapper>
          <HomeLeft>
            <img
              className="banner-img"
              alt=""
              src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            />
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight />
        </HomeWrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // foo: selectors.fooSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

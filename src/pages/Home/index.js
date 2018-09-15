import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { Header } from "../../components";
import { HomeWrapper, HomeLeft, HomeRight, HomeBacktop } from "./style";
import Writer from "./Writer";
import List from "./List";
import Recommend from "./Recommend";
import Topic from "./Topic";

class Home extends PureComponent {
  componentDidMount() {
    this.props.testFetch();
    this.bindEvent();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  }

  bindEvent() {
    window.addEventListener("scroll", this.scrollListener);
  }

  scrollListener = () => {
    const { changeShowTop, showTop } = this.props;
    let flag = document.documentElement.scrollTop > 350;
    showTop !== flag && changeShowTop(flag);
  };

  backTop() {
    window.scrollTo(0, 0);
  }

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
          <HomeRight>
            <Recommend />
          </HomeRight>
        </HomeWrapper>
        {this.props.showTop ? (
          <HomeBacktop onClick={this.backTop}>Top</HomeBacktop>
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    showTop: selectors.showTopSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    testFetch: () => {
      dispatch({ type: "test_fetch" });
    },
    changeShowTop: flag => {
      dispatch({ type: "change_show_top", show: flag });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

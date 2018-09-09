import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { TopicWrapper, TopicItem } from "./style";

class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img
            className="topic-pic"
            src="//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
          />
          社会热点
        </TopicItem>
      </TopicWrapper>
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
)(Topic);

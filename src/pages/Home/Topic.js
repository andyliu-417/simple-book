import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { TopicWrapper, TopicItem } from "./style";
import { Divider } from "antd";

class Topic extends PureComponent {
  render() {
    const { topicList } = this.props;
    return (
      <Fragment>
        <TopicWrapper>
          {topicList.map(item => (
            <TopicItem key={item.get("id")}>
              <img className="topic-pic" src={item.get("imgUrl")} />
              {item.get("title")}
            </TopicItem>
          ))}
        </TopicWrapper>
        <Divider />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    topicList: selectors.topicListSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topic);

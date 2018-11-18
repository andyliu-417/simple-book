import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { TopicWrapper, TopicItem } from "./style";
import { Divider } from "antd";

class Topic extends PureComponent {
  state = {
    // full_address: "full address",
    full_address: "",
    address: "address"
  };
  render() {
    const { topicList } = this.props;
    const { full_address, address } = this.state;
    return (
      <Fragment>
        {/* <div>{full_address ? full_address : address}</div> */}
        <div>{full_address || address}</div>
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

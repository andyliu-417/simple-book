import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { RecommendWrapper, RecommendItem } from "./style";

class Recommend extends PureComponent {
  render() {
    const { recommendList } = this.props;
    return (
      <RecommendWrapper>
        {recommendList.map(item => (
          <RecommendItem key={item.get("id")} href={item.get("href_url")}>
            <img
              className="item-pic"
              src={item.get("img_url")}
              alt="Banner s 3"
            />
          </RecommendItem>
        ))}
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    recommendList: selectors.recommendListSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommend);

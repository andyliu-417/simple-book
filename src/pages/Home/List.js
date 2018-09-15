import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { ListWrapper, ListItem, ListInfo } from "./style";
import FontAwesome from "react-fontawesome";

class List extends PureComponent {
  render() {
    const { articleList } = this.props;

    return (
      <ListWrapper>
        {articleList.map(item => (
          <ListItem key={item.get("id")}>
            <div className="left">
              <div className="title">{item.get("title")}</div>
              <div className="content">{item.get("content")}</div>
              <ListInfo>
                <div className="info">
                  <span>{item.get("author")}</span>
                </div>
                <div className="info">
                  <FontAwesome name="comment" />
                  &nbsp;
                  <span>{item.get("comments")}</span>
                </div>
                <div className="info">
                  <FontAwesome name="heart" />
                  &nbsp;
                  <span>{item.get("likes")}</span>
                </div>
              </ListInfo>
            </div>
            <img
              className="list-pic"
              src={item.get("pic_url")}
            />
          </ListItem>
        ))}
      </ListWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    articleList: selectors.articleListSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

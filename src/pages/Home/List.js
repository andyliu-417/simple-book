import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { ListWrapper, ListItem, ListInfo } from "./style";
import FontAwesome from "react-fontawesome";

class List extends PureComponent {
  render() {
    return (
      <ListWrapper>
        <ListItem>
          <div className="left">
            <div className="title">this is title</div>
            <div className="content">
              this is contents this is contents this is contents this is
              contents this is contents this is contents this is contents this
              is contents this is contents this is contents this is contents
              this is contents
            </div>
            <ListInfo>
              <div className="info">
                <span>asdasdfsadf</span>
              </div>
              <div className="info">
                <FontAwesome name="comment" />
                &nbsp;
                <span>18</span>
              </div>
              <div className="info">
                <FontAwesome name="heart" />
                &nbsp;
                <span>10</span>
              </div>
            </ListInfo>
          </div>
          <img
            className="list-pic"
            src="//upload-images.jianshu.io/upload_images/5143640-9b6bba456fd0c255?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
          />
        </ListItem>
        <ListItem>
          <div className="left">
            <div className="title">this is title</div>
            <div className="content">
              this is contents this is contents this is contents this is
              contents this is contents this is contents this is contents this
              is contents this is contents this is contents this is contents
              this is contents
            </div>
            <ListInfo>
              <div className="info">
                <span>asdasdfsadf</span>
              </div>
              <div className="info">
                <FontAwesome name="comment" />
                &nbsp;
                <span>18</span>
              </div>
              <div className="info">
                <FontAwesome name="heart" />
                &nbsp;
                <span>10</span>
              </div>
            </ListInfo>
          </div>
          <img
            className="list-pic"
            src="//upload-images.jianshu.io/upload_images/5143640-9b6bba456fd0c255?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
          />
        </ListItem>
        <ListItem>
          <div className="left">
            <div className="title">this is title</div>
            <div className="content">
              this is contents this is contents this is contents this is
              contents this is contents this is contents this is contents this
              is contents this is contents this is contents this is contents
              this is contents
            </div>
            <ListInfo>
              <div className="info">
                <span>asdasdfsadf</span>
              </div>
              <div className="info">
                <FontAwesome name="comment" />
                &nbsp;
                <span>18</span>
              </div>
              <div className="info">
                <FontAwesome name="heart" />
                &nbsp;
                <span>10</span>
              </div>
            </ListInfo>
          </div>
          <img
            className="list-pic"
            src="//upload-images.jianshu.io/upload_images/5143640-9b6bba456fd0c255?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
          />
        </ListItem>
      </ListWrapper>
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
)(List);

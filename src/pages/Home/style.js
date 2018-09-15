import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 55%;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin: 30px 10px;
  width: 65%;
  .banner-img {
    width: 100%;
    height: 300px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  margin: 30px 10px;
  width: 30%;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 0 0;
  margin-left: -18px;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-bottom: 18px;
  margin-left: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
  .topic-pic {
    float: left;
    width: 40px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListWrapper = styled.div``;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;

  .left {
    float: left;
    width: 80%;
    .title {
      line-height: 22px;
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 12px;
      a {
        color: #333;
      }
    }
    .content {
      position: relative;
      line-height: 1.4em;
      height: 4.2em;
      overflow: hidden;
      font-size: 15px;
      color: #999;
      &:after {
        content: "...";
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0 5px;
        background: #fff;
      }
    }
  }

  .list-pic {
    float: right;
    width: 125px;
    height: 125px;
  }
`;

export const ListInfo = styled.div`
  overflow: hidden;
  margin-top: 10px;
  .info {
    float: left;
    margin-right: 20px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  height: 300px;
`;

export const RecommendItem = styled.a.attrs({ target: "_blank" })`
  display: inline-block;
  height: 50px;
  .item-pic {
    height: 50px;
    width: 100%;
  }
  margin-bottom: 10px;
`;

export const ListLoadMore = styled.div`
  margin: 30px auto 60px;
  padding: 10px 15px;
  background-color: #a5a5a5;
  color: #fff;
  text-align: center;
  border-radius: 20px;
  font-size: 15px;
  cursor: pointer;
`;

export const HomeBacktop = styled.div`
  width: 60px;
  height: 60px;
  position: fixed;
  right: 3%;
  bottom: 5%;
  border: 1px solid #ccc;
  border-radius: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  color: #333;
  cursor: pointer;
`;

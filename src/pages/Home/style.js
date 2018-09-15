import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 75%;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  margin: 30px 15px;
  width: 65%;
  .banner-img {
    width: 100%;
    height: 300px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  margin: 30px 15px;
  width: 30%;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 0 0;
  margin-left: -18px;
  // border-bottom: 1px solid #dcdcdc;
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
    width: 800px;
    .title {
      line-height: 22px;
      font-size: 22px;
      font-weight: bold;
      color: #333;
    }
    .content {
      font-size: 18px;
      color: #999;
      line-height: 20px;
    }
  }

  .list-pic {
    float: right;
    width: 125px;
    height: 100px;
  }
`;

export const ListInfo = styled.div`
  overflow: hidden;
  margin-top: 20px;
  .info {
    float: left;
    margin-right: 20px;
    color: #999;
  }
`;

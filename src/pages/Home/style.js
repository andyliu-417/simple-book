import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 75%;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
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
  padding: 20px 0 10px 0;
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

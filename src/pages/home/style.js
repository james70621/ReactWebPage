import styled from "styled-components";
import challenge from "../../statics/recommend/challenge.png";
import copyright from "../../statics/recommend/copyright.png";
import membership from "../../statics/recommend/membership.png";
import recommend from "../../statics/recommend/recommend.png";

export const HomeWrapper = styled.div`
  overflow:hidden;
  width:960px;
  margin:0 auto;
`;

export const HomeLeft = styled.div`
  margin-left:15px;
  padding-top:30px;
  width:625px;
  float:left;
  .banner-img{
    width:625px;
    height:270px;
  }
`;

export const HomeRight = styled.div`
  width:280px;
  float:right;
`;

export const BackTop = styled.div`
 position:fixed;
 right:100px;
 bottom:100px;
 width:60px;
 height:60px;
 line-height:60px;
 text-align:center;
 font-size:14px;
 border:1px solid #ccc;
`;

export const TopicWrapper = styled.div`
  overflow:hidden;
  padding:20px 0 10px 0;
  margin-left:-18px;
  border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float:left;
  height:32px;
  line-height:32px;
  margin-left:18px;
  margin-bottom:18px;
  padding-right:10px;
  background:#f7f7f7;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  .topic-pic{
    display:block;
    margin-right:10px;
    float:left;
    width:32px;
    height:32px;
  }
`;

export const ListItem = styled.div`
  overflow:hidden;
  padding:20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;
  }
`;

export const ListInfo = styled.div`
  width:500px;
  float:left;
  .title{
    line-height = 27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  .desc{
    line-height:24px;
    font-size:13px;
    color:#999;
  }
`;

export const LoadMore = styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  margin:30px 0;
  background:#a5a5a5;
  text-align:center;
  border-radius:20px;
  color:#fff;
  cursor:pointer;
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width:280px;
`;

export const RecommendItem =styled.div`
  width:280;
  height:50px;
  &.challenge{
    background:url(${challenge});
    background-size:contain;
  }
  &.copyright{
    background:url(${copyright});
    background-size:contain;
  }
  &.membership{
    background:url(${membership});
    background-size:contain;
  }
  &.recommend{
    background:url(${recommend});
    background-size:contain;
  }
`;


export const WriterItem = styled.div`
  overflow:hidden;
  width:280px;
  padding:20px 0;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  .writer-pic{
    display:block;
    width:47px;
    height:47px;
    padding-top:4.5px;
    padding-bottom:4.5px;
    float:left;
    border-radius:24px;
  }
`;

export const WriterInfo = styled.div`
  width:215px;
  float:right;
  line-height:24.01px;
  padding-left:10px;
  padding-bottom:4px;
  font-size:18px;
  color:#333;
  &.likes{
    font-size:12px;
    color:#969696
  }
`;


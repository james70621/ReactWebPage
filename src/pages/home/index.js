import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreators } from "./store";
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from "./style";

class Home extends PureComponent {

  handleScrollTop(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://img.lovepik.com/background/20211022/medium/lovepik-blue-technology-banner-background-material-image_605808260.jpg" alt=""></img>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomedata();
    this.bindEvents();
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.props.changeScrollTopShow)
  }

  bindEvents(){
    window.addEventListener("scroll", this.props.changeScrollTopShow)
  }

}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(["home", "showScroll"])
})

const mapDispatchToProps = (dispatch) => ({
  changeHomedata(){
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop > 100){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})
  

export default connect(mapStateToProps, mapDispatchToProps)(Home);
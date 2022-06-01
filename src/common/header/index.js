import React, {PureComponent} from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators }  from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import { Link } from "react-router-dom";
import {
  HeaderWrapper, 
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
  SearchWrapper
} from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faA, faMagnifyingGlass, faRotate } from '@fortawesome/free-solid-svg-icons';


class Header extends PureComponent{
  constructor(props){
    super(props);
    this.getListArea = this.getListArea.bind(this);
  }

  getListArea() {
    const {
      focused, 
      list,
      mouseIn,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props;
    const newList = list.toJS();
    const pageList = [];

    for (let i = (page-1)*10 ; i < page*10 && newList[i]; i++) {
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      );
    }

    if (mouseIn || focused) {
      return(
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            Popular
            <SearchInfoSwitch
              onClick={() => {handleChangePage(page, totalPage)}}>
              <FontAwesomeIcon className="spin" icon={faRotate}/>
              Change
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    }else {
      return null;
    }
  }

  render(){
    const {
      focused,
      list,
      login,
      handleInputFocus,
      handleInputBlur,
      logout
    } = this.props;

    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo/>
        </Link>
        <Nav>
          <NavItem className="left active">Homepage</NavItem>
          <NavItem className="left">Download</NavItem>
          <Link to="/login">
            {
              login ? 
                <NavItem onClick={logout} className="right">Sign out</NavItem> : 
                <NavItem className="right">Sign in</NavItem>
            }
          </Link>
          <NavItem className="right">
            <FontAwesomeIcon icon={faA} />
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <FontAwesomeIcon 
              className={focused ? "focused iconfont" : "iconfont"}
              icon={faMagnifyingGlass} 
            />
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="./write">
            <Button className="writting">
              <FontAwesomeIcon icon={faPen} />
              {" Write"}
            </Button> 
          </Link>
          
          <Button className="reg">Sign up</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]), //相當於 state.get("header").get("focused")
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalPage: state.getIn(["header", "totalPage"]),
    login: state.getIn(["login", "login"])
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    handleInputFocus(list){
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },

    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    },

    handleMouseEnter(){
      dispatch(actionCreators.MouseEnter());
    },

    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave());
    },

    handleChangePage(page, totalPage){
      dispatch(actionCreators.ChangePage(
        page < totalPage ?
          page + 1 :
          1
      ));
    },

    logout(){
      dispatch(loginActionCreators.logout());
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
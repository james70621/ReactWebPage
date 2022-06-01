import React, {PureComponent} from "react";
import {ListItem, ListInfo, LoadMore} from "../style";
import {connect} from "react-redux";
import {actionCreators} from "../store";
import {Link} from "react-router-dom";

class List extends PureComponent{
  render(){
    const {list, page, getMoreList} = this.props;
    return (
      <div>
        {
          list.map((item,index) => (
            <Link key={index} to={"/detail/" + item.get("id")}>
              <ListItem>
                <img className="list-pic" src={item.get("imgUrl")} alt=""/>
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            </Link>
            
          ))
        }
        <LoadMore onClick={() => getMoreList(page)}>LoadMore</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"])
})

const mapDispatchToProps = (dispatch) => ({
  getMoreList(page){
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
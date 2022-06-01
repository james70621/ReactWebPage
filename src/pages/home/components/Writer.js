import React, {PureComponent} from "react";
import { connect } from "react-redux";
import {WriterItem, WriterInfo} from "../style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons';

class Writer extends PureComponent{
  render(){
    const {list} = this.props;
    return (
      <WriterItem>
        {
          list.map((item) => (
            <div key={item.get("id")}>
              <img className="writer-pic" src={item.get("imgUrl")} alt=""/>
              <WriterInfo>
                {item.get("writerName")}
              </WriterInfo>
              <WriterInfo className="likes">
                <FontAwesomeIcon icon={faThumbsUp}/>
                {item.get("likes")}
              </WriterInfo>
            </div>
          ))
        }
      </WriterItem>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(["home", "writerList"]),
})

export default connect(mapStateToProps, null)(Writer);
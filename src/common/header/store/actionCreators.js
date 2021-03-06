import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";

const changeList = (data) => ({
  type: constants.CHAHGE_LIST,
  data: fromJS(data), 
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const getList = () => {
  return (dispatch) => {
    axios.get("api/headerList.json")
    .then((res) => {
      const data = res.data;
      dispatch(changeList(data.data));
    }).catch((err) =>{
      console.log(err);
    })
  }
};

export const MouseEnter = () => ({
  type:constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type:constants.MOUSE_LEAVE
})

export const ChangePage = (page) => ({
  type:constants.CHANGE_PAGE,
  page
})
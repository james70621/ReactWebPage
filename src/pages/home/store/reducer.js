import { fromJS } from "immutable";
import { constants } from ".";

const defaultState = fromJS({
  topicList: [],
  articleList:[],
  recommendList:[],
  writerList:[],
  articlePage:1,
  showScroll:false
});

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        "topicList": fromJS(action.topicList),
        "articleList":fromJS(action.articleList),
        "recommendList":fromJS(action.recommendList),
        "writerList":fromJS(action.writerList)
      })
    case constants.ADD_ARTICLE_LIST:
      return state.merge({
        "articleList": state.get("articleList").concat(action.list),
        "articlePage": action.nextPage
      });
    case constants.TOGGLE_SCROLL_TOP:
      return state.set("showScroll", action.show)
    default:
      return state;
  }
}

export default reducer;
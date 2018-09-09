import * as actionTypes from "./actionType";
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl:
        "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 2,
      title: "故事",
      imgUrl:
        "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 3,
      title: "读书",
      imgUrl:
        "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }
  ]
});

const reducer_handlers = {
  // [actionTypes.FOO]: (state, action) => {
  //   console.log("reducer:", action.type);
  //   return state.set("key", val);
  // }
};

export default (state = defaultState, action) => {
  if (reducer_handlers.hasOwnProperty(action.type)) {
    console.log("action type: ", action.type);
    return reducer_handlers[action.type](state, action);
  }
  return state;
};

import * as actionTypes from "./actionType";
import { fromJS } from "immutable";

const defaultState = fromJS({
  login: false
});

const reducer_handlers = {
  // [actionTypes.FOO]: (state, action) => {
  //   return state.set("key", val);
  // }
};

export default (state = defaultState, action) => {
  if (reducer_handlers.hasOwnProperty(action.type)) {
    console.log("reducer", action);
    return reducer_handlers[action.type](state, action);
  }
  return state;
};


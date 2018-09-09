import * as actionTypes from "./actionType";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false
});

const reducer_handlers = {
  [actionTypes.FOCUSED]: (state, action) => {
    return state.set("focused", action.data);
  }
};

export default (state = defaultState, action) => {
  if (reducer_handlers.hasOwnProperty(action.type)) {
    console.log("reducer", action);
    return reducer_handlers[action.type](state, action);
  }
  return state;
};

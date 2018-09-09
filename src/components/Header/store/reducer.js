import * as actionTypes from "./actionType";
import { fromJS } from "immutable";

const defaultState = fromJS({
  foo: "foo",
  focused: false
});

const reducer_handlers = {
  [actionTypes.FOO]: (state, action) => {
    return state.set("foo", "new foo");
  },
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

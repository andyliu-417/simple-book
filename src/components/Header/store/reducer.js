import * as actionTypes from "./actionType";
import { fromJS } from "immutable";

const defaultState = fromJS({ foo: "foo" });

const reducer_handlers = {
  [actionTypes.FOO]: (state, action) => {
    console.log("reducer:", action.type);
    return state.set('foo', "new foo");
  }
};

export default (state = defaultState, action) => {
  if (reducer_handlers.hasOwnProperty(action.type)) {
    console.log("action type: ", action.type);
    return reducer_handlers[action.type](state, action);
  }
  return state;
};

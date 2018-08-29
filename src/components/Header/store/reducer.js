import * as actionTypes from "./actionType";

const defaultState = { foo: "foo" };

const reducer_handlers = {
  [actionTypes.FOO]: (state, action) => {
    console.log("reducer:", action.type);
    return state;
  },
  ["RESULT"]: (state, action) => {
    console.log("reducer:", action.type);
    return {foo: action.data};
    ;
  }
};

export default (state = defaultState, action) => {
  if (reducer_handlers.hasOwnProperty(action.type)) {
    console.log("action type: ", action.type);
    return reducer_handlers[action.type](state, action);
  }
  return state;
};

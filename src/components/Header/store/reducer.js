import * as actionTypes from "./actionType";

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FOO:
      return state;
    default:
      return state;
  }
};

import * as actionTypes from "./actionType";

const defaultState = { foo: "foo" };

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FOO:
      console.log("reducer:", action.type);
      return state;
    case "RESULT":
      console.log("reducer:", action.type);
      return {foo: action.data};
    default:
      return state;
  }
};

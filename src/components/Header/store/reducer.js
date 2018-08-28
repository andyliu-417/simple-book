import * as actionTypes from "./actionType";

const defaultState = { foo: "foo" };

const reducer_handlers = {
  [actionTypes.FOO]: (state, action) => {
    console.log("reducer:", action.type);
    return state;
  }
};

export default (state = defaultState, action) => {
  if (action.type) {
    console.log(reducer_handlers);
    console.log(reducer_handlers[action.type]);
    console.log(action.type == actionTypes.FOO);

    return reducer_handlers[actionTypes.FOO](state, action);
  }
  // switch (action.type) {
  //   case actionTypes.FOO:
  //     console.log("reducer:", action.type);
  //     return state;
  //   case "RESULT":
  //     console.log("reducer:", action.type);
  //     return {foo: action.data};
  //   default:
  //     return state;
  // }
};

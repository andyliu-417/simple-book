import * as actionTypes from "./actionType";

const defaultState = { foo: "foo" };

const reducer_handlers = {
    [ACTION_TYPE_1](state, action) {
      console.log('return action 1');
    },
    [ACTION_TYPE_2](state, action) {
      console.log('return action 2');
    }
  }
  
export default (state = defaultState, action) => {
    if(action.type) {
        reducer_handlers[action.type]();
      }
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

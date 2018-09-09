import { put, takeEvery, all, call } from "redux-saga/effects";
import * as actionTypes from "./actionType";

const saga_handlers = {
  [actionTypes.FOO]: function*(action) {
    try {
      yield put({
        type: "RESULT",
        data: "Saga Redux Demo"
      });
    } catch (e) {
      console.log(e);
    }
  }
};

function* saga() {
  yield all([
    takeEvery(
      action => {
        return saga_handlers.hasOwnProperty(action.type) ? action.type : "";
      },
      action => {
        console.log("saga", action);
        return saga_handlers[action.type](action);
      }
    )
  ]);
}

export default saga;

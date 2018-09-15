import { put, takeEvery, all, call } from "redux-saga/effects";
import * as actionTypes from "./actionType";
import { queryUsers } from "../../../service";

const saga_handlers = {
  ["test_fetch"]: function*(action) {
    try {
      const rsp = yield call(queryUsers);
      yield put({ type: "users", data: rsp });
    } catch (e) {
      console.log(e);
    }
  },
  ["load_more"]: function*(action) {
    try {
      yield put({ type: "more_article" });
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

import { fork, all } from "redux-saga/effects";
import { saga as HeaderSaga } from "../components/Header/store"

function* rootSaga(config) {
  yield all([
    fork(HeaderSaga),
  ]);
}

export default rootSaga;

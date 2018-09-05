import { fork, all } from "redux-saga/effects";
import { saga as HeaderSaga } from "../components/Header/store"
import { saga as HomeSaga } from "../pages/Home/store"

function* rootSaga(config) {
  yield all([
    fork(HeaderSaga),
    fork(HomeSaga),
  ]);
}

export default rootSaga;

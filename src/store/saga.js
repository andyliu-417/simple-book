import { fork, all } from "redux-saga/effects";
import { saga as HomeSaga } from "../pages/Home/store"
import { saga as DetailSaga } from "../pages/Detail/store"
import { saga as LoginSaga } from "../pages/Login/store"
import { saga as HeaderSaga } from "../components/Header/store"

function* rootSaga(config) {
  yield all([
    fork(HomeSaga),
    fork(DetailSaga),
    fork(LoginSaga),
    fork(HeaderSaga),
  ]);
}

export default rootSaga;

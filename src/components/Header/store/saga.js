import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from "./actionType";

function* foo(action) {
  try {
    console.log('saga:', action.type);
    yield put({
      type: 'RESULT',
      data: 'Saga Redux Demo'
    });

  } catch (e) {
    console.log(e);
  }
}

function* saga() {
  yield takeEvery(
    action => action.type === actionTypes.FOO,
    foo
  );
}

export default saga;

import { put, takeEvery, delay, all } from 'redux-saga/effects'
import { getLaunches, launchSaga } from './launchesSaga';

 function* incrementAsync(){
  yield delay(100)
  yield put({type: 'INCREMENT_COUNT'})
}

export const incrementAction = () => ({
  type: "INCREMENT_COUNT"
})

export function* watchIncrementAsync() {
  yield takeEvery(incrementAction(), incrementAsync)
}

export default function* rootSaga() {
  yield all([watchIncrementAsync(), launchSaga()])
}

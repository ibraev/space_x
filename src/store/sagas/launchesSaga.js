import { takeEvery, call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../../api';
import { createConfigItemAsync } from '@babel/core';
import { yellow } from '@mui/material/colors';
import {
  getPastLaunchesRequest,
  getPastLaunchesSuccess,
  getPatLaunchesFailure
} from '../actions/launchesAction/launchesActions';
import { GET_PAST_LAUNCHES_REQUEST, GET_PAST_LAUNCHES_SUCCESS } from '../actions/launchesTypes/launchesTypes';

export function* getLaunches() {
  try {
    yield put(getPastLaunchesRequest())
    const response = yield call(api.get('api'))
    yield put(getPastLaunchesSuccess(), response)
  }
  catch (error) {
    yield put(getPatLaunchesFailure(), error)
  }
}

function* getAsyncDataWatcher() {
  yield takeLatest(GET_PAST_LAUNCHES_SUCCESS, getLaunches())
}

export function* launchSaga() {
  yield takeEvery(GET_PAST_LAUNCHES_REQUEST, getAsyncDataWatcher())
}
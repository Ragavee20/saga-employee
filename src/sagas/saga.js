import { call, put, takeLatest } from 'redux-saga/effects';
import  FETCH_DATA  from '../action/action'
import RECEIVED_DATA from '../action/action'
import receivedData from '../action/action';
import { fetchApiData } from '../api';

function* fetchInfo() {
    const data = yield call(fetchApiData);
    yield put(receivedData(data));
    yield put({ type: RECEIVED_DATA, data })
}

export default function* rootSaga() {
    yield takeLatest(FETCH_DATA, fetchInfo);
}

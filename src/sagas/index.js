import { call, put, takeLatest } from 'redux-saga/effects'
import { REQUEST_BOOK, recieveBook, failBook, errorNetwork } from '../actions'
import { fetchData } from './api/api'

export default function * () {
  yield takeLatest(REQUEST_BOOK, getBook)
}

function * getBook ({ payload }) {
  try {
    const data = yield call(fetchData, payload)
    // it could be undefined
    if (data) {
      yield put(recieveBook(data))
    } else {
      yield put(failBook())
    }
  } catch (error) {
    yield put(errorNetwork(error))
  }
}

import { call, put, takeLatest } from 'redux-saga/effects'
import { REQUEST_BOOK, recieveBook } from '../actions'
import { fetchData } from './api/api'

export default function * () {
  yield takeLatest(REQUEST_BOOK, getBook)
}

function * getBook ({ payload }) {
  try {
    const data = yield call(fetchData, payload)
    yield put(recieveBook(data))
    // console.log('data', data)
  } catch (error) {
    console.log('error in saga', error)
  }
}

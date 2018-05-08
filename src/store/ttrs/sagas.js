import { take, put, call, fork } from 'redux-saga/effects'
import api from '../../services/api'
import * as actions from './actions'

const url = 'http://127.0.0.1:8000/'

function* signIn(username, password) {
  try {
    const hash = new Buffer(`${username}:${password}`).toString('base64')
    const signInResponse = yield call(api.get, `${url}signin/`, {
      headers: {
        Authorization: `Basic ${hash}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    // Will use later
    // const studentInfoResponse = yield call(api.get, `${url}students/${signInResponse.id}/`, {
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // })
    // const grade = studentInfoResponse.grade
    // const college = studentInfoResponse.college
    // const department = studentInfoResponse.department
    // const major = studentInfoResponse.major
    // const notRecommends = studentInfoResponse.not_recommends
    // yield put(actions.signInResponse({ username, password, grade, college, department, major, notRecommends }))
    yield put(actions.signInResponse({ username, password }))
  } catch (error) {
    console.log('Invalid user')
  }
}

function* watchSignInRequest() {
  while (true) {
    const { username, password } = yield take(actions.SIGNIN_REQUEST)
    yield call(signIn, username, password)
  }
}

export default function* () {
  yield fork(watchSignInRequest)
}

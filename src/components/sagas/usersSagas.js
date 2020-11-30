import { takeEvery, call, fork, put } from "redux-saga/effects";
import * as actions from "../actions/usersAction";
import * as api from "../api/usersApi";

function* getUsers() {
  try {
    const result = yield call(api.getUsersData);
    yield put(
      actions.getUserSuccess({
        items: result.data.data,
      })
    );
  } catch (e) {
    console.log(e);
  }
}

function* wathGetUsersRequest() {
  yield takeEvery(actions.types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [fork(wathGetUsersRequest)];
export default usersSagas;

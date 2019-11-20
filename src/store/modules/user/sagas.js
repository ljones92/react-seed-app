import { put, takeEvery, call, select } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import * as selectors from './selectors';
import exampleApi from '../../../api/example';

export function* getExampleUsersSaga() {
    try {
        const users = yield select(selectors.selectExampleUsers);

        if (users && users.length > 0) {
            return;
        }
        const data = yield call(exampleApi.getExampleUsers);
        yield put(actions.receiveExampleUsers(data));
    } catch (err) {
        // Handle error here
    }
}

export function* watchGetExampleUsers() {
    yield takeEvery(types.REQUEST_EXAMPLE_USERS, getExampleUsersSaga);
}

export const sagas = [watchGetExampleUsers];

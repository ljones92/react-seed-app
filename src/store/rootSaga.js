import { fork, all } from 'redux-saga/effects';
import { sagas as userSagas } from './modules/user';

const allSagas = [...userSagas];

export default function* rootSaga() {
    yield all(allSagas.map(saga => fork(saga)));
}

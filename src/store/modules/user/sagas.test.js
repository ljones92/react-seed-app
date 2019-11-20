import { expectSaga } from 'redux-saga-test-plan';
import { call, select } from 'redux-saga/effects';
import * as sagas from './sagas';
import * as selectors from './selectors';
import * as types from './types';
import exampleApi from '../../../api/example';

describe('example sagas', () => {
    describe('GetExampleUsersSaga', () => {
        it('gets example users if not already set', () => {
            const users = {
                page: 1,
                per_page: 6,
                total: 12,
                total_pages: 2,
                data: [
                    {
                        id: 1,
                        email: 'george.bluth@reqres.in',
                        first_name: 'George',
                        last_name: 'Bluth',
                        avatar:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'
                    }
                ]
            };

            return expectSaga(sagas.watchGetExampleUsers)
                .provide([
                    [select(selectors.selectExampleUsers), []],
                    [call(exampleApi.getExampleUsers), users]
                ])
                .dispatch({
                    type: types.REQUEST_EXAMPLE_USERS
                })
                .put({
                    type: types.RECEIVE_EXAMPLE_USERS,
                    payload: users
                })
                .silentRun();
        });
    });
});

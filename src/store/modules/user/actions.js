import * as types from './types';

export const requestExampleUsers = () => ({
    type: types.REQUEST_EXAMPLE_USERS
});

export const receiveExampleUsers = exampleUsers => ({
    type: types.RECEIVE_EXAMPLE_USERS,
    payload: exampleUsers
});

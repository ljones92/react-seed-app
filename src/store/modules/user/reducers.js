import * as types from './types';

export default function(
    state = {
        exampleUsers: []
    },
    action
) {
    switch (action.type) {
        case types.RECEIVE_EXAMPLE_USERS:
            return {
                ...state,
                exampleUsers: action.payload
            };

        default:
            return state;
    }
}

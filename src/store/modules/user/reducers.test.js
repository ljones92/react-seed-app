import * as actions from './actions';
import reducer from './reducers';

const users = [
    {
        id: 1,
        email: 'george.bluth@reqres.in',
        first_name: 'George',
        last_name: 'Bluth',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'
    },
    {
        id: 2,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
    }
];

describe('example user reducer', () => {
    const initialState = {
        exampleUsers: []
    };

    describe('RECEIVE_EXAMPLE_USERS', () => {
        const example = actions.receiveExampleUsers(users);
        const result = reducer(initialState, example);
        const expected = {
            ...initialState,
            exampleUsers: users
        };

        it('adds payload to state', () => {
            expect(result).toStrictEqual(expected);
        });
    });
});

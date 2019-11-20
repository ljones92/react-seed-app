import { selectExampleUsers, selectUsersWithEvenId } from './selectors';

describe('example selectors', () => {
    const state = {
        user: {
            exampleUsers: [
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
            ]
        }
    };

    describe('selectExampleUsers', () => {
        it('should return list of all users', () => {
            expect(selectExampleUsers(state)).toEqual([
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
            ]);
        });
    });

    describe('selectUsersWithEvenId', () => {
        it('should return list of users with even ID', () => {
            expect(selectUsersWithEvenId(state)).toEqual([
                {
                    id: 2,
                    email: 'janet.weaver@reqres.in',
                    first_name: 'Janet',
                    last_name: 'Weaver',
                    avatar:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
                }
            ]);
        });
    });
});

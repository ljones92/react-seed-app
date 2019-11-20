import React from 'react';
import { shallow } from 'enzyme';

import { EvenUserList } from '.';

const users = [
    {
        id: 2,
        email: 'george.bluth@reqres.in',
        first_name: 'George',
        last_name: 'Bluth',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'
    },
    {
        id: 4,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
    }
];

describe('EvenUserList', () => {
    let wrapper;

    describe('Users not retrieved', () => {
        beforeEach(() => {
            wrapper = shallow(<EvenUserList userList={[]} />);
        });

        it('displays placeholder text', () => {
            expect(wrapper.find('Placeholder')).toHaveLength(1);
        });
    });

    describe('Users retrieved', () => {
        beforeEach(() => {
            wrapper = shallow(<EvenUserList userList={users} />);
        });

        it('does not display placeholder text', () => {
            expect(wrapper.find('Placeholder')).toHaveLength(0);
        });

        it('displays a user item for everyone in the list', () => {
            expect(wrapper.find('User')).toHaveLength(2);
        });

        it('displays the id, name and email of the user', () => {
            expect(
                wrapper
                    .find('User')
                    .first()
                    .text()
            ).toBe('2 - George Bluth george.bluth@reqres.in');
        });
    });
});

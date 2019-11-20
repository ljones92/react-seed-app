import React from 'react';
import { shallow } from 'enzyme';

import { GetUsersButton } from '.';

describe('GetUsersButton', () => {
    let wrapper;

    describe('Users not retrieved', () => {
        const getUsersMock = jest.fn();

        beforeEach(() => {
            wrapper = shallow(<GetUsersButton getUsers={getUsersMock} />);
        });

        afterEach(() => {
            getUsersMock.mockReset();
        });

        it('displays get users text', () => {
            expect(wrapper.find('Button').text()).toBe('10... Get Users!');
        });

        describe('Click button', () => {
            beforeEach(() => {
                wrapper.find('Button').simulate('click');
            });

            it('calls getUsers', () => {
                expect(getUsersMock).toHaveBeenCalledTimes(1);
            });

            it('sets button to users retrieved', () => {
                expect(wrapper.find('Button').text()).toBe('Users Retrieved!');
            });

            it('does not call getUsers again when clicking on the button', () => {
                wrapper.find('Button').simulate('click');
                expect(getUsersMock).toHaveBeenCalledTimes(1);
            });
        });
    });
});

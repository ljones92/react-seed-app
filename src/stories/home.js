/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import React from 'react';
import { EvenUserList } from '../views/Home/components/EvenUserList';
import { GetUsersButton } from '../views/Home/components/GetUsersButton';

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

storiesOf('Views/Home/EvenUserList', module)
    .add('no users', () => {
        return <EvenUserList userList={[]} />;
    })
    .add('users', () => {
        return <EvenUserList userList={users} />;
    });

storiesOf('Views/Home/GetUsersButton', module).add('default', () => {
    return <GetUsersButton getUsers={() => {}} />;
});

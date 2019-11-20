import React from 'react';
import ConnectedGetUsersButton from './components/GetUsersButton';
import ConnectedEvenUserList from './components/EvenUserList';
import * as Styled from './styles';

export const Home = () => (
    <Styled.Home id="home-view">
        <ConnectedGetUsersButton />
        <ConnectedEvenUserList />
    </Styled.Home>
);

export default Home;

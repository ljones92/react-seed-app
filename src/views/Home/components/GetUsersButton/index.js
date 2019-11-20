import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as Styled from './styles';
import { requestExampleUsers } from '../../../../store/modules/user/actions';
import useInterval from '../../../../hooks/useInterval';

export const GetUsersButton = ({ getUsers }) => {
    const [usersRetrieved, setUsersRetrieved] = useState(false);
    const [timer, setTimer] = useState(10);

    const handleRetrieveUsers = () => {
        if (!usersRetrieved) {
            getUsers();
            setUsersRetrieved(true);
        }
    };

    useInterval(() => {
        if (timer !== 0) {
            setTimer(timer - 1);
        } else if (!usersRetrieved) {
            handleRetrieveUsers();
        }
    }, 1000);

    return (
        <Styled.Button
            id="get-users-button"
            onClick={handleRetrieveUsers}
            type="button"
        >
            {!usersRetrieved && `${timer}... `}
            {usersRetrieved ? 'Users Retrieved!' : 'Get Users!'}
        </Styled.Button>
    );
};

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(requestExampleUsers())
});

GetUsersButton.propTypes = {
    getUsers: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(GetUsersButton);

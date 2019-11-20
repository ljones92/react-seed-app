import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as Styled from './styles';
import { selectUsersWithEvenId } from '../../../../store/modules/user/selectors';

export const EvenUserList = ({ userList }) => (
    <Styled.UserList>
        {userList.length ? (
            <div>
                {userList.map(user => (
                    <Styled.User key={user.id}>
                        <Styled.Highlight>{user.id}</Styled.Highlight> -{' '}
                        {user.first_name}{' '}
                        <Styled.Highlight>{user.last_name}</Styled.Highlight>{' '}
                        {user.email}
                    </Styled.User>
                ))}
            </div>
        ) : (
            <Styled.Placeholder>
                Click to retrieve list of users with an even ID
            </Styled.Placeholder>
        )}
    </Styled.UserList>
);

const mapStateToProps = state => ({
    userList: selectUsersWithEvenId(state)
});

EvenUserList.propTypes = {
    userList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            email: PropTypes.string,
            first_name: PropTypes.string,
            last_name: PropTypes.string,
            avatar: PropTypes.string
        })
    ).isRequired
};

export default connect(mapStateToProps)(EvenUserList);

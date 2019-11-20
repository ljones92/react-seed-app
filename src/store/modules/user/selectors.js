import { createSelector } from 'reselect';

export const selectExampleUsers = state => state.user.exampleUsers || null;

export const selectUsersWithEvenId = createSelector(selectExampleUsers, users =>
    users.filter(user => user.id % 2 === 0)
);

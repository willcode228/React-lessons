import { createSelector } from 'reselect';

export const getUsersSelectorSuper = createSelector(getUsersSelector, (users) => users.filter(u => true));

export const getUsersSelector = (state) => {
    return state.usersPage.users;
}






















export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalCountSelector = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching;
}

export const getIsInProgress = (state) => {
    return state.usersPage.isInProgress;
}

import { usersAPI } from "../Api/api";

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_PAGE = 'SET_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    IS_FETCHING = 'IS_FETCHING',
    IS_PROGRESS = 'IS_PROGRESS';

let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isInProgress: [1,2,3]
}

const findUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                }),
            }

        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                }),
            }

        case SET_USERS: 
            return {
                ...state,
                users: action.users
            }

        case SET_PAGE: 
            return {
                ...state,
                currentPage: action.newCurrentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return{
                ...state,
                totalUsersCount: action.amount
            }

        case IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }

        case IS_PROGRESS: 
            return {
                ...state,
                isInProgress: action.isInProgress 
                        ? [...state.isInProgress, action.userId] 
                        : state.isInProgress.filter(id => id !== action.userId)
            }

        default: 
            return state
    }
}

export const acceptFollow = (userId) => ({
        type: FOLLOW,
        userId
});

export const acceptUnfollow = (userId) => ({
        type: UNFOLLOW,
        userId
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users
});

export const setNewPage = (page) => ({
    type: SET_PAGE,
    newCurrentPage: page
})

export const setTotalUsersCount = (amount) => ({
    type: SET_TOTAL_USERS_COUNT,
    amount
});

export const setLoader = (isFetching) => ({
    type: IS_FETCHING,
    isFetching
});

export const setProgress = (isInProgress, userId) => ({
    type: IS_PROGRESS,
    isInProgress,
    userId
});

export const getUsers = (page, pageSize) => (dispatch) => {
    dispatch(setLoader(true));
    dispatch(setNewPage(page));

    usersAPI.getUsers(page, pageSize)
        .then(response => {
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
            dispatch(setLoader(false));
        })
}

export const follow = (userId) => (dispatch) => {
    dispatch(setProgress(true, userId));

    usersAPI.followUser(userId)
        .then(() => { 
            dispatch(acceptFollow(userId)); 
            dispatch(setProgress(false, userId));
        })
}

export const unfollow = (userId) => (dispatch) => {
    dispatch(setProgress(true, userId));

    usersAPI.unfollowUser(userId)
        .then(() => { 
            dispatch(acceptUnfollow(userId)); 
            dispatch(setProgress(false, userId));
        })
}



export default findUserReducer;
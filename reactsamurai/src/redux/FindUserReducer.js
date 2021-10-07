const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_PAGE = 'SET_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1
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

        default: 
            return state
    }
}

export const followAc = (userId) => ({
        type: FOLLOW,
        userId
});

export const unfollowAc = (userId) => ({
        type: UNFOLLOW,
        userId
});

export const setUsersAc = (users) => ({
    type: SET_USERS,
    users
});

export const setPageAc = (page) => ({
    type: SET_PAGE,
    newCurrentPage: page
})

export const setTotalUsersCountAc = (amount) => ({
    type: SET_TOTAL_USERS_COUNT,
    amount
});

export default findUserReducer;
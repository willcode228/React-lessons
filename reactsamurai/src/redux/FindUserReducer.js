const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_PAGE = 'SET_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    IS_FETCHING = 'IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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

        default: 
            return state
    }
}

export const follow = (userId) => ({
        type: FOLLOW,
        userId
});

export const unfollow = (userId) => ({
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

export default findUserReducer;
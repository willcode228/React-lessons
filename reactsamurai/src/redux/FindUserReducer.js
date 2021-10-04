const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS';

let initialState = {
    users: []
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
                users: [...action.users]
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

export default findUserReducer;
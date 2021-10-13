import { authAPI } from "../Api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default: 
            return state
    }
}

export const setAuthUserData = (data) => ({
        type: SET_USER_DATA,
        data
});

export const auth = () => (dispatch) => {
    authAPI
        .auth()
        .then( response => {
            dispatch(setAuthUserData(response.data));
        });
}


export default authReducer;
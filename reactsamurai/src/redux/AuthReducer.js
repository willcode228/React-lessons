import { authAPI } from "../Api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
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
                isAuth: action.isAuth
            }

        default: 
            return state
    }
}


export const setAuthUserData = (isAuth, data) => ({
        type: SET_USER_DATA,
        data, isAuth
});

export const auth = () => (dispatch) => {
    return authAPI
            .auth()
            .then( response => {
                dispatch(setAuthUserData(!response.resultCode, response.data));
            });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI
        .login(email, password, rememberMe)
        .then((response) => {
            if(response.status === 200 && response.data.resultCode === 0) {
                dispatch(auth());
            } else {
                let messages = response.data.messages.length > 0 
                                    ? response.data.messages[0]
                                    : 'Some error';

                dispatch(stopSubmit('login', {_error: messages}));
            }
        });
}

export const logout = () => (dispatch) => {
    debugger;
    authAPI
        .logout()
        .then((response) => {
            if(response.status === 200 && response.data.resultCode === 0) {
                dispatch(setAuthUserData(false, null));
            }
        });
}


export default authReducer;
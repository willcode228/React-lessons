import { auth } from "./AuthReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED: 
            return {
                ...state,
                initialized: true
            }
        default: 
            return state;
    }
}

export const setInitial = () => ({ type: SET_INITIALIZED });

export const initializedApp = () => (dispatch) => {
    dispatch(auth())
        .then(() => {
            dispatch(setInitial());
        });
}

export default appReducer;

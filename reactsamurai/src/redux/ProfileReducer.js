import { profileAPI } from "../Api/api";

const ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    GET_USER_STATUS = 'GET_USER_STATUS';

let initialState = {
    posts: [],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: 
        
            let newPost = {
                message: action.newPostText, 
                likes: 0, 
                id: state.posts.length + 1
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                textarea: ''
            };
        
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case GET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }

        default: 
            return state;
    }
}

export const addPost = (newPostText) => ({
    type: ADD_POST,
    newPostText
});

export const acceptSetUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setStatus = (status) => ({
    type: GET_USER_STATUS,
    status
})


export const setProfile = (userId) => (dispatch) => {
    profileAPI
        .setProfile(userId)
        .then(data => {
            dispatch(acceptSetUserProfile(data));
        });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
                .then(response => {
                    dispatch(setStatus(response.data));
                });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
                .then(response => {
                    if(!response.data.resultCode) {
                        console.log('update')
                        dispatch(setStatus(status));
                    }
                });
}

export default profileReducer;
import { stopSubmit } from "redux-form";
import { profileAPI } from "../Api/api";

const ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    GET_USER_STATUS = 'GET_USER_STATUS',
    SAVE_PHOTO = 'SAVE_PHOTO';

let initialState = {
    posts: [],
    profile: null,
    status: '',
    photos: null
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

        case SAVE_PHOTO: 
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
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

export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO,
    photos
});


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

export const savePhoto = (photo) => (dispatch) => {
    profileAPI.setPhoto(photo)
            .then(a => {
                dispatch(savePhotoSuccess(a.data.data.photos))
            });
}

export const updateProfileData = (data, userId) => async (dispatch) => {
    let response = await profileAPI.updateProfileData(data, userId);

    if(response.status === 200) {
        dispatch(setProfile(userId));
        return Promise.resolve();
    } else {
        dispatch(stopSubmit('userData', {_error: response.data.message[0]}))
        return Promise.reject(response.data.message[0]);
    }

}

export default profileReducer;
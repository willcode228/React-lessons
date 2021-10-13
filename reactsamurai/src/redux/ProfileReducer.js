import { profileAPI } from "../Api/api";

const ADD_POST = 'ADD-POST',
    CHANGE_POST_AREA = 'CHANGE-POST-TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [],
    textarea: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: 
        
            let newPost = {
                message: state.textarea, 
                likes: 0, 
                id: state.posts.length + 1
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                textarea: ''
            };
        
        case CHANGE_POST_AREA:
            return {
                ...state,
                textarea: action.text
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default: 
            return state;
    }
}

export const addPost = () => ({
    type: ADD_POST
});

export const changePostText = (text) => ({
    type: CHANGE_POST_AREA, 
    text
});

export const acceptSetUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setProfile = (userId) => (dispatch) => {
    profileAPI
        .setProfile(userId)
        .then(data => {
            dispatch(acceptSetUserProfile(data));
        });
}

export default profileReducer;
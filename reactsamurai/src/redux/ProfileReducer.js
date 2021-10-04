const ADD_POST = 'ADD-POST',
    CHANGE_POST_AREA = 'CHANGE-POST-TEXT';

let initialState = {
    posts: [],
    textarea: ''
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

        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const changePostTexActionCreator = (text) => ({
    type: CHANGE_POST_AREA, 
    text
});

export default profileReducer;
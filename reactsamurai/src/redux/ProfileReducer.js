const ADD_POST = 'ADD-POST',
    CHANGE_POST_AREA = 'CHANGE-POST-TEXT';

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const changePostTexActionCreator = (text) => ({
    type: CHANGE_POST_AREA, 
    text
});

const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                message: state.textarea, 
                likes: 0, 
                id: state.posts.length + 1
            }
            state.posts.push(newPost);
            state.textarea = '';
            return state;

        case CHANGE_POST_AREA: 
            state.textarea = action.text;
            return state;

        default: 
            return state;
    }
}

export default profileReducer;
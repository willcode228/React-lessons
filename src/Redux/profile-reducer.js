const addPOST = 'ADD-POST',
      updatePost = 'UPDATE-POST-MESSAGE';

let initialState = {
    postMessage: [
        { id: 1, message: 'HI' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'How are you' },
        { id: 4, message: 'How are you' },
    ],
    textMessage: 'My message here'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case addPOST: 
            let post = { 
                id: state.postMessage.length, 
                message: state.textMessage 
            };
            state.postMessage.push(post);
            state.textMessage = '';
            break;
        case updatePost:
            state.textMessage = action.text;
            break;
        default:
            return state
    }
    return state
}
export const addPostActionCreator = () => ({ type: addPOST });
export const updatePostMessageActionCreator = (newText) => 
        ({
          type: updatePost,
          text: newText
        });
        
export default profileReducer;
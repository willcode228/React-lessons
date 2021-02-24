const addPOST = 'ADD-POST',
      updatePost = 'UPDATE-POST-MESSAGE';

const profileReducer = (state, action) => {
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
const addMessage = 'ADD-DIALOG-MESSAGE',
      updateMessage = 'UPDATE-DIALOG-MESSAGE';

const dialogsReducer = (state, action) => {
    switch(action.type){
        case addMessage:
            let message = {
                id: state.messageData.length,
                message: state.textMessage
            };

            state.textMessage = '';   
            state.messageData.push(message);
            return state
        case updateMessage:
            state.textMessage = action.text;
            return state
        default:
            return state
    }
}

export const addDialogMessageActionCreator = () => ({ type: addMessage });
export const updateDialogMessageActionCreator = (newText) => 
        ({
          type: updateMessage,
          text: newText
        });

export default dialogsReducer;
const ADD_MESSAGE = 'ADD-MESSAGE',
    CHANGE_DIALOGS_AREA = 'CHANGE-DIALOGS-TEXT';

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});

export const changeMessageTexActionCreator = (text) => ({
    type: CHANGE_DIALOGS_AREA, 
    text
});

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE: 
            let newMessage = {
                text: state.textarea,
                id: state.messages.length + 1
            }
        
            state.messages.push(newMessage);
            state.textarea = '';
            return state;

        case CHANGE_DIALOGS_AREA:
            state.textarea = action.text;
            return state;

        default: 
            return state;
    }
}

export default dialogsReducer
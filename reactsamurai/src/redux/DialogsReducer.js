const ADD_MESSAGE = 'ADD-MESSAGE',
    CHANGE_DIALOGS_AREA = 'CHANGE-DIALOGS-TEXT';

let initialState = {
    dialogs: [
        { user: 'Sveta', id: 1},
        { user: 'Sacha', id: 2},
        { user: 'Lera', id: 3},
        { user: 'Nika', id: 4},
        { user: 'Valera', id: 5},
        { user: 'Victor', id: 6},
    ],
    messages: [
        { text: 'Hey', id: 1 },
        { text: 'Hey', id: 2 },
        { text: 'Hey', id: 3 },
        { text: 'Hey', id: 4 },
        { text: 'Hey', id: 5 },
    ],
    textarea: ''
}

const dialogsReducer = (state = initialState, action) => {
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

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});

export const changeMessageTexActionCreator = (text) => ({
    type: CHANGE_DIALOGS_AREA, 
    text
});

export default dialogsReducer
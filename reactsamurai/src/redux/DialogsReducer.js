const ADD_MESSAGE = 'ADD-MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESSAGE: 

            let newMessage = {
                text: action.message,
                id: state.messages.length + 1
            }

            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
            
        default: 
            return state;
    }
}

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    message
});

export default dialogsReducer
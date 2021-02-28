const addMessage = 'ADD-DIALOG-MESSAGE',
      updateMessage = 'UPDATE-DIALOG-MESSAGE';

let initialState = {
    contactsObj: [
        { id: "1", name: "Dima" },
        { id: "2", name: "Lena" },
        { id: "3", name: "Sveta" },
        { id: "4", name: "Anya" },
        { id: "5", name: "Denis" },
        { id: "6", name: "Ivan" },
    ],
    messageData: [
        { id: 1, message: 'HI' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'What did you do?' },
        { id: 4, message: 'I think you must to sleep' },
        { id: 5, message: 'Do you do your homework' },
        { id: 6, message: 'Bye' },
    ],
    textMessage: 'Any message'
}

const dialogsReducer = (state = initialState, action) => {
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
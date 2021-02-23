const addPOST = 'ADD-POST',
      updatePost = 'UPDATE-POST-MESSAGE',
      addMessage = 'ADD-DIALOG-MESSAGE',
      updateMessage = 'UPDATE-DIALOG-MESSAGE';

let store = {
  _state: {
    Dialogs: {
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
      textMessage: 'asdf'
    },
    Profile: {
      postMessage: [
        { id: 1, message: 'HI' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'How are you' },
        { id: 4, message: 'How are you' },
      ],
      textMessage: 'My message here'
    },
    Nav: {
      friend: [
        { name: 'John' },
        { name: 'Danial' },
        { name: 'Lidiya' }
      ]
    }
  },
  getState() {
    return this._state;
  },


  _addPost() {
    let post = { 
      id: this._state.Profile.postMessage.length, 
      message: this._state.Profile.textMessage 
    };
    this._state.Profile.postMessage.push(post);
    this._callSubscriber();
    this._state.Profile.textMessage = '';
  },
  _updatePostMessage(text) {
    this._state.Profile.textMessage = text;
    this._callSubscriber();
  },


  _updateDialogMessage(text) {
    this._state.Dialogs.textMessage = text;
    this._callSubscriber();
  },
  _addDialogMessage() {
    let message = {
      id: this._state.Dialogs.messageData.length,
      message: this._state.Dialogs.textMessage
    };
    this._state.Dialogs.textMessage = '';
    this._state.Dialogs.messageData.push(message);
    this._callSubscriber();

  },


  subscribe(func) {
    this._callSubscriber = func;
  },
  _callSubscriber() { },

  dispatch(action) {
    switch(action.type){
      case addPOST: 
        this._addPost();
        break;
      case updatePost:
        this._updatePostMessage(action.text);
        break;
      case addMessage:
        this._addDialogMessage();
        break;
      case updateMessage:
        this._updateDialogMessage(action.text);
        break;
      default:
        console.error('This action is not defined');
        break;
    }
  }
}

export default store;


export const addPostActionCreator = () => ({ type: addPOST });
export const updatePostMessageActionCreator = (newText) => 
        ({
          type: updatePost,
          text: newText
        });


export const addDialogMessageActionCreator = () => ({ type: addMessage });
export const updateDialogMessageActionCreator = (newText) => 
        ({
          type: updateMessage,
          text: newText
        });
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
      ]
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
  addPost() {
    let post = { 
      id: this._state.Profile.postMessage.length, 
      message: this._state.Profile.textMessage 
    };
    this._state.Profile.postMessage.push(post);
    this._callSubscriber();
    this._state.Profile.textMessage = '';
  },
  updatePostMessage(text) {
    this._state.Profile.textMessage = text;
    this._callSubscriber();
  },
  subscribe(func) {
    this._callSubscriber = func;
  },
  _callSubscriber() { }
}

export default store;
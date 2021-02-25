import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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

  subscribe(func) {
    this._callSubscriber = func;
  },
  _callSubscriber() { },

  dispatch(action) {
    this._state.Profile = profileReducer(this._state.Profile, action);
    this._state.Dialogs = dialogsReducer(this._state.Dialogs, action);
    this._callSubscriber();
  }
}

export default store;


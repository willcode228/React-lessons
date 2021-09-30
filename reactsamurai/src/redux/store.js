import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";

const store = {

    _state: {
        dialogs: {
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
        },
        profile: {
            posts: [],
            textarea: ''
        },
        aside: {
            navLinks: [
                {title: 'Profile', path: '/profile', id: 1},
                {title: 'Massages', path: '/dialogs', id: 2},
                {title: 'News', path: '/news', id: 3},
                {title: 'Music', path: '/music', id: 4},
                {title: 'Settings', path: '/settings', id: 5},
            ],
            friends: [
                {name: 'Lena', id: 1},
                {name: 'Vika', id: 2},
                {name: 'Sacha', id: 3}
            ]
        }
    },

    _rerenderApp() {
        console.log()
    },

    stateSubscriber(observer) {
        this._rerenderApp = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.aside = sidebarReducer(this._state.aside, action);
        
        this._rerenderApp();  
    }
    
}

export default store;
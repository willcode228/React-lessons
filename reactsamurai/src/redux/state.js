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

    addPost() {
        let newPost = {
            message: this._state.profile.textarea, 
            likes: 0, 
            id: this._state.profile.posts.length + 1
        }
        this._state.profile.posts.push(newPost);
        this._rerenderApp();
        this._state.profile.textarea = '';
    },

    changeProfileAreaText(text) {
        this._state.profile.textarea = text;
        this._rerenderApp();
    },

    addMessage() {
        let newMessage = {
            text: this._state.dialogs.textarea,
            id: this._state.dialogs.messages.length + 1
        }
    
        this._state.dialogs.messages.push(newMessage);
        this._rerenderApp();
        this._state.dialogs.textarea = '';
    },

    changeDialogsAreaText(text) {
        this._state.dialogs.textarea = text;
        this._rerenderApp();
    },

    stateSubscriber(observer) {
        this._rerenderApp = observer;
    },

    _rerenderApp() {
        console.log()
    },

    getState() {
        return this._state;
    }
}

export default store;
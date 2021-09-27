let state = {
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
}

let rerenderApp;

export const addPost = () => {
    let newPost = {
        message: state.profile.textarea, 
        likes: 0, 
        id: state.profile.posts.length + 1
    }
    state.profile.posts.push(newPost);
    rerenderApp();
    state.profile.textarea = '';
}

export const changeProfileAreaText = (text) => {
    state.profile.textarea = text;
    rerenderApp();
}

export const addMessage = () => {
    let newMessage = {
        text: state.dialogs.textarea,
        id: state.dialogs.messages.length + 1
    }

    state.dialogs.messages.push(newMessage);
    rerenderApp();
    state.dialogs.textarea = '';
}

export const changeDialogsAreaText = (text) => {
    state.dialogs.textarea = text;
    rerenderApp();
}

export const stateSubscriber = (observer) => {
    rerenderApp = observer;
};


export default state;
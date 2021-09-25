import rerenderEntireTree from "../render";

let state = {
    dialogs: {
        dialogs: [
            { user: 'Sveta', id: "1" },
            { user: 'Sacha', id: "2" },
            { user: 'Lera', id: "3" },
            { user: 'Nika', id: "4" },
            { user: 'Valera', id: "5" },
            { user: 'Victor', id: "6" },
        ],
        messages: [
            { text: 'Hey', id: 1 },
            { text: 'Hey', id: 2 },
            { text: 'Hey', id: 3 },
            { text: 'Hey', id: 4 },
            { text: 'Hey', id: 5 },
        ]
    },
    profile: {
        posts: []
    },
    aside: {
        navLinks: [
            {title: 'Profile', path: '/profile'},
            {title: 'Massages', path: '/dialogs'},
            {title: 'News', path: '/news'},
            {title: 'Music', path: '/music'},
            {title: 'Settings', path: '/settings'},
        ],
        friends: [
            {name: 'Lena'},
            {name: 'Vika'},
            {name: 'Sacha'}
        ]
    }
}

export const addPost = (text) => {
    let newPost = {message: text, likes: 0, id: state.profile.posts.length}
    state.profile.posts.push(newPost);
    rerenderEntireTree(state, addPost);
}

export default state;
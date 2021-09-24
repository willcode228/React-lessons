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
        posts: [
            { message: 'Чики брики', likes: 6, id: 1 },
            { message: 'Чик чирик', likes: 12, id: 2 },
            { message: 'Напас', likes: 99, id: 3 },
            { message: 'Лавандос', likes: 5, id: 4 },
            { message: 'Пачка', likes: 11, id: 5 },
            { message: 'Папирос', likes: 8, id: 6 },
        ]
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
    console.log(state.profile.posts);
}

export default state;
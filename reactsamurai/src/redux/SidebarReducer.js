
let initialState = {
    navLinks: [
        {title: 'Profile', path: '/profile', id: 1},
        {title: 'Massages', path: '/dialogs', id: 2},
        {title: 'News', path: '/news', id: 3},
        {title: 'Music', path: '/music', id: 4},
        {title: 'Settings', path: '/settings', id: 5},
        {title: 'Find User', path: '/find', id: 6},
    ],
    friends: [
        {name: 'Lena', id: 1},
        {name: 'Vika', id: 2},
        {name: 'Sacha', id: 3}
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;
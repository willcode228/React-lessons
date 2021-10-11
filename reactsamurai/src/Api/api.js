import axios from "axios"


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd2cc1721-f2b2-45e7-80e1-3f2114255295'
    }
});


const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.status === 200
            ? response.data : new Error('Data is not throw out of the server'))
}

const followUser = (userId) => {
    return instance
        .post(`follow/${userId}`)
        .then(response => response.status === 200 && !response.data.resultCode
            ? response.data : new Error('Data is not throw out of the server'))
}

const unfollowUser = (userId) => {
    return instance
        .delete(`follow/${userId}`)
        .then(response => response.status === 200 && !response.data.resultCode
            ? response.data : new Error('Data is not throw out of the server'))
}

export const usersAPI = { getUsers, followUser, unfollowUser }
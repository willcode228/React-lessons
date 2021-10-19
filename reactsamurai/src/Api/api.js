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
        .then(response => response.data)
}

const followUser = (userId) => {
    return instance
        .post(`follow/${userId}`)
        .then(response => response.data)
}

const unfollowUser = (userId) => {
    return instance
        .delete(`follow/${userId}`)
        .then(response => response.data)
}

export const usersAPI = { getUsers, followUser, unfollowUser }


const auth = () => {
    return instance
        .get(`auth/me`)
        .then(response => response.data);
}

export const authAPI = {auth}

const setProfile = (userId) => {
    return instance
        .get(`profile/${userId}`)
        .then(response => response.data)
}

const getStatus = (userId) => {
    return instance.get(`profile/status/${userId}`)
}

const updateStatus = (status) => {
    return instance.put('profile/status', {status})
}

export const profileAPI = {setProfile, getStatus, updateStatus};


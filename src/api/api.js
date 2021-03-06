import * as axios from "axios";
import { login } from "../redux/auth-reducer";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "63587ee5-8871-4327-b2c5-ffb2b71c672d"
        }
    }
)

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instance.post(`follow/` + userId)
    },
    unfollow(userId) {
        return instance.delete(`follow/` + userId)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Update API object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status })
    },
}


export const authAPI = {
    me() {
        return instance.get(`auth/me/`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login/`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login/`)
    }
}
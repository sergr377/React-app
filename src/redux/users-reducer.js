const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // { id: 1, photoURL: 'https://avatars.mds.yandex.net/get-pdb/912419/217bc0b0-4e5b-4a01-a6f8-e81f84dedcb1/s1200?webp=false',
        //  followed: true, fullName: 'Dima', status: 'fierd', location: { city: 'Moscow', country: 'Russia' } },
        // { id: 2, photoURL: '',
        //  followed: true, fullName: 'Alexia', status: 'What\'s going one?', location: { city: 'Krakov', country: 'Poland' } },
        // { id: 3, photoURL: '',
        //  followed: true, fullName: 'Sergey', status: 'in progress', location: { city: 'Moscow', country: 'Russia' } },
        // { id: 4, photoURL: '',
        //  followed: false, fullName: 'German', status: 'It\s okay', location: { city: 'Kaunas', country: 'Russia' } },
    ],
    newPostText: 'New post',
};

export const usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                }),
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                }),
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }

        default:
            return state;
    }
}


export const followAC = (userId) => { return { type: FOLLOW, userId } }
export const unfollowAC = (userId) => { return { type: UNFOLLOW, userId } }
export const setUsersAC = (users) => { return { type: SET_USERS, users } }

export default usersReduser

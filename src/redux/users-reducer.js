import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    newPostText: 'New post',
    isFetching: true,
    followingInProgress: []
};

export const usersReducer = (state = initialState, action) => {

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
            return { ...state, users: action.users }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }


        default:
            return state;
    }
}


export const followSuccessAC = (userId) => { return { type: FOLLOW, userId } }
export const unfollowSuccessAC = (userId) => { return { type: UNFOLLOW, userId } }
export const setUsersAC = (users) => { return { type: SET_USERS, users } }
export const setCurrentPageAC = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage } }
export const setTotalUserCountAC = (totalUsersCount) => { return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } }
export const toggleIsFetchingAC = (isFetching) => { return { type: TOGGLE_IS_FETCHING, isFetching } }
export const toggleFollowingProgressAC = (isFetching, userId) => { return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } }

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPageAC(currentPage));
        dispatch(toggleIsFetchingAC(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUserCountAC(data.totalCount));
        });

    }
}

export const unfollow = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccessAC(userId));
                }
                dispatch(toggleFollowingProgressAC(false, userId));
                ;
            });
    }
}

export const follow = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccessAC(userId));
                }
                dispatch(toggleFollowingProgressAC(false, userId));
                ;
            });
    }
}


export default usersReducer

import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC } from '../../redux/users-reducer';



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let MapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}
export default connect(mapStateToProps, MapDispatchToProps)(Users);
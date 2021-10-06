import {connect} from 'react-redux';
import { followAc, setUsersAc, unfollowAc } from '../../redux/FindUserReducer';
import FindUser from './FindUser';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAc(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAc(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAc(users));
        }
    }
};

const FindUserContainer = connect(mapStateToProps, mapDispatchToProps)(FindUser);
export default FindUserContainer;
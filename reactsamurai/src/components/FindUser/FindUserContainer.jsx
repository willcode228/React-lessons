import {connect} from 'react-redux';
import { followAc, setUsersAc, unfollowAc } from '../../redux/FindUserReducer';
import FindUser from './FindUser';

const mapStateToProps = (state) => {
    return{
        users: state.users.users
    }
};


const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => {
        dispatch(followAc(userId));
    },
    unfollow: (userId) => {
        dispatch(unfollowAc(userId))
    },
    setUsers: (users) => {
        dispatch(setUsersAc(users));
    }
});

const FindUserContainer = connect(mapStateToProps, mapDispatchToProps)(FindUser);
export default FindUserContainer;
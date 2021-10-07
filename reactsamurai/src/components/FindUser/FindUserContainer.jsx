import {connect} from 'react-redux';
import { followAc, setPageAc, setTotalUsersCountAc, setUsersAc, unfollowAc } from '../../redux/FindUserReducer';
import FindUser from './FindUser';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setNewPage: (page) => {
            dispatch(setPageAc(page));
        },
        setTotalUsersCount: (amount) => {
            dispatch(setTotalUsersCountAc(amount));
        }
    }
};

const FindUserContainer = connect(mapStateToProps, mapDispatchToProps)(FindUser);
export default FindUserContainer;
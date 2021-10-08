import React from 'react';
import * as axios from 'axios';
import FindUser from './FindUser';
import {connect} from 'react-redux';
import { follow, setLoader, setNewPage, setTotalUsersCount, setUsers, unfollow } from '../../redux/FindUserReducer';
import Loading from '../Loading/Loading';
import { Main } from '../StyledComponents/Main';

class FindUserApi extends React.Component{

    componentDidMount() {
        this.props.setLoader(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                if (response.status === 200) {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                    this.props.setLoader(false);
                }
            })
    }

    setPage = (page) => {
        this.props.setLoader(true);
        this.props.setNewPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                if (response.status === 200) {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                    this.props.setLoader(false);
                }
            })
    }

    render() {
        return (
            <Main>
                <Loading isFetching={this.props.isFetching}/>

                <FindUser users={this.props.users}
                            setPage={this.setPage}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            totalUsersCount={this.props.totalUsersCount}
                            />
            </Main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAc(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAc(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAc(users));
//         },
//         setNewPage: (page) => {
//             dispatch(setPageAc(page));
//         },
//         setTotalUsersCount: (amount) => {
//             dispatch(setTotalUsersCountAc(amount));
//         },
//         setLoader: (isFetching) => {
//             dispatch(setLoaderAc(isFetching));
//         }
//     }
// };

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setNewPage, setTotalUsersCount, setLoader
})(FindUserApi);
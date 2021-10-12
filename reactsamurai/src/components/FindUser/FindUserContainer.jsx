import React from 'react';
import FindUser from './FindUser';
import {connect} from 'react-redux';
import { follow, setLoader, setNewPage, setProgress, setTotalUsersCount, setUsers, unfollow } from '../../redux/FindUserReducer';
import Loading from '../Loading/Loading';
import { Main } from '../StyledComponents/Main';
import { usersAPI } from '../../Api/api';

class FindUserApi extends React.Component{

    componentDidMount() {
        this.setPage();
    }

    setPage = (page = 1) => {
        this.props.setLoader(true);
        this.props.setNewPage(page);

        usersAPI.getUsers(page, this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);
                this.props.setLoader(false);
            })
    }

    follow = (userId) => {
        this.props.setProgress(true, userId);
        usersAPI.followUser(userId)
            .then(() => { 
                this.props.follow(userId); 
                this.props.setProgress(false, userId);
            })
    }

    unfollow = (userId) => {
        this.props.setProgress(true, userId);
        usersAPI.unfollowUser(userId)
        .then(() => { 
            this.props.unfollow(userId); 
            this.props.setProgress(false, userId);
        })
    }

    render() {
        return (
            <Main>
                <Loading isFetching={this.props.isFetching}/>

                <FindUser users={this.props.users}
                            setPage={this.setPage}
                            setProgress={this.setProgress}
                            follow={this.follow}
                            unfollow={this.unfollow}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            totalUsersCount={this.props.totalUsersCount}
                            isInProgress={this.props.isInProgress}
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
        isInProgress: state.usersPage.isInProgress
    }
};

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setNewPage, setTotalUsersCount, setLoader, setProgress
})(FindUserApi);


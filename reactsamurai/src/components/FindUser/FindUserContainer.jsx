import React from 'react';
import FindUser from './FindUser';
import {connect} from 'react-redux';
import { follow, getUsers, unfollow } from '../../redux/FindUserReducer';
import Loading from '../common/Loading/Loading';
import { Main } from '../StyledComponents/Main';

class FindUserApi extends React.Component{

    componentDidMount() {
        this.setPage();
    }

    setPage = (page = 1) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    follow = (userId) => {
        this.props.follow(userId);
    }

    unfollow = (userId) => {
        this.props.unfollow(userId);
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
    getUsers, follow, unfollow
})(FindUserApi);



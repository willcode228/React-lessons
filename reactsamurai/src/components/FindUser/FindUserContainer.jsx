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
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
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
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
            .then(response => {
                if (response.status === 200) {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                    this.props.setLoader(false);
                }
            })
    }

    follow = (userId) => {

        axios
            .post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
                withCredentials: true,
                headers: {
                    'API-KEY': 'd2cc1721-f2b2-45e7-80e1-3f2114255295'
                }
            })
            .then(response => {
                if (response.status === 200 && !response.data.resultCode) {
                    this.props.follow(userId);
                }
            })

    }

    unfollow = (userId) => {

        axios
            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
                withCredentials: true,
                headers: {
                    'API-KEY': 'd2cc1721-f2b2-45e7-80e1-3f2114255295'
                }
            })
            .then(response => {
                if (response.status === 200 && !response.data.resultCode) {
                    this.props.unfollow(userId);
                }
            })
    }

    render() {
        return (
            <Main>
                <Loading isFetching={this.props.isFetching}/>

                <FindUser users={this.props.users}
                            setPage={this.setPage}
                            follow={this.follow}
                            unfollow={this.unfollow}
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

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setNewPage, setTotalUsersCount, setLoader
})(FindUserApi);
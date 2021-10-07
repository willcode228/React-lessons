import React from 'react';
import s from './FindUser.module.css';
import { Main } from "../StyledComponents/Main";
import User from './User/User';
import * as axios from 'axios';

class FindUser extends React.Component{

    getUsers() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                if (response.status === 200) {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            });
    }

    componentDidMount() {
        this.getUsers.bind(this)();
    }

    setPage = (page) => {
        this.props.setNewPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                if (response.status === 200) {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            });
    }

    render() {

        let usersBatch = this.props.users.map(user => <User follow={this.props.follow}
            unfollow={this.props.unfollow}
            key={user.id}
            data={user} />);

        let pagesPaginationCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pagesPagination = [];

        for(let i = 1; i <= pagesPaginationCount; i++) {
            pagesPagination.push(
        <span className={this.props.currentPage === i 
                                ? `${s.selectedPage} ${s.pagePagination}` : `${s.pagePagination}`} 
                        key={i}
                        onClick={ () => { this.setPage(i) } }>
                    {i}
                </span>
            );
        }

        return (
            <Main className={s.users}>
    
                <h2 className={s.title}>Users</h2>

                <div className={s.pages}>
                    {pagesPagination}
                </div>

                <div className={s.users__list}>
                    {usersBatch}
                </div>

                <button className={s.users__more} onClick={ this.getUsers.bind(this) }>Show More</button>
            </Main>
        )
    }
}

export default FindUser;
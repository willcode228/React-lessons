import React from 'react';
import s from './FindUser.module.css';
import { Main } from "../StyledComponents/Main";
import User from './User/User';
import * as axios from 'axios';

class FindUser extends React.Component{

    getUsers() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                if (response.status === 200) {
                    this.props.setUsers(response.data.items)
                }
            });
    }

    componentDidMount() {
        this.getUsers.bind(this)();
    }

    render() {

        let usersBatch = this.props.users.map(user => <User follow={this.props.follow}
            unfollow={this.props.unfollow}
            key={user.id}
            data={user} />);

        return (
            <Main className={s.users}>
                <h2 className={s.title}>Users</h2>

                <div className={s.users__list}>
                    {usersBatch}
                </div>

                <button className={s.users__more} onClick={ this.getUsers.bind(this) }>Show More</button>
            </Main>
        )
    }
}

export default FindUser;
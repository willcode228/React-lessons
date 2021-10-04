import s from './FindUser.module.css';
import { Main } from "../StyledComponents/Main";
import User from './User/User';

const FindUser = (props) => {

    if (!props.users.length) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiT-yyLmJNm-LFIkIuz04Wd-sOUYRrpt-bQ&usqp=CAU',
                    fullName: 'Xui Drocheniy',
                    note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus rem suscipit deserunt odio, illo aut omnis in dolore deleniti vitae, sequi explicabo. Minima, alias cum distinctio sit modi quas voluptatem.',
                    location: { country: 'Ukraine', city: 'Kirovograd' },
                    followed: true
                },
                {
                    id: 2,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiT-yyLmJNm-LFIkIuz04Wd-sOUYRrpt-bQ&usqp=CAU',
                    fullName: 'Xui Drocheniy',
                    note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus rem suscipit deserunt odio, illo aut omnis in dolore deleniti vitae, sequi explicabo. Minima, alias cum distinctio sit modi quas voluptatem.',
                    location: { country: 'Ukraine', city: 'Kirovograd' },
                    followed: false
                },
                {
                    id: 3,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiT-yyLmJNm-LFIkIuz04Wd-sOUYRrpt-bQ&usqp=CAU',
                    fullName: 'Xui Drocheniy',
                    note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus rem suscipit deserunt odio, illo aut omnis in dolore deleniti vitae, sequi explicabo. Minima, alias cum distinctio sit modi quas voluptatem.',
                    location: { country: 'Ukraine', city: 'Kirovograd' },
                    followed: true
                },
            ]
        );
    }

    let users1 = props.users.map(user => <User follow={props.follow}
        unfollow={props.unfollow}
        key={user.id}
        data={user} />);

    return (
        <Main className={s.users}>
            <h2 className={s.title}>Users</h2>

            <div className={s.users__list}>
                {users1}
            </div>

            <button className={s.users__more}>Show More</button>
        </Main>
    );
}

export default FindUser;
import { Main } from '../UI/Main';
import MyPosts from './MyPosts/Myposts';
// import s from './Profile.module.css';
import ProfileHead from './ProfileHead/ProfileHead';
import User from './User/User';

const Profile = () => {
    return (
        <Main>
            <ProfileHead />
            <User />
            <MyPosts />
        </Main>
    );
}

export default Profile;
import MyPosts from './MyPosts/Myposts';
import s from './Profile.module.css';
import ProfileHead from './ProfileHead/ProfileHead';
import User from './User/User';

const Profile = () => {
    return (
        <div className={`${s.profile} profile`}>
            <ProfileHead />
            <User />
            <MyPosts />
        </div>
    );
}

export default Profile;
import { Main } from '../StyledComponents/Main';
import MyPosts from './MyPosts/Myposts';
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
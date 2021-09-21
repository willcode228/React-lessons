import { Main } from '../StyledComponents/Main';
import MyPosts from './MyPosts/Myposts';
import ProfileHead from './ProfileHead/ProfileHead';
import User from './User/User';

const Profile = (props) => {
    return (
        <Main>
            <ProfileHead />
            <User />
            <MyPosts messages={props.data.posts}/>
        </Main>
    );
}

export default Profile;
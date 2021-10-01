import { Main } from '../StyledComponents/Main';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileHead from './ProfileHead/ProfileHead';
import User from './User/User';

const Profile = (props) => {
    return (
        <Main>
            <ProfileHead />
            <User />
            <MyPostsContainer store={props.store}/>
        </Main>
    );
}

export default Profile;
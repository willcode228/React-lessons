import { Main } from '../StyledComponents/Main';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileHead from './ProfileHead/ProfileHead';
import User from './User/User';

const Profile = (props) => {

    return (
        <Main>
            <ProfileHead />
            <User profile={props.profile} 
                status={props.status} 
                updateStatus={props.updateStatus}
                isAuth={props.isAuth}
                userId={props.userId}
                savePhoto={props.savePhoto}/>
            <MyPostsContainer />
        </Main>
    );
}

export default Profile;
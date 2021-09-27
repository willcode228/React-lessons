import { Main } from '../StyledComponents/Main';
import MyPosts from './MyPosts/Myposts';
import ProfileHead from './ProfileHead/ProfileHead';
import User from './User/User';

const Profile = (props) => {
    return (
        <Main>
            <ProfileHead />
            <User />
            <MyPosts messages={props.data.posts} textarea={props.data.textarea} dispatch={props.dispatch}/>
        </Main>
    );
}

export default Profile;
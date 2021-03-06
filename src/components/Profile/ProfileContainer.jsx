import { connect } from 'react-redux';
import { addPostActionCreator, updatePostMessageActionCreator } from '../../Redux/profile-reducer';
import Profile from './Profile';

const mapStateToProps = (state) => {
    return {
        posts: state.Profile.postMessage,
        textMessage: state.Profile.textMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => { dispatch(updatePostMessageActionCreator(text)) },
        addPost: () => { dispatch(addPostActionCreator()) }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
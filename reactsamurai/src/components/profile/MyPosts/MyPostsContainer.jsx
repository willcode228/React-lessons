import MyPosts from "./Myposts";
import { addPostActionCreator, changePostTexActionCreator } from '../../../redux/ProfileReducer';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.profile.posts,
        textarea: state.profile.textarea
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            const action = addPostActionCreator();
            dispatch(action);
        },
        changePostText: (text) => {
            const action = changePostTexActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
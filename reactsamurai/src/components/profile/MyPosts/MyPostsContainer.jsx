import MyPosts from "./Myposts";
import { addPost, changePostText } from '../../../redux/ProfileReducer';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.profile.posts,
        textarea: state.profile.textarea
    }
}

export default connect(mapStateToProps, {
    addPost, changePostText
})(MyPosts);

import MyPosts from "./Myposts";
import { addPost, changePostText } from '../../../redux/ProfileReducer';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.profilePage.posts,
        textarea: state.profilePage.textarea
    }
}

export default connect(mapStateToProps, {
    addPost, changePostText
})(MyPosts);

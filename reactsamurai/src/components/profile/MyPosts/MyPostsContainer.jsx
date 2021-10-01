import MyPosts from "./Myposts";
import { addPostActionCreator, changePostTexActionCreator } from '../../../redux/ProfileReducer';

const MyPostsContainer = (props) => {

    const state = props.store.getState();

    const addPost = () => {
        const action = addPostActionCreator();
        props.store.dispatch(action);
    }
    
    const changePostText = (text) => {
        const action = changePostTexActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts addPost={addPost} 
                changePostText={changePostText}
                messages={state.profile.posts}
                textarea={state.profile.textarea}/>
    );
}

export default MyPostsContainer;
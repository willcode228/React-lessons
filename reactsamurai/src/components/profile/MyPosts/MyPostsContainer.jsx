import MyPosts from "./Myposts";
import { addPostActionCreator, changePostTexActionCreator } from '../../../redux/ProfileReducer';
import StoreContext from "../../../storeContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                const state = store.getState();

                const addPost = () => {
                    const action = addPostActionCreator();
                    store.dispatch(action);
                }
                
                const changePostText = (text) => {
                    const action = changePostTexActionCreator(text);
                    store.dispatch(action);
                }

                return (
                    <MyPosts addPost={addPost} 
                            changePostText={changePostText}
                            messages={state.profile.posts}
                            textarea={state.profile.textarea}/>
                );
            }
        }</StoreContext.Consumer>
    );
}

export default MyPostsContainer;
import React from 'react';
import { addPostActionCreator, changePostTexActionCreator } from '../../../redux/ProfileReducer';
import s from './Myposts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.messages.map(obj => <Post message={obj.message} likesCount={obj.likes} key={obj.id}/>);

    const addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    const changeProfileAreaText = (e) => {
        let action = changePostTexActionCreator(e.target.value);
        props.dispatch(action);
    }

    return (
        <div className={s.myPost}>

            <h2 className={s.myPost__title}>My Posts</h2>

            <div className={s.myPost__form}>
                <textarea placeholder="Your new post" value={props.textarea} onChange={ changeProfileAreaText }/>
                <button type="submit" onClick={ addPost }>Sent</button>
            </div>

            <div className={s.posts}>
                {posts}
            </div>

        </div>
    );
}

export default MyPosts;
import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.messages.map(obj => <Post message={obj.message} likesCount={obj.likes} key={obj.id}/>);

    const add = () => {
        props.addPost();
    }

    const change = (e) => {
        props.changePostText(e.target.value);
    }

    return (
        <div className={s.myPost}>

            <h2 className={s.myPost__title}>My Posts</h2>

            <div className={s.myPost__form}>
                <textarea placeholder="Your new post" value={props.textarea} onChange={ change }/>
                <button type="submit" onClick={ add }>Sent</button>
            </div>

            <div className={s.posts}>
                {posts}
            </div>

        </div>
    );
}

export default MyPosts;
import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.messages.map(obj => <Post message={obj.message} likesCount={obj.likes}/>);

    let textareaLink = React.createRef();

    const addPost = () => {
        console.log(textareaLink.current.value);
    }

    return (
        <div className={s.myPost}>

            <h2 className={s.myPost__title}>My Posts</h2>

            <div className={s.myPost__form}>
                <textarea placeholder="Your new post" ref={textareaLink} />
                <button type="submit" onClick={ addPost }>Sent</button>
            </div>

            <div className={s.posts}>
                {posts}
            </div>

        </div>
    );
}

export default MyPosts;
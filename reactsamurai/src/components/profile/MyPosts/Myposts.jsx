import s from './Myposts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.messages.map(obj => <Post message={obj.message} likesCount={obj.likes}/>);

    return (
        <div className={s.myPost}>

            <h2 className={s.myPost__title}>My Posts</h2>

            <form className={s.myPost__form}>
                <textarea placeholder="Your new post" />
                <button type="submit">Sent</button>
            </form>

            <div className={s.posts}>
                {posts}
            </div>

        </div>
    );
}

export default MyPosts;
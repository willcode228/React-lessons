import s from './Myposts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let dataPosts = [
        {message: 'Чики брики', likes: 6, id: 1},
        {message: 'Чик чирик', likes: 12, id: 2},
        {message: 'Напас', likes: 99, id: 3},
        {message: 'Лавандос', likes: 5, id: 4},
        {message: 'Пачка', likes: 11, id: 5},
        {message: 'Папирос', likes: 8, id: 6},
    ];

    let dataPostsElement = dataPosts.map(obj => <Post message={obj.message} likesCount={obj.likes}/>);

    return (
        <div className={s.myPost}>

            <h2 className={s.myPost__title}>My Posts</h2>

            <form className={s.myPost__form}>
                <textarea placeholder="Your new post" />
                <button type="submit">Sent</button>
            </form>

            <div className={s.posts}>
                {dataPostsElement}
            </div>

        </div>
    );
}

export default MyPosts;
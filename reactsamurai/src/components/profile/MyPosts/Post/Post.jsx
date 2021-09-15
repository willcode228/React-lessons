import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.posts__item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiT-yyLmJNm-LFIkIuz04Wd-sOUYRrpt-bQ&usqp=CAU" alt="" />
            <div>
                <p>{props.message} </p>
                <h6>Likes: {props.likes}</h6>
            </div>
        </div>
    );
}

export default Post;
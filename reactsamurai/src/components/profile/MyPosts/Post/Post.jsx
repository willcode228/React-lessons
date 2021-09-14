import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.posts__item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiT-yyLmJNm-LFIkIuz04Wd-sOUYRrpt-bQ&usqp=CAU" alt="" />
            <p>Чики брики</p>
        </div>
    );
}

export default Post;
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsModal/FormsModal';
import s from './Myposts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.messages.map(obj => <Post message={obj.message} likesCount={obj.likes} key={obj.id}/>);

    const add = (post) => {
        props.addPost(post.newPostText);
    }

    return (
        <div className={s.myPost}>

            <h2 className={s.myPost__title}>My Posts</h2>

            <ReduxAddPostForm onSubmit={add}/>

            <div className={s.posts}>
                {posts}
            </div>

        </div>
    );
}

let maxLength10 = maxLengthCreator(10);
const AddPostForm = (props) => {
    return (
        <form className={s.myPost__form} onSubmit={props.handleSubmit}>
            <Field name='newPostText' component={Textarea} placeholder='New post...' validate={[required, maxLength10]}/>
            <button>Sent</button>
        </form>
    );
}

const ReduxAddPostForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm)

export default MyPosts;
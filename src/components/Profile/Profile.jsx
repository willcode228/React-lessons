import React from 'react'
// import { addPostActionCreator, updatePostMessageActionCreator } from '../../Redux/profile-reducer';
const { default: MyPosts } = require("./MyPosts/MyPosts")


const Profile = (props) => {

    let textarea = React.createRef(); 
    
    let onAddPost = () => {
        props.addPost()
    }

    let changePost = () => {
        let text = textarea.current.value;
        props.updatePostText(text);
    }

    return (
        <section className="content__main app__wrapper-item">
            <div className="content__main-img">
                <img src="https://lh3.googleusercontent.com/proxy/KsZbM974MAERPNTuERWL-IP0ZK5v3zKAll67xs-55Iplx1FeM3FWhgeOUw2KbCNiqtzxonOVWR9qvk99hoWhcfS-7tcdpp9GseWhLf_-PYzRPsSNYIWZooI_VoHdjLJRLRT67sblrrsR8b-azX8BgDMGG9E" alt=""></img>
            </div>
            <div className="content__main-person">
                <div className="content__main-ava">
                    <img src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" alt=""></img>
                </div>
                <div className="content__main-info">
                    <h3>Name</h3>
                    <h3>City</h3>
                    <h3>Education</h3>
                </div>
            </div>
            <div className="input__form">
                <textarea placeholder="Your message" 
                            onChange={ changePost }  
                            value={props.textMessage} 
                            ref={textarea}/>
                <input type="submit" onClick={ onAddPost } />
            </div>
            <MyPosts posts={props.posts}/>
        </section>
    );
}
export default Profile;
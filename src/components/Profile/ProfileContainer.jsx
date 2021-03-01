import React from 'react'
import { addPostActionCreator, updatePostMessageActionCreator } from '../../Redux/profile-reducer';
import Profile from './Profile';


const ProfileContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => { if(state.Profile.textMessage) 
        props.store.dispatch(addPostActionCreator()); 
    }

    let changePost = (text) => {
        props.store.dispatch(updatePostMessageActionCreator(text));
    }
    return (<Profile updatePostText={changePost} 
                    addPost={addPost} 
                    posts={state.Profile.postMessage}
                    textMessage={state.Profile.textMessage}/>);
}
export default ProfileContainer;
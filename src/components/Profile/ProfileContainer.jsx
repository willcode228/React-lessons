import React from 'react'
import { addPostActionCreator, updatePostMessageActionCreator } from '../../Redux/profile-reducer';
import StoreContext from '../../StoreContext';
import Profile from './Profile';


const ProfileContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => { if(state.Profile.textMessage) 
                        store.dispatch(addPostActionCreator()); 
                    }
                
                    let changePost = (text) => {
                        store.dispatch(updatePostMessageActionCreator(text));
                    }

                    return (<Profile updatePostText={changePost} 
                            addPost={addPost} 
                            posts={state.Profile.postMessage}
                            textMessage={state.Profile.textMessage}/>);
                }
                
            }
        </StoreContext.Consumer>);
}
export default ProfileContainer;
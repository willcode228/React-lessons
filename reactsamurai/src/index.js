import ReactDOM from 'react-dom';
import React from "react";
import App from "./App";
import './index.css';
import store from './redux/state';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                addMessage={store.addMessage.bind(store)}
                addPost={store.addPost.bind(store)}
                newMessageText={store.changeDialogsAreaText.bind(store)}
                newPostText={store.changeProfileAreaText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
store.stateSubscriber(rerenderEntireTree);

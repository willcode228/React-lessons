import ReactDOM from 'react-dom';
import React from "react";
import App from "./App";
import './index.css';
import state, { addMessage, changeDialogsAreaText, changeProfileAreaText, stateSubscriber } from './redux/state';
import { addPost } from './redux/state';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App data={state}
                addPost={addPost}
                newPostText={changeProfileAreaText}
                addMessage={addMessage}
                newMessageText={changeDialogsAreaText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
stateSubscriber(rerenderEntireTree);

import ReactDOM from 'react-dom';
import React from "react";
import App from "./App";
import './index.css';
import store from './redux/state';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
store.stateSubscriber(rerenderEntireTree);

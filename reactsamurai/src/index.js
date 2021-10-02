import ReactDOM from 'react-dom';
import React from "react";
import App from "./App";
import './index.css';
import store from './redux/redux-store';
import { Provider } from './storeContext';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App state={state}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

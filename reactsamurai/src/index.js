import ReactDOM from 'react-dom';
import React from "react";
import App from "./App";
import './index.css';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App state={store.getState()} />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);






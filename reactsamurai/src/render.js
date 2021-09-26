import ReactDOM from 'react-dom';
import React from "react";
import App from "./App";

const rerenderEntireTree = (state, addPost, changeProfileAreaText) => {
    ReactDOM.render(
<React.StrictMode>
            <App data={state} addPost={addPost} change={changeProfileAreaText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerenderEntireTree;
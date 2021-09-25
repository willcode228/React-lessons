import ReactDOM from 'react-dom';
import React from "react";
import App from "./App";

const rerenderEntireTree = (state, addPost) => {
    ReactDOM.render(
<React.StrictMode>
            <App data={state} addPost={addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerenderEntireTree;
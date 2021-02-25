import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/store';

const domRenderer = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>

        <App data={store.getState()} 
             dispatch={store.dispatch.bind(store)}/>
             
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
domRenderer();

store.subscribe(domRenderer);

reportWebVitals();
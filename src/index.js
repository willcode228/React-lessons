import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';

const domRenderer = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider value={store}>
          <App data={store.getState()}/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
domRenderer();

store.subscribe(domRenderer);

reportWebVitals();
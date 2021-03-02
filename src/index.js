import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store';
// import ContextProvider from './StoreContext';
import StoreContext from './StoreContext';

const domRenderer = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App data={store.getState()}/>
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
domRenderer();

store.subscribe(domRenderer);

reportWebVitals();
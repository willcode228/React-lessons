import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let data = {
  Dialogs: {
    dialogs: [
      { user: 'Sveta', id: "1" },
      { user: 'Sacha', id: "2" },
      { user: 'Lera', id: "3" },
      { user: 'Nika', id: "4" },
      { user: 'Valera', id: "5" },
      { user: 'Victor', id: "6" },
    ],
    messages: [
      { text: 'Hey', id: 1 },
      { text: 'Hey', id: 2 },
      { text: 'Hey', id: 3 },
      { text: 'Hey', id: 4 },
      { text: 'Hey', id: 5 },
    ]
  },
  Profile: {
    posts: [
      { message: 'Чики брики', likes: 6, id: 1 },
      { message: 'Чик чирик', likes: 12, id: 2 },
      { message: 'Напас', likes: 99, id: 3 },
      { message: 'Лавандос', likes: 5, id: 4 },
      { message: 'Пачка', likes: 11, id: 5 },
      { message: 'Папирос', likes: 8, id: 6 },
    ]
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

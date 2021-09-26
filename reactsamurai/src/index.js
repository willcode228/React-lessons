import './index.css';
import state, { changeProfileAreaText } from './redux/state';
import { addPost } from './redux/state';
import rerenderEntireTree from './render';
rerenderEntireTree(state, addPost, changeProfileAreaText);


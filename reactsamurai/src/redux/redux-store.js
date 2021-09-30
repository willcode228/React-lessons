import {combineReducers, createStore} from 'redux'
import dialogsReducer from './DialogsReducer';
import profileReducer from './ProfileReducer';
import sidebarReducer from './SidebarReducer';

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    aside: sidebarReducer
});

let store = createStore(reducers);

export default store;
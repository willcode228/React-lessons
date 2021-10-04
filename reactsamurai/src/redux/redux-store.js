import {combineReducers, createStore} from 'redux'
import dialogsReducer from './DialogsReducer';
import findUserReducer from './FindUserReducer';
import profileReducer from './ProfileReducer';
import sidebarReducer from './SidebarReducer';

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    aside: sidebarReducer,
    users: findUserReducer
});

let store = createStore(reducers);

export default store;
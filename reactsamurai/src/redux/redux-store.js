import {combineReducers, createStore} from 'redux'
import dialogsReducer from './DialogsReducer';
import findUserReducer from './FindUserReducer';
import profileReducer from './ProfileReducer';
import sidebarReducer from './SidebarReducer';
import authReducer from './AuthReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogs: dialogsReducer,
    aside: sidebarReducer,
    usersPage: findUserReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store;
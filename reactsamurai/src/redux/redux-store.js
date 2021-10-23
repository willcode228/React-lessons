import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import dialogsReducer from './DialogsReducer';
import findUserReducer from './FindUserReducer';
import profileReducer from './ProfileReducer';
import sidebarReducer from './SidebarReducer';
import authReducer from './AuthReducer';
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogs: dialogsReducer,
    aside: sidebarReducer,
    usersPage: findUserReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
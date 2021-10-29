import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import dialogsReducer from './DialogsReducer';
import findUserReducer from './FindUserReducer';
import profileReducer from './ProfileReducer';
import sidebarReducer from './SidebarReducer';
import authReducer from './AuthReducer';
import {reducer as formReducer} from 'redux-form'
import appReducer from './AppReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogs: dialogsReducer,
    aside: sidebarReducer,
    usersPage: findUserReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store.getState();
export default store;
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    Dialogs: dialogsReducer,
    Profile: profileReducer,
    Nav: navbarReducer
}) 

let store = createStore(reducers);

export default store;
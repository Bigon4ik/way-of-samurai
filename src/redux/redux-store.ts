import {combineReducers, createStore} from 'redux';
import profileReducer from './Profile-Reducer';
import dialogsReducer from './Dialogs-Reducer';
import sidebarReducer from './sidbar-Reducer';
import usersReducer from './Users-Reducer';

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export type ReduxStateType = ReturnType<typeof rootReducers>

const store = createStore(rootReducers);

export type ReduxStoreType = typeof store


export default store;
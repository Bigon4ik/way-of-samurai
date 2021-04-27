import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './Profile-Reducer';
import dialogsReducer from './Dialogs-Reducer';
import sidebarReducer from './sidbar-Reducer';
import usersReducer from './Users-Reducer';
import authReducer from './auth-Reducer';
import thunkMiddleware from 'redux-thunk';

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer
})

export type ReduxStateType = ReturnType<typeof rootReducers>

const store = createStore(rootReducers,applyMiddleware(thunkMiddleware));

export type ReduxStoreType = typeof store


export default store;
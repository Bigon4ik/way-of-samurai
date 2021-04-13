import {combineReducers, createStore} from 'redux';
import profileReducer from './Profile-Reducer';
import dialogsReducer from './Dialogs-Reducer';
import sidebarReducer from './sidbar-Reducer';

const rootReducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
    })

export type ReduxStateType = ReturnType<typeof rootReducers>

const store = createStore(rootReducers);

export type ReduxStoreType = typeof store


export default store;
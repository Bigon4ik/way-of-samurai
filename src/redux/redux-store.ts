import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {AddPostAC, SetStatus, SetUserProfile} from './Profile-Reducer';
import dialogsReducer, {AddMessageAC} from './Dialogs-Reducer';
import sidebarReducer from './sidbar-Reducer';
import usersReducer, {
    followSoc,
    setCountPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollowSoc
} from './Users-Reducer';
import authReducer, {setAuthUsersData} from './auth-Reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer, {initializedSuccess} from './app-Reducer';

export type ActionsType =
    ReturnType<typeof AddPostAC>
    // | ReturnType<typeof ChangeNewTextAC>
    | ReturnType<typeof AddMessageAC>
    // | ReturnType<typeof ChangeNewTextDialogsAC>
    | ReturnType<typeof followSoc>
    | ReturnType<typeof unfollowSoc>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCountPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof SetUserProfile>
    | ReturnType<typeof setAuthUsersData>
    | ReturnType<typeof toggleIsFollowingProgress>
    | ReturnType<typeof SetStatus>
    | ReturnType<typeof initializedSuccess>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app:appReducer,
    form:formReducer
})

export type ReduxStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type ReduxStoreType = typeof store


export default store;
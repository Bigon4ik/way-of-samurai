import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {StoreType} from './redux/store'
import store, {ReduxStateType, ReduxStoreType} from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import MyPostsContainer from './components/Profile/MyPosts/MyPostsContainer';
import UsersOld from './components/Users/UsersOld';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

// type AppPropsType = {
//     state: RootStateType
//     addPost:(postText:string)=>void
// }
// type PropsType = {
//     store?: ReduxStoreType
// }

const App: React.FC = (props) => {
    // const state: ReduxStateType = props.store.getState()
    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer
                           // dataProfile={state.profilePage.posts}
                           // message={state.profilePage.messageForNewPost}
                           // dispatch={props.store.dispatch.bind(props.store)}
                           //addPostCallback={props.store.addPost.bind(props.store)}
                           //changeNewTextCallback={props.store.changeNewText.bind(props.store)}
                       />}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}
                />
                <Route path='/users'
                       render={() => <UsersContainer/>}
                />
            </div>
        </div>

    );
}

export default App;

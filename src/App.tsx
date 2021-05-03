import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App: React.FC = (props) => {
    return (

        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}
                />
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}
                />
                <Route path='/users'
                       render={() => <UsersContainer/>}
                />
                <Route path='/login'
                       render={() => <Login/>}
                />
            </div>
        </div>

    );
}

export default App;

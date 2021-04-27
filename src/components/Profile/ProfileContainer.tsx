import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType, PostType, RootStateType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ReduxStateType, ReduxStoreType} from '../../redux/redux-store';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {InitialStateType} from '../../redux/Users-Reducer';
import {getUserProfile} from '../../redux/Profile-Reducer';
import {Redirect, withRouter} from 'react-router-dom';
import {usersAPI} from '../../api/api';

export type ProfilePropsType = {
    store?: ReduxStoreType
    //  dataProfile: Array<PostType>
    //  //addPostCallback: (postText: string) => void
    // // changeNewTextCallback:any
    //  message: string
    //  dispatch: (action: ActionsType) => void
}
type ContactProfileType={
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosProfileType={
    small:string
    large:string
}
type ProfileContainerType={
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactProfileType
    photos: PhotosProfileType
}
type MapStateToPropsType = {
    profile: ProfileContainerType
    isAuth:boolean
}

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )

    }
}

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth:state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);


//54
//59.24.51


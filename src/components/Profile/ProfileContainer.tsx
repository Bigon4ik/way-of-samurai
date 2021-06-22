import React from 'react';
import {ReduxStateType, ReduxStoreType} from '../../redux/redux-store';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, updateStatus} from '../../redux/Profile-Reducer';
import {Redirect, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

export type ProfilePropsType = {
    store?: ReduxStoreType
    //  dataProfile: Array<PostType>
    //  //addPostCallback: (postText: string) => void
    // // changeNewTextCallback:any
    //  message: string
    //  dispatch: (action: ActionsType) => void
}
type ContactProfileType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosProfileType = {
    small: string
    large: string
}
type ProfileContainerType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactProfileType
    photos: PhotosProfileType
}
type MapStateToPropsType = {
    profile: ProfileContainerType
    status:string
    authorizedUserId:number | null
    authorizedIsAuth:boolean
}

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )

    }
}

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status:state.profilePage.status,
        authorizedUserId:state.auth.id,
        authorizedIsAuth:state.auth.isAuth,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)



import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ReduxStoreType} from '../../redux/redux-store';
import {updateStatus} from '../../redux/Profile-Reducer';

export type ProfilePropsType = {
    store?:ReduxStoreType
   //  dataProfile: Array<PostType>
   //  //addPostCallback: (postText: string) => void
   // // changeNewTextCallback:any
   //  message: string
   //  dispatch: (action: ActionsType) => void
}
const Profile = (props: any) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>

        </div>
    )
}
export default Profile;
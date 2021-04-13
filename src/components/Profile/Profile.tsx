import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType, PostType, RootStateType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ReduxStateType, ReduxStoreType} from '../../redux/redux-store';

export type ProfilePropsType = {
    store:ReduxStoreType
   //  dataProfile: Array<PostType>
   //  //addPostCallback: (postText: string) => void
   // // changeNewTextCallback:any
   //  message: string
   //  dispatch: (action: ActionsType) => void
}
const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
                // posts={props.dataProfile}
                // messageForNewPost={props.message}
                // dispatch={props.dispatch.bind(props.dispatch)}
                //addPost={props.addPostCallback}
                //changeNewTextCallback={props.changeNewTextCallback}
            />

        </div>
    )
}
export default Profile;
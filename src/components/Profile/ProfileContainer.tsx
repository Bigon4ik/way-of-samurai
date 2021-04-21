import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType, PostType, RootStateType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ReduxStateType, ReduxStoreType} from '../../redux/redux-store';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';

export type ProfilePropsType = {
    store?:ReduxStoreType
   //  dataProfile: Array<PostType>
   //  //addPostCallback: (postText: string) => void
   // // changeNewTextCallback:any
   //  message: string
   //  dispatch: (action: ActionsType) => void
}
class ProfileContainer extends React.Component<any, any>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
            this.props.setUserProfile(response.data)

        })
    }

    render(){
        return (
                <Profile {...this.props} />
        )

    }


}
export default connect() (ProfileContainer);



//54 vipusk
//59.24.51
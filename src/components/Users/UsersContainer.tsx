import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {ReduxStateType} from '../../redux/redux-store';
import {followAC, setUsersAC, unfollowAC} from '../../redux/Users-Reducer';

const mapStateToProps = (state:ReduxStateType) => {
    return {
        users:state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch:any)=>{
    return{
        follow:(userID:any)=>{
            dispatch(followAC(userID))
        },
        unfollow:(userID:any)=>{
            dispatch(unfollowAC(userID))
        },
        setUsers:(users:any)=>{
            dispatch(setUsersAC(users))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
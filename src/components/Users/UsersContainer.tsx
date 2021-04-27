import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {ReduxStateType} from '../../redux/redux-store';
import {
    follow, getUsersThunkCreator,
    InitialStateType,
    setCountPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingProgress,
    unfollow,
    UserType
} from '../../redux/Users-Reducer';
import axios from 'axios';
import Users from './Users';
import preloader from '../../assets/img/200.gif'
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    //followingInProgress:any

}
type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    // setUsers: (users: Array<UserType>) => void
    // setCountPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    // toggleIsFetching: (isFething: boolean) => void
    //toggleIsFollowingProgress: (followingInProgress: any,userId:number) => void
    getUsersThunkCreator:(currentPage:number,pageSize: number)=>void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType, UserType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        //
        // })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize);

        // this.props.toggleIsFetching(true)
        // this.props.setCountPage(pageNumber)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        // })

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.usersPage.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   //toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   //followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        //followingInProgress:state.usersPage.followingInProgress

    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userID: number) => {
//             dispatch(follow(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollow(userID))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsers(users))
//         },
//         setCountPage: (pageNumber: number) => {
//             dispatch(setCountPage(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCount(totalCount))
//         },
//         toggleIsFetching: (isFething: boolean) => {
//             dispatch(toggleIsFetching(isFething))
//         }
//
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    // setUsers,
    setCountPage,
    // setTotalUsersCount,
    // toggleIsFetching,
    //toggleIsFollowingProgress,
    getUsersThunkCreator
})(UsersContainer);
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {ReduxStateType} from '../../redux/redux-store';
import {
    followAC,
    InitialStateType,
    setCountPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../redux/Users-Reducer';
import axios from 'axios';
import Users from './Users';

type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize:number
    totalUsersCount:number
    currentPage:number

}
type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: Array<UserType>) => void
    setCountPage:(pageNumber:number)=>void
    setTotalUsersCount: (totalCount:number) =>void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType, UserType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        })
    }
    onPageChanged=(pageNumber:number)=>{
        this.props.setCountPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })

    }


    render() {


        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.usersPage.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />

    }
}


const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,

    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCountPage: (pageNumber:number) => {
            dispatch(setCountPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount:number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
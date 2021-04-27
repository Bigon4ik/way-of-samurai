import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {ReduxStateType} from '../../redux/redux-store';
import {InitialStateType, UserType} from '../../redux/Users-Reducer';
import {getAuthUsersData} from '../../redux/auth-Reducer';
import {authAPI} from '../../api/api';

type MapStateToPropsType = {


}
type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: Array<UserType>) => void
    setCountPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFething: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
       this.props.getAuthUsersData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        isAuth:state.auth.isAuth,
        login:state.auth.login
    }
}
export default connect(mapStateToProps, {getAuthUsersData})(HeaderContainer);
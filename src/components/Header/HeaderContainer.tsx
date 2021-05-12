import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {ReduxStateType} from '../../redux/redux-store';
import {UserType} from '../../redux/Users-Reducer';
import {getAuthUsersData, logout} from '../../redux/auth-Reducer';

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
export default connect(mapStateToProps, {getAuthUsersData,logout})(HeaderContainer);
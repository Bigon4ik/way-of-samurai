import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {ReduxStateType} from '../../redux/redux-store';
import {InitialStateType, UserType} from '../../redux/Users-Reducer';
import {setAuthUsersData} from '../../redux/auth-Reducer';

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUsersData(id,email,login)
            }

        })
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
export default connect(mapStateToProps, {setAuthUsersData})(HeaderContainer);
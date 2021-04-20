import React from 'react';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import {UserType} from '../../redux/Users-Reducer';
import Users from './Users';

// class UsersAPIComponent extends React.Component<UsersPropsType, UserType> {
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
//             this.props.setUsers(response.data.items)
//             this.props.setTotalUsersCount(response.data.totalCount)
//
//         })
//     }
//     onPageChanged=(pageNumber:number)=>{
//         this.props.setCountPage(pageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
//             this.props.setUsers(response.data.items)
//         })
//
//     }
//
//
//     render() {
//
//
//         return <Users totalUsersCount={this.props.totalUsersCount}
//                       pageSize={this.props.pageSize}
//                       currentPage={this.props.currentPage}
//                       onPageChanged={this.onPageChanged}
//                       users={this.props.usersPage.users}
//                       follow={this.props.follow}
//                       unfollow={this.props.unfollow}
//         />
//
//     }
// }
//

//export default UsersAPIComponent;
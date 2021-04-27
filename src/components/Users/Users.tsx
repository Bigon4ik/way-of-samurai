import React from 'react';
import s from './User.module.css'
import UserPhoto from '../../assets/img/user.png'
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {usersAPI} from '../../api/api';

let Users = (props: any) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <>
            <div>
                {pages.map(p => {
                    // @ts-ignore
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>
            <div className={s.users}>
                {
                    props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : UserPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some((id:any)=>id===u.id)} onClick={() => {
                                    props.unFollow(u.id)}}>
                                    Unfollow</button>
                                : <button disabled={props.followingInProgress.some((id:any)=>id===u.id)} onClick={() => {
                                    props.follow(u.id)}}>
                                    Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        </>
    )
}


export default Users;
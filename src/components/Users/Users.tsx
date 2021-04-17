import React from 'react';
import s from './User.module.css'
import {UsersPropsType} from './UsersContainer';


export function Users(props: UsersPropsType) {
    if (props.usersPage.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://c0.klipartz.com/pngpicture/744/721/sticker-png-male-avatar-avatar-man-television-cartoon-user-svg-person.png',
                    followed: true,
                    fullName: 'Anton',
                    status: 'I am a boss',
                    location: {country: 'Belarus', city: 'Minsk'}
                },
                {
                    id: 2,
                    photoUrl: 'https://c0.klipartz.com/pngpicture/744/721/sticker-png-male-avatar-avatar-man-television-cartoon-user-svg-person.png',
                    followed: true,
                    fullName: 'Dima',
                    status: 'I am a proger',
                    location: {country: 'Belarus', city: 'Grodno'}
                },
                {
                    id: 3,
                    photoUrl: 'https://c0.klipartz.com/pngpicture/744/721/sticker-png-male-avatar-avatar-man-television-cartoon-user-svg-person.png',
                    followed: false,
                    fullName: 'Victor',
                    status: 'Good man',
                    location: {country: 'USA', city: 'Boston'}
                },
            ],
        )
    }

    return (
        <div className={s.users}>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;
import React from 'react';
import s from './User.module.css'


const Users = (props: any) => {
    if(props.users.length===0){
        props.setUsers({ users: [
                {
                    id: 1,
                    photoUrl:'https://c0.klipartz.com/pngpicture/744/721/sticker-png-male-avatar-avatar-man-television-cartoon-user-svg-person.png',
                    followed: true,
                    fullName: 'Anton',
                    status: 'I am a boss',
                    location: {country: 'Belarus', city: 'Minsk'}
                },
                {
                    id: 2,
                    photoUrl:'https://c0.klipartz.com/pngpicture/744/721/sticker-png-male-avatar-avatar-man-television-cartoon-user-svg-person.png',
                    followed: true,
                    fullName: 'Dima',
                    status: 'I am a proger',
                    location: {country: 'Belarus', city: 'Grodno'}
                },
                {id: 3,
                    photoUrl:'https://c0.klipartz.com/pngpicture/744/721/sticker-png-male-avatar-avatar-man-television-cartoon-user-svg-person.png',
                    followed: false,
                    fullName: 'Victor',
                    status: 'Good man',
                    location: {country: 'USA', city: 'Boston'}},
            ],})
    }

    return (
        <div className={s.users}>
            {
                props.users.map((u: { id: any; }) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> :
                                <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
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
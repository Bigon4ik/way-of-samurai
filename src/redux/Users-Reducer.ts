import {ActionsType, PostType, ProfilePageType} from './store';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export const setUsersAC = (users:any) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}
export const followAC = (userID:any) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}
export const unfollowAC = (userID:any) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}
const initialState: any = {
    // users: [
    //     {
    //         id: 1,
    //         photoUrl:'https://c0.klipartz.com/pngpicture/744/721/sticker-png-male-avatar-avatar-man-television-cartoon-user-svg-person.png',
    //         followed: true,
    //         fullName: 'Anton',
    //         status: 'I am a boss',
    //         location: {country: 'Belarus', city: 'Minsk'}
    //     },
    //     {
    //         id: 2,
    //         photoUrl:'https://c0.klipartz.com/pngpicture/744/721/sticker-png-male-avatar-avatar-man-television-cartoon-user-svg-person.png',
    //         followed: true,
    //         fullName: 'Dima',
    //         status: 'I am a proger',
    //         location: {country: 'Belarus', city: 'Grodno'}
    //     },
    //     {id: 3,
    //         photoUrl:'https://c0.klipartz.com/pngpicture/744/721/sticker-png-male-avatar-avatar-man-television-cartoon-user-svg-person.png',
    //         followed: false,
    //         fullName: 'Victor',
    //         status: 'Good man',
    //         location: {country: 'USA', city: 'Boston'}},
    // ],

}

const usersReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users:[...state.users],
                users: state.users.map((u: { id: any; }) => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                //users:[...state.users],
                users: state.users.map((u: { id: any; }) => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET_USERS':{
            return {
                ...state,users:[...state.users,...action.users]
            }
        }


        default:
            return state;
    }
}
export default usersReducer;
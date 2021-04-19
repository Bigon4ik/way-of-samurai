import {ActionsType, PostType, ProfilePageType} from './store';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type UserLocationType={
    city:string
    country:string
}
export type UserType = {
    id: number
    photos: any
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}
export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}
export type InitialStateType = {
    users: Array<UserType>

}
const initialState: InitialStateType = {
    users: []
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

};

const usersReducer = (state: InitialStateType = initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users:[...state.users],
                users: state.users.map(u => {
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
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}
export default usersReducer;
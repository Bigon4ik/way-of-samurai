import {ActionsType, PostType, ProfilePageType} from './store';


const SET_USERS_DATA = 'SET_USERS_DATA'


type UserLocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photos: any
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}

export const setAuthUsersData = ( id: number | null, email: string |null, login: string | null) => {
    return {
        type: 'SET_USERS_DATA',
        data:{id,email,login}
    } as const
}


export type InitialStateType = {
    id: number | null
    email: string |null
    login: string | null
    isAuth: boolean


}
const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,

};

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true

                }


        default:
            return state;
    }
}
export default authReducer;
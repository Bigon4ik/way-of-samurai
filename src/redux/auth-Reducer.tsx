import {ActionsType, PostType, ProfilePageType} from './store';
import {authAPI} from '../api/api';


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

const setAuthUsersData = ( id: number | null, email: string |null, login: string | null) => {
    return {
        type: 'SET_USERS_DATA',
        data:{id,email,login}
    } as const
}
export const getAuthUsersData = () =>
    (dispatch:any)=>{
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUsersData(id,email,login))
            }

        })
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
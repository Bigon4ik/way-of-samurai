import {authAPI} from '../api/api';
import {ActionsType} from './redux-store';


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

export const setAuthUsersData = ( id: number | null, email: string |null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET_USERS_DATA',
        payload:{id,email,login,isAuth}
    } as const
}
export const getAuthUsersData = () =>
    (dispatch:any)=>{
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login, isAuth} = response.data.data
                dispatch(setAuthUsersData(id,email,login,true))
            }

        })
}
export const login = (email:string,password:string,rememberMe:boolean) =>
    (dispatch:any)=>{
        authAPI.login(email,password,rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUsersData())
            }
        })
}
export const logout = () =>
    (dispatch:any)=>{
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUsersData(null,null,null,false))
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
                ...action.payload,
                }


        default:
            return state;
    }
}
export default authReducer;
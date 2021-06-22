import {authAPI} from '../api/api';
import {ActionsType} from './redux-store';
import {stopSubmit} from 'redux-form';
import {isBoolean} from 'util';
import {getAuthUsersData} from './auth-Reducer';


const SET_INITIALIZED = 'SET_INITIALIZED'


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

export const initializedSuccess = () => {
    return {
        type: 'SET_INITIALIZED',
    } as const
}
export const initializeApp = () => (dispatch:any)=>{
    let promise= dispatch(getAuthUsersData())
    promise.then(()=>{
        dispatch(initializedSuccess)
    })


}



export type InitialStateType = {
    initialized: boolean,

}
const initialState: InitialStateType = {
    initialized: false,
};

const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized:true,
                }


        default:
            return state;
    }
}
export default appReducer;
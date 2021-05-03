import {ActionsType} from './redux-store';

export type SidebarType = {}

const initialState: SidebarType ={

}

export const sidebarReducer = (state=initialState, action:ActionsType) => {
    return state


}

export default sidebarReducer;
import {ActionsType, DiologPageType, PostType, ProfilePageType} from './store';

const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_TEXT_MESSAGE = 'CHANGE-NEW-TEXT-MESSAGE'

export type MessageType = {
    message: string
}
export type DiologType = {
    id: number
    name: string
}
export const AddMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}
export const ChangeNewTextDialogsAC = (newTextMessage: string) => {
    return {
        type: 'CHANGE-NEW-TEXT-MESSAGE',
        newTextMessage: newTextMessage,
    } as const
}

const initialState: DiologPageType = {
    messageForNewMessage: '',
    dialogs: [
        {id: 1, name: 'Pavel'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Sergei'},
        {id: 4, name: 'Maks'},
        {id: 5, name: 'Artem'},
        {id: 6, name: 'Oleg'}]as Array<DiologType>,
    message: [
        {message: 'axaxax'},
        {message: 'you'},
        {message: 'hello'},
    ]as Array<MessageType>
}
export type InitialStateType= typeof initialState

const dialogsReducer = (state:InitialStateType = initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messageForNewMessage: '',
                message: [...state.message, {message: state.messageForNewMessage}],
            }
        }
        case CHANGE_NEW_TEXT_MESSAGE: {
            return {
                ...state,
                messageForNewMessage: action.newTextMessage}

        }
        default:
            return state
    }
}

export default dialogsReducer;


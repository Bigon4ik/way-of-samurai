import {ActionsType, PostType, ProfilePageType} from './store';

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'

export const AddPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}
export const ChangeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText,
    } as const
}
const initialState: ProfilePageType = {
    messageForNewPost: 'iiiiiit',
    posts: [
        {id: 1, message: 'Hi,hom are you', likesCount: 12},
        {id: 2, message: 'Hello my freends', likesCount: 42},
        {id: 3, message: 'Hello my', likesCount: 2}
    ],

}

const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.messageForNewPost,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            }
        }
        case CHANGE_NEW_TEXT: {
            return {
                ...state,
                messageForNewPost: action.newText
            }
        }
        default:
            return state;
    }
}
export default profileReducer;
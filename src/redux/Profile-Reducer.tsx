import {usersAPI} from '../api/api';
import {PostType} from '../components/Profile/MyPosts/MyPosts';
import {ActionsType} from './redux-store';

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
export const SetUserProfile = (profile:any) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    } as const
}
export const getUserProfile = (userId:number) => (dispatch:any)=> {
    usersAPI.getProfile(userId).then(response => {
        dispatch(SetUserProfile(response.data))
    })
    }


type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
    profile:null
}
const initialState: ProfilePageType = {
    messageForNewPost: 'iiiiiit',
    posts: [
        {id: 1, message: 'Hi,hom are you', likesCount: 12},
        {id: 2, message: 'Hello my freends', likesCount: 42},
        {id: 3, message: 'Hello my', likesCount: 2}
    ],
    profile:null

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
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}
export default profileReducer;
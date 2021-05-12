import {profileAPI, usersAPI} from '../api/api';
import {PostType} from '../components/Profile/MyPosts/MyPosts';
import {ActionsType} from './redux-store';

const ADD_POST = 'ADD-POST'
// const CHANGE_NEW_TEXT = 'CHANGE_NEW_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

export const AddPostAC = (messageForNewPost:any) => {
    return {
        type: ADD_POST,
        messageForNewPost
    } as const
}
// export const ChangeNewTextAC = (newText: string) => {
//     return {
//         type: CHANGE_NEW_TEXT,
//         newText: newText,
//     } as const
// }
export const SetUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const SetStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
export const getUserProfile = (userId: number) => (dispatch: any) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(SetUserProfile(response.data))
    })
}
export const getStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(SetStatus(response.data))
    })
}
export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetStatus(status))
            }
        })
}


type ProfilePageType = {
    posts: Array<PostType>
    //messageForNewPost: string
    profile: null
    status: string
}
const initialState: ProfilePageType = {
    //messageForNewPost: 'iiiiiit',
    posts: [
        {id: 1, message: 'Hi,hom are you', likesCount: 12},
        {id: 2, message: 'Hello my freends', likesCount: 42},
        {id: 3, message: 'Hello my', likesCount: 2}
    ],
    profile: null,
    status: '',

}

const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.messageForNewPost,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                // messageForNewPost: ''
            }
        }
        // case CHANGE_NEW_TEXT: {
        //     return {
        //         ...state,
        //         messageForNewPost: action.newText
        //     }
        // }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}
export default profileReducer;
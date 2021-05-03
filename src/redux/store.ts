import {AddPostAC, ChangeNewTextAC, SetUserProfile} from './Profile-Reducer';
import {AddMessageAC, ChangeNewTextDialogsAC} from './Dialogs-Reducer';
import {
    followSoc,
    setCountPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingProgress,
    unfollowSoc
} from './Users-Reducer';
import {setAuthUsersData} from './auth-Reducer';

// type MessageType = {
//     message: string
// }
//  type DiologType = {
//     id: number
//     name: string
// }

// export type ProfilePageType = {
//     posts: Array<PostType>
//     //addPost?: any
//     //changeNewTextCallback?: any
//     messageForNewPost: string
// }

// export type SidebarType = {}
// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DiologPageType
//     sidebar: SidebarType
// }
// export type StoreType = {
//     _state: RootStateType,
//     // changeNewText: (newText: string) => void
//     // addPost: (postText: string) => void
//     _onChange: () => void
//     subscribe: (collback: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsType) => void
// }

// export type ActionsType =
//     ReturnType<typeof AddPostAC>
//     | ReturnType<typeof ChangeNewTextAC>
//     | ReturnType<typeof AddMessageAC>
//     | ReturnType<typeof ChangeNewTextDialogsAC>
//     | ReturnType<typeof followSoc>
//     | ReturnType<typeof unfollowSoc>
//     | ReturnType<typeof setUsers>
//     | ReturnType<typeof setCountPage>
//     | ReturnType<typeof setTotalUsersCount>
//     | ReturnType<typeof toggleIsFetching>
//     | ReturnType<typeof SetUserProfile>
//     | ReturnType<typeof setAuthUsersData>
//     | ReturnType<typeof toggleIsFollowingProgress>




// const store: StoreType = {
//     _state: {
//         profilePage: {
//             dispatch: () => {
//             },
//             //addPost: [],
//             //changeNewTextCallback: ' ',
//             messageForNewPost: 'iiiiiit',
//             posts: [
//                 {id: 1, message: 'Hi,hom are you', likesCount: 12},
//                 {id: 2, message: 'Hello my freends', likesCount: 42},
//                 {id: 3, message: 'Hello my', likesCount: 2},
//             ],
//
//         },
//         dialogsPage: {
//             dispatch: () => {
//             },
//             messageForNewMessage: '',
//             dialogs: [
//                 {id: 1, name: 'Pavel'},
//                 {id: 2, name: 'Dima'},
//                 {id: 3, name: 'Sergei'},
//                 {id: 4, name: 'Maks'},
//                 {id: 5, name: 'Artem'},
//                 {id: 6, name: 'Oleg'}],
//             message: [
//                 {message: 'axaxax'},
//                 {message: 'you'},
//                 {message: 'hello'},
//             ]
//         },
//         sidebar: {}
//     },
//     _onChange() {
//         console.log('state changed')
//     },
//     // changeNewText(newText: string) {
//     //     this._state.profilePage.messageForNewPost = newText
//     //     this._onChange()
//     // },
//     // addPost(postText: string) {
//     //     const newPost: PostType = {
//     //         id: new Date().getTime(),
//     //         message: postText,
//     //         likesCount: 0
//     //     }
//     //     this._state.profilePage.posts.push(newPost)
//     //     this._onChange();
//     //     this._state.profilePage.messageForNewPost = ''
//     // },
//     subscribe(callback: () => void) {
//         this._onChange = callback
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//
//         this._onChange()
//
//         // if (action.type === 'ADD-POST') {
//         //     const newPost: PostType = {
//         //         id: new Date().getTime(),
//         //         message: action.postText,
//         //         likesCount: 0
//         //     }
//         //     this._state.profilePage.posts.push(newPost)
//         //     this._onChange();
//         //     this._state.profilePage.messageForNewPost = ''
//         // } else if (action.type === 'CHANGE-NEW-TEXT') {
//         //     this._state.profilePage.messageForNewPost = action.newText
//         //     this._onChange()
//         // } else if (action.type === 'ADD-MESSAGE') {
//         //     const newMessage: MessageType = {
//         //         message: action.messageText,
//         //     }
//         //     this._state.dialogsPage.message.push(newMessage)
//         //     this._onChange();
//         //     this._state.dialogsPage.messageForNewMessage = ''
//         // } else if (action.type === 'CHANGE-NEW-TEXT-MESSAGE') {
//         //     this._state.dialogsPage.messageForNewMessage = action.newTextMessage
//         //     this._onChange()
//         // }
//     }
// }
//
// export default store

// const store: StoreType = {
//     _state: {
//         profilePage: {
//             dispatch: () => {
//             },
//             //addPost: [],
//             //changeNewTextCallback: ' ',
//             messageForNewPost: 'iiiiiit',
//             posts: [
//                 {id: 1, message: 'Hi,hom are you', likesCount: 12},
//                 {id: 2, message: 'Hello my freends', likesCount: 42},
//                 {id: 3, message: 'Hello my', likesCount: 2},
//             ],
//
//         },
//         dialogsPage: {
//             dispatch: () => {
//             },
//             messageForNewMessage: '',
//             dialogs: [
//                 {id: 1, name: 'Pavel'},
//                 {id: 2, name: 'Dima'},
//                 {id: 3, name: 'Sergei'},
//                 {id: 4, name: 'Maks'},
//                 {id: 5, name: 'Artem'},
//                 {id: 6, name: 'Oleg'}],
//             message: [
//                 {message: 'axaxax'},
//                 {message: 'you'},
//                 {message: 'hello'},
//             ]
//         },
//         sidebar: {}
//     },
//     _onChange() {
//         console.log('state changed')
//     },
//
//     subscribe(callback: () => void) {
//         this._onChange = callback
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//
//         this._onChange()
//
//     }
// }
//
// export default store

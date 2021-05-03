import React from 'react';
import {AddPostAC, ChangeNewTextAC} from '../../../redux/Profile-Reducer';
import MyPosts from './MyPosts';
import {ReduxStateType, ReduxStoreType} from '../../../redux/redux-store';
import {connect} from 'react-redux';

type MyPostsContainerType = {
    store: ReduxStoreType
}
// const MyPostsContainer = ({store}: MyPostsContainerType ) => {
//
//     let state = store.getState();
//
//     // const postsElement = props.posts
//     //     .map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
//
//     const addPost = () => {
//         //props.addPost(props.messageForNewPost)
//         store.dispatch(AddPostAC(state.profilePage.messageForNewPost))
//     }
//     const newTextChangeHandler = (text:string) => {
//         //props.changeNewTextCallback(e.currentTarget.value)
//         store.dispatch(ChangeNewTextAC(text))
//     }
//     return <MyPosts posts={state.profilePage.posts} messageForNewPost={state.profilePage.messageForNewPost} addPost={addPost}  newTextChangeHandler={newTextChangeHandler}/>
// }

let mapStateToProps = (state: ReduxStateType) => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(AddPostAC())
        },
        newTextChangeHandler: (text: string) => {

            dispatch(ChangeNewTextAC(text))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
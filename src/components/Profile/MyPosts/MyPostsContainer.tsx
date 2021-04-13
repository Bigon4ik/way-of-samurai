import React, {ChangeEvent} from 'react';
import Post from './Post/Post'
import {ProfilePageType} from '../../../redux/store';
import {AddPostAC, ChangeNewTextAC} from '../../../redux/Profile-Reducer';
import MyPosts from './MyPosts';
import {ReduxStateType, ReduxStoreType} from '../../../redux/redux-store';

type MyPostsContainerType={
    store:ReduxStoreType
}
const MyPostsContainer = ({store}: MyPostsContainerType ) => {

    let state = store.getState();

    // const postsElement = props.posts
    //     .map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        //props.addPost(props.messageForNewPost)
        store.dispatch(AddPostAC(state.profilePage.messageForNewPost))
    }
    const newTextChangeHandler = (text:string) => {
        //props.changeNewTextCallback(e.currentTarget.value)
        store.dispatch(ChangeNewTextAC(text))
    }
    return <MyPosts posts={state.profilePage.posts} messageForNewPost={state.profilePage.messageForNewPost} addPost={addPost}  newTextChangeHandler={newTextChangeHandler}/>
}

export default MyPostsContainer
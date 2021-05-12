import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from 'redux-form';

export type PostType = {
    id: number
    message: string
    likesCount: number
}
type MyPostsType = {
    posts: Array<PostType>
    addPost: (messageForNewPost:any) => void
    //newTextChangeHandler:(text:string)=>void
    // messageForNewPost:string
    // onsubmit:any
}

const MyPosts = (props: MyPostsType) => {

    const postsElement = props.posts
        .map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = (value:any) => {
        props.addPost(value.newPostBody)
        //props.dispatch(AddPostAC(props.messageForNewPost))
    }
    // const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.newTextChangeHandler(e.currentTarget.value)
    //     //props.dispatch(ChangeNewTextAC(e.currentTarget.value))
    // }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addPost}/>
            {/*<div>*/}
            {/*    */}
            {/*    <div>*/}
            {/*        */}
            {/*        <textarea*/}
            {/*            onChange={newTextChangeHandler}*/}
            {/*            value={props.messageForNewPost}*/}
            {/*        > </textarea>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <button onClick={addPost}>Add post</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name="newPostBody" placeholder='Enter your post'/>
                {/*<textarea onChange={newTextChangeHandlerMessage}*/}
                {/*          value={props.messageForNewMessage}> </textarea>*/}
            </div>
            <div>
                <button
                    // onClick={addMessage}
                >add Post
                </button>
            </div>
        </form>
    )
}
const AddPostFormRedux = reduxForm({form: 'myPostAddPostForm'})(AddPostForm)
export default MyPosts
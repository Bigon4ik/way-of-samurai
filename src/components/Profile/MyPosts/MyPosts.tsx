import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {PostType, ProfilePageType} from '../../../redux/store';
import {AddPostAC, ChangeNewTextAC} from '../../../redux/Profile-Reducer';

type MyPostsType = {
    posts: Array<PostType>
    addPost: () => void
    newTextChangeHandler:(text:string)=>void
    messageForNewPost:string
}

const MyPosts = (props: MyPostsType) => {

    const postsElement = props.posts
        .map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.addPost()
        //props.dispatch(AddPostAC(props.messageForNewPost))
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newTextChangeHandler(e.currentTarget.value)
        //props.dispatch(ChangeNewTextAC(e.currentTarget.value))
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={newTextChangeHandler}
                        value={props.messageForNewPost}
                    > </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts
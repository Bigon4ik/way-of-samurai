import React from 'react';
import { PostType } from '../MyPosts';
import s from './Post.module.css'


const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt=""/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;
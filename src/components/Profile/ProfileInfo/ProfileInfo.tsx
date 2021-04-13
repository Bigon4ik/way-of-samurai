import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileinfo}>
            <img
                src="https://s.zagranitsa.com/images/articles/3580/870x486/6ee37702048d1e30ebd2e338b85d7f61.jpg?1463482531"
                alt=""/>
            <div className={s.discriptionBlock}>
                ava+discription
            </div>

        </div>
    )
}
export default ProfileInfo;
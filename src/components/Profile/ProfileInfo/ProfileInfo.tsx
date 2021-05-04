import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props:any) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.profileinfo}>
            {/*<img*/}
            {/*    src="https://s.zagranitsa.com/images/articles/3580/870x486/6ee37702048d1e30ebd2e338b85d7f61.jpg?1463482531"*/}
            {/*    alt=""/>*/}
            <div className={s.discriptionBlock}>
                Full name: {props.profile.fullName}
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={'hello mu friends'}/>
                Search work : {props.profile.lookingForAJobDescription}


            </div>

        </div>
    )
}
export default ProfileInfo;
import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'
import {DiologType} from '../../../redux/Dialogs-Reducer';

const DialogItem = (props: DiologType) => {
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;
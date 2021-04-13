import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/setting'>Setting</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/other'>Other</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;
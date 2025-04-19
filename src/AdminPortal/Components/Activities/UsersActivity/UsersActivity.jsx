import React from 'react';
import style from './UsersActivity.module.css';
import UserSidebar from '../../Sidebar/UserSidebar';
import UsersBody from '../../ActivityBodies/UsersBody';

export default function UsersActivity() {
    return (
        <div className={style.usersContainer}>
            <UserSidebar />
            <UsersBody />
        </div>
    );
}
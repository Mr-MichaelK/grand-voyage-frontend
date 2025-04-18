import React from 'react';
import style from './UsersActivity.module.css';
import AdminPortalSidebar from '../../Sidebar/AdminPortalSidebar';
import UsersBody from '../../ActivityBodies/UsersBody';

export default function UsersActivity() {
    return (
        <div className={style.usersContainer}>
            <AdminPortalSidebar />
            <UsersBody />
        </div>
    );
}
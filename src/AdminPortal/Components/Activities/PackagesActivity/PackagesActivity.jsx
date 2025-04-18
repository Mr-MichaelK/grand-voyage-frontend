import React from 'react';
import style from './PackagesActivity.module.css';
import AdminPortalSidebar from '../../Sidebar/AdminPortalSidebar';
import PackagesBody from '../../ActivityBodies/PackagesBody';

export default function PackagesActivity() {
    return (
        <div className={style.packagesContainer}>
            <AdminPortalSidebar />
            <PackagesBody />
        </div>
    );
}
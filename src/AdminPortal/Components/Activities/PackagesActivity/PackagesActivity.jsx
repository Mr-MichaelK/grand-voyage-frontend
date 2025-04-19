import React from 'react';
import style from './PackagesActivity.module.css';
import PackageSidebar from '../../Sidebar/PackageSidebar';
import PackagesBody from '../../ActivityBodies/PackagesBody';

export default function PackagesActivity() {
    return (
        <div className={style.packagesContainer}>
            <PackageSidebar />
            <PackagesBody />
        </div>
    );
}
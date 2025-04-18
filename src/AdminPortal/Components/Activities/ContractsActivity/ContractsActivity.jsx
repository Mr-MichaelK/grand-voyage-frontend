import React from 'react';
import style from './ContractsActivity.module.css';
import AdminPortalSidebar from '../../Sidebar/AdminPortalSidebar';
import ContractsBody from '../../ActivityBodies/ContractsBody';

export default function ContractsActivity() {
    return (
        <div className={style.contractsContainer}>
            <AdminPortalSidebar />
            <ContractsBody />
        </div>
    );
}
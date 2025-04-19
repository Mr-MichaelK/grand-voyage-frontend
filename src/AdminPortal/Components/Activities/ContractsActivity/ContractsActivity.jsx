import React from 'react';
import style from './ContractsActivity.module.css';
import ContractSidebar from '../../Sidebar/ContractSidebar';
import ContractsBody from '../../ActivityBodies/ContractsBody';

export default function ContractsActivity() {
    return (
        <div className={style.contractsContainer}>
            <ContractSidebar />
            <ContractsBody />
        </div>
    );
}
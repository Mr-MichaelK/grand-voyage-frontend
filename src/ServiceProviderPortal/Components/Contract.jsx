import React from 'react'
import style from './Contract.module.css'

export default function Contract({ id }) {
    function getInputs() {

    }

    function clearInputs() {

    }

    function isValidInputs() {

    }

    function closeModal() {
        document.getElementById(id).close()
    }

    function addContract() {

    }

    return (
        <dialog className={style.contractContainer} id={id}>
            <h1 className={style.contractTitle}>Contract Form</h1>
            <form className={style.inputs}>
                <div className={style.input}>
                    <label htmlFor='companyName'>Company Name:</label>
                    <input type='text' id='companyName' name='companyName'></input>
                </div>
                <div className={style.input}>
                    <label htmlFor='serviceType'>Service Type:</label>
                    <select id='serviceType' name='serviceType'>
                        <option value="">--SELECT--</option>
                        <option value={"housing"}>Housing</option>
                        <option value={"flights"}>Flight Services</option>
                        <option value={"cruises"}>Cruise Services</option>
                    </select>
                </div>
                <div className={style.dateInputs}>
                    <div className={style.dateInput}>
                        <label htmlFor="startDate">Start Date:</label>
                        <input type="date" id='startDate' name='startDate'/>
                    </div>
                    <div className={style.dateInput}>
                        <label htmlFor="endDate">End Date:</label>
                        <input type="date" id='endDate' name='endDate'/>
                    </div>
                </div>
                <div className={style.priceInputs}>
                    <div className={style.priceInput}>
                        <label htmlFor="pricePerListing">Price Per Listing:</label>
                        <input type="number" name='pricePerListing' id='pricePerListing' min={0} max={30000}/>
                    </div>
                    <div className={style.priceInput}>
                        <label htmlFor="commissionRate">Commission Rate (in %):</label>
                        <input type="number" id='commissionRate' name='commissionRate' min={5} max={100}/>
                    </div>
                </div>
                <div className={style.buttons}>
                    <button type='button' onClick={closeModal}>Cancel</button>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </dialog>
    )
}
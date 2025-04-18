import React from "react";
import style from './ExpandedCreateTravelCard.module.css';

export default function ExpandedCreateTravelCard({ id }) {

    function cancel() {
        clearInputs()
        closeDialog()
    }

    function closeDialog() {
        const dialog = document.getElementById(id);
        if (dialog) {
            dialog.close();
        }   
    }

    function submit() {
        const title = document.getElementById("title").value;
        const departurePlace = document.getElementById("departurePlace").value;
        const arrivalPlace = document.getElementById("arrivalPlace").value;
        const departureDate = document.getElementById("departureDate").value;
        const arrivalDate = document.getElementById("arrivalDate").value;
        const price = document.getElementById("price").value;

        // Add your submit logic here
        console.log({ title, departurePlace, arrivalPlace, departureDate, arrivalDate, price });
        clearInputs()
        closeDialog()
    }

    function clearInputs() {
        const inputs = document.querySelectorAll("input[type='text'], input[type='number'], input[type='date']");
        inputs.forEach(input => {
            input.value = '';
        });
    }
    return (
        <dialog id={id} className={style.dialog}>
            <form className={style.form}>
                <div className={style.inputGroup}>
                    <label htmlFor="title" className={style.label}>Title:</label>
                    <input id="title" name="title" type="text" className={style.input} />
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="departurePlace" className={style.label}>Departure Place:</label>
                    <input id="departurePlace" name="departurePlace" type="text" className={style.input} />
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="arrivalPlace" className={style.label}>Arrival Place:</label>
                    <input id="arrivalPlace" name="arrivalPlace" type="text" className={style.input} />
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="departureDate" className={style.label}>Departure Date:</label>
                    <input id="departureDate" name="departureDate" type="date" className={style.input} />
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="arrivalDate" className={style.label}>Arrival Date:</label>
                    <input id="arrivalDate" name="arrivalDate" type="date" className={style.input} />
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="price" className={style.label}>Price:</label>
                    <input id="price" name="price" type="number" className={style.input} />
                </div>
                <div className={style.buttonContainer}>
                    <button onClick={cancel} type="button" className={style.cancelButton}>Cancel</button>
                    <button onClick={submit} type="button" className={style.submitButton}>Submit</button>
                </div>
            </form>
        </dialog>
    )
}
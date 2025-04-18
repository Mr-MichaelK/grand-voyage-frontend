import React from "react";
import style from './ExpandedCreateHousingCard.module.css';

export default function ExpandedCreateHousingCard({ id }) {

    function cancel() {
        clearInputs();
        closeDialog();
    }

    function closeDialog() {
        const dialog = document.getElementById(id);
        if (dialog) {
            dialog.close();
        }
    }

    function submit() {
        const title = document.getElementById("title").value;
        const price = document.getElementById("price").value;
        const roomNb = document.getElementById("roomNb").value;
        const location = document.getElementById("location").value;
        const serviceType = document.querySelector("input[name='serviceType']:checked")?.value;

        // Add your submit logic here
        console.log({ title, price, roomNb, location, serviceType });
        clearInputs();
        closeDialog();
    }

    function clearInputs() {
        const inputs = document.querySelectorAll("input[type='text'], input[type='number'], input[type='radio']");
        inputs.forEach(input => {
            input.value = '';
            if (input.type === 'radio') {
                input.checked = false;
            }
        });
    }

    return (
        <dialog className={style.dialog} id={id}>
            <form className={style.form}>
                <div className={style.inputGroup}>
                    <label htmlFor="title" className={style.label}>Title:</label>
                    <input id="title" name="title" type="text" className={style.input} />
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="price" className={style.label}>Price Per Night:</label>
                    <input id="price" name="price" type="number" className={style.input} />
                </div>
                <div className={style.radioGroup}>
                    <input type="radio" id="apartment" name="serviceType" value="apartment" />
                    <label htmlFor="apartment" className={style.radioLabel}>Apartment</label>
                    <input type="radio" id="hotel" name="serviceType" value="hotel" />
                    <label htmlFor="hotel" className={style.radioLabel}>Hotel</label>
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="location" className={style.label}>Location:</label>
                    <input id="location" name="location" type="text" className={style.input} />
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="roomNb" className={style.label}>Number of Rooms:</label>
                    <input id="roomNb" name="roomNb" type="number" className={style.input} />
                </div>
                <div className={style.buttonContainer}>
                    <button onClick={cancel} type="button" className={style.cancelButton}>Cancel</button>
                    <button onClick={submit} type="button" className={style.submitButton}>Submit</button>
                </div>
            </form>
        </dialog>
    );
}
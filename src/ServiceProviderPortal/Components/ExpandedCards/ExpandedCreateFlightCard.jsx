import React from "react";
import style from './ExpandedCreateTravelCard.module.css';

export default function ExpandedCreateCruiseCard({ id, onAddCard }) {

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
        const departureAirport = document.getElementById("departurePlace").value;
        const arrivalAirport = document.getElementById("arrivalPlace").value;
        const departureDate = document.getElementById("departureDate").value;
        const arrivalDate = document.getElementById("arrivalDate").value;
        const price = document.getElementById("price").value;
        const description = document.getElementById("description").value;

        const newCruise = {
            title,
            departureAirport,
            arrivalAirport,
            departureDate,
            arrivalDate,
            price,
            description,
            image: "https://i.abcnewsfe.com/a/29ad17e0-4dec-488a-9c27-bdc2424ba5a5/electric-plane-ht-ml-240110_1704902584341_hpMain_16x9.jpg?w=992" // Default placeholder image
        };

        onAddCard(newCruise);

        clearInputs();
        closeDialog();
    }

    function clearInputs() {
        const inputs = document.querySelectorAll("input[type='text'], input[type='number'], input[type='date'], textarea");
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
                    <label htmlFor="departurePlace" className={style.label}>Departure Port:</label>
                    <input id="departurePlace" name="departurePlace" type="text" className={style.input} />
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="arrivalPlace" className={style.label}>Destination:</label>
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
                <div className={style.inputGroup}>
                    <label htmlFor="description" className={style.label}>Description:</label>
                    <textarea id="description" name="description" className={style.textarea}></textarea>
                </div>
                <div className={style.buttonContainer}>
                    <button onClick={cancel} type="button" className={style.cancelButton}>Cancel</button>
                    <button onClick={submit} type="button" className={style.submitButton}>Submit</button>
                </div>
            </form>
        </dialog>
    );
}
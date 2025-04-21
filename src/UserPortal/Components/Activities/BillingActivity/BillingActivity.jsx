import React, { useEffect, useState } from "react";
import style from "./BillingActivity.module.css";

export default function Billing({ id }) {
    const [formData, setFormData] = useState({
        paymentType: "creditCard",
        currency: "LLP",
        payerName: "",
        cardNumber: "",
        billingAddress: ""
    });

    // Load from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("billingInfo");
        if (stored) {
            setFormData(JSON.parse(stored));
        }
    }, []);

    // Handle form field change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Save to localStorage
    const handleSave = () => {
        localStorage.setItem("billingInfo", JSON.stringify(formData));
        document.getElementById(id).close()
        alert("Saved ✅");
    };

    return (
        <dialog id={id} className={style.dialog}>
            <form className={style.form}>
                <div className={style.inputGroup}>
                    <label htmlFor="paymentType" className={style.label}>Payment Type:</label>
                    <select
                        id="paymentType"
                        name="paymentType"
                        value={formData.paymentType}
                        onChange={handleChange}
                        className={style.input}
                    >
                        <option value="creditCard">Credit Card</option>
                        <option value="debitCard">Debit Card</option>
                        <option value="cash">Cash (OMT / Whish)</option>
                    </select>
                </div>

                <div className={style.inputGroup}>
                    <label className={style.label}>Currency:</label>
                    <div className={style.radioGroup}>
                        <label className={style.radioLabel}>
                            <input
                                type="radio"
                                name="currency"
                                value="LLP"
                                checked={formData.currency === "LLP"}
                                onChange={handleChange}
                            />
                            LLP
                        </label>
                        <label className={style.radioLabel}>
                            <input
                                type="radio"
                                name="currency"
                                value="USD"
                                checked={formData.currency === "USD"}
                                onChange={handleChange}
                            />
                            USD
                        </label>
                    </div>
                </div>

                <div className={style.inputGroup}>
                    <label htmlFor="payerName" className={style.label}>Payer Name:</label>
                    <input
                        type="text"
                        id="payerName"
                        name="payerName"
                        value={formData.payerName}
                        onChange={handleChange}
                        className={style.input}
                    />
                </div>

                <div className={style.inputGroup}>
                    <label htmlFor="cardNumber" className={style.label}>Card Number:</label>
                    <input
                        type="number"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className={style.input}
                    />
                </div>

                <div className={style.inputGroup}>
                    <label htmlFor="billingAddress" className={style.label}>Billing Address:</label>
                    <input
                        type="text"
                        id="billingAddress"
                        name="billingAddress"
                        value={formData.billingAddress}
                        onChange={handleChange}
                        className={style.input}
                    />
                </div>

                <div className={style.buttonContainer}>
                    <button 
                        type="button"
                        onClick={() => document.getElementById(id).close()} 
                        className={style.cancelButton}
                    >
                        Cancel
                    </button>
                    <button 
                        type="button"
                        onClick={handleSave}
                        className={style.submitButton}
                    >
                        Save
                    </button>
                </div>
            </form>
        </dialog>
    );
}

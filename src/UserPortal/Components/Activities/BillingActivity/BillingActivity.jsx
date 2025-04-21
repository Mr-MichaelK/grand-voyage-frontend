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
            <div>
                <label htmlFor="paymentType">Payment Type:</label>
                <select
                    id="paymentType"
                    name="paymentType"
                    value={formData.paymentType}
                    onChange={handleChange}
                >
                    <option value="creditCard">Credit Card</option>
                    <option value="debitCard">Debit Card</option>
                    <option value="cash">Cash (OMT / Whish)</option>
                </select>
            </div>

            <div>
                <label htmlFor="currency">Currency:</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="currency"
                            value="LLP"
                            checked={formData.currency === "LLP"}
                            onChange={handleChange}
                        />
                        LLP
                    </label>
                    <label>
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

            <div>
                <label htmlFor="payerName">Payer Name:</label>
                <input
                    type="text"
                    id="payerName"
                    name="payerName"
                    value={formData.payerName}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="cardNumber">Card Number:</label>
                <input
                    type="number"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="billingAddress">Billing Address:</label>
                <input
                    type="text"
                    id="billingAddress"
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleChange}
                />
            </div>

            <div>
                <button onClick={() => document.getElementById(id).close()}>Cancel</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </dialog>
    );
}

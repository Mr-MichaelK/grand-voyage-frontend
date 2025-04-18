import React from 'react';
import style from './CreateCard.module.css';

export default function CreateCard() {
    return (
        <div className={style.card}>
            <div className={style.cardImageContainer}>
                <div className={style.plusSign}>+</div>
            </div>
            
            <div className={style.cardContent}>
                <div className={style.cardInfo}>
                    <h3 className={style.cardTitle}>Create New Cruise</h3>
                    <p className={style.cardSubtitle}>Add a new cruise listing to your portfolio</p>
                </div>

                <div className={style.cardFooter}>
                    <button className={style.cardButton}>
                        Create Listing
                    </button>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import styles from './Card.module.css';
import bgImg from '../../../assets/packagesBackgroundImg.jpg'

const PackageCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImageContainer}>
                <img
                    src="assets/packagesBackgroundImg.jpg"
                    alt={props.packageName}
                    className={styles.cardImage}
                />
            </div>

            <div className={styles.cardContent}>
                <div className={styles.cardInfo}>
                    <h3 className={styles.cardTitle}>{props.packageName}</h3>
                    <p className={styles.cardSubtitle}>{props.destination}</p>
                    <div className={styles.cardMeta}>
                        <span className={styles.cardMetaMain}>{props.duration}</span>
                        <span className={styles.cardMetaSecondary}>{props.packageType}</span>
                    </div>
                </div>

                <div className={styles.cardFooter}>
                    <div className={styles.cardPrice}>US${props.price}</div>
                    <div className={styles.cardDetails}>
                        <div>{props.travelDates}</div>
                        <div>Includes: {props.inclusions}</div>
                    </div>
                    <button className={styles.cardButton}>
                        {props.buttonLabel || 'Book Package'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
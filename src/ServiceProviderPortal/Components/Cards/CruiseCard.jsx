import React from 'react';
import styles from './Card.module.css';

export default function CruiseCard({ cruise, onDelete, onEdit }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardImageContainer}>
                <img 
                    src={cruise.image} 
                    alt={cruise.title} 
                    className={styles.cardImage} 
                />
            </div>
            
            <div className={styles.cardContent}>
                <div className={styles.cardInfo}>
                    <h3 className={styles.cardTitle}>{cruise.title}</h3>
                    <p className={styles.cardSubtitle}>
                        {cruise.departurePort} → {cruise.arrivalPort}
                    </p>
                    <div className={styles.cardMeta}>
                        <span className={styles.cardMetaMain}>{cruise.duration}</span>
                        <span className={styles.cardMetaSecondary}>{cruise.cabinType}</span>
                    </div>
                </div>

                <div className={styles.cardFooter}>
                    <div className={styles.cardPrice}>US${cruise.price}</div>
                    <div className={styles.cardDetails}>
                        <div>{cruise.description}</div>
                    </div>
                    <div className={styles.cardActions}>
                        <button className={styles.editButton} onClick={() => onEdit(cruise)}>
                            Edit
                        </button>
                        <button className={styles.deleteButton} onClick={() => onDelete(cruise.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

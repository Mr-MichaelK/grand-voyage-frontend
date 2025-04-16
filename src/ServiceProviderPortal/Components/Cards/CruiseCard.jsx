import React from 'react';
import style from './CruiseCard.module.css';

export default function CruiseCard({ cruise, onDelete, onEdit }) {
    return (
        <div className={style.card}>
            <div className={style.cardImageContainer}>
                <img 
                    src={cruise.image} 
                    alt={cruise.title} 
                    className={style.cardImage} 
                />
            </div>
            
            <div className={style.cardContent}>
                <div className={style.cardInfo}>
                    <h3 className={style.cardTitle}>{cruise.title}</h3>
                    <p className={style.cardSubtitle}>
                        {cruise.departurePort} → {cruise.destination}
                    </p>
                    <div className={style.cardMeta}>
                        <span className={style.cardMetaMain}>{cruise.duration} days</span>
                        <span className={style.cardMetaSecondary}>{cruise.cabinType}</span>
                    </div>
                </div>

                <div className={style.cardFooter}>
                    <div className={style.cardPrice}>US${cruise.price}</div>
                    <div className={style.cardDetails}>
                        <div>{cruise.description}</div>
                    </div>
                    <div className={style.cardActions}>
                        <button className={style.editButton} onClick={() => onEdit(cruise)}>
                            Edit
                        </button>
                        <button className={style.deleteButton} onClick={() => onDelete(cruise.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

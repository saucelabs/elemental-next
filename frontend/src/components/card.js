import React from 'react';
import cardStyles from './card.module.css';

const Card = ({ tip }) => {
    return  (
    <>
        {tip.map((Val) => {
            return (
                <div 
                className = {cardStyles.tips} 
                key={Val.id}>
                    <div className =  {cardStyles.card} >
                    <div className = {cardStyles.heading}>
                        <a href = {Val.contentUrl}>{Val.headline}</a>
                    </div>
                    <div className={cardStyles.text}>
                        <p> {Val.text} </p>
                    </div>
                    </div>
                </div>
            )
        })}
    </>
    );  
}
export default Card;
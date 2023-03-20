import React from 'react';

const Card = ({ item }) => {
    return  (
    <>
        {item.map((Val) => {
            return (
                <div className = {archiveStyles.archive} >
                    <div className = {archiveStyles.card}>
                    <div className={archiveStyles.heading}>
                        <a href = {Val.contentUrl}>{Val.headline}</a>
                    </div>
                    <div className={archiveStyles.text}>
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
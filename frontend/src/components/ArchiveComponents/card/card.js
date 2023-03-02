import * as React from 'react';
//import "./card.css";
import classes from "./card.module.css"

function Card ({ headline, text, contentUrl }) {
    return  (
        <div className = {"card"}>
            <div className={classes.heading}>
                <a href = {contentUrl}>{headline}</a>
            </div>
            <div className={classes.text}>
                <p> {text} </p>
            </div>
        </div>
    );
}

// export default Card;

import React from 'react';

// A contributor of a tip: photo, name and what they did. It links to their profile when there is a URL.
const DefaultAvatar = ({imgSrc, name, description, url}) => {
    const content = (
        <>
            {imgSrc && <img src={imgSrc} alt="" loading="lazy" width="44" height="44"/>}
            <span className="es-person__txt">
                <b>{name}</b>
                <span>{description}</span>
            </span>
        </>
    );
    return url
        ? <a className="es-person" href={url} target="_blank" rel="noopener noreferrer">{content}</a>
        : <div className="es-person">{content}</div>;
}

export default DefaultAvatar;

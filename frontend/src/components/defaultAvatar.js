import React from 'react';

const DefaultAvatar = ({imgSrc, name, description, url, author = false}) => {
    const photoClass = author ? 'avatar__photo avatar__photo--lg' : 'avatar__photo';
    return (
        <div className="avatar margin-bottom--sm">
            <img
                className={photoClass}
                src={imgSrc}
                alt={name}
            />
            <div className="avatar__intro">
                <div className="avatar__name">
                    <a href={url} target="_blank">{name}</a>
                </div>
                <small className="avatar__subtitle">{description}</small>
            </div>
        </div>
    );
}

export default DefaultAvatar;



import React from 'react';

const AuthorAvatar = ({imgSrc, name, description}) => {
    return (
        <div className="avatar margin-bottom--sm">
            <img
                className="avatar__photo avatar__photo--lg"
                src={imgSrc}
                alt={name}
            />
            <div className="avatar__intro">
                <div className="avatar__name">{name}</div>
                <small className="avatar__subtitle">{description}</small>
            </div>
        </div>
    );
}

export default AuthorAvatar;



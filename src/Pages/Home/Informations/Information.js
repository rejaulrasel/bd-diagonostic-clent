import React from 'react';

const Information = ({ information }) => {
    const { icon, name, description, bgClass } = information;
    return (
        <div className={`card card-side text-base-100 p-6 shadow-xl ${bgClass}`}>
            <figure>
                <img src={icon}  alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Information;
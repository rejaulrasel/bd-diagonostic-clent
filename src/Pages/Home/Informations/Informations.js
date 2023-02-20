import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import Information from './Information';
const Informations = () => {

    const informations = [
        {
            id: 1,
            icon: clock,
            name: "Opening Hours",
            description: "Lorem Ipsum is simply dummy text of the pri",
            bgClass: "bg-gradient-to-tr from-secondary to-primary"
        },
        {
            id: 2,
            icon: marker,
            name: "Opening Hours",
            description: "Lorem Ipsum is simply dummy text of the pri",
            bgClass: "bg-accent"
        },
        {
            id: 3,
            icon: phone,
            name: "Opening Hours",
            description: "Lorem Ipsum is simply dummy text of the pri",
            bgClass: "bg-gradient-to-tr from-primary to-secondary"
        }
    ]

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            informations.map(information => <Information 
            key={information.id}
            information={information}
            ></Information>)
        }  
        </div>
    );
};

export default Informations;
import React from 'react';
import fluroide from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            id : 1,
            name: 'Fluoride Treatment',
            icon: fluroide,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id : 2,
            name: 'Fluoride Treatment',
            icon: cavity,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id : 3,
            name: 'Fluoride Treatment',
            icon: teeth,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
    ]
    return (
       <div className='mt-32'>
        <div className='text-center'>
            <h3 className='text-2xl text-secondary'>OUR SERVICES</h3>
            <h1 className='text-4xl'>Services We Provide</h1>
        </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
       </div>
    );
};

export default Services;
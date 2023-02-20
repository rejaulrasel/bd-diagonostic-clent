import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AvailableOption from './AvailableOption';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentsOptions, setAppointmentsOptions] = useState([]);
    const [treatment, setTreatment] = useState([])
    console.log(treatment)

    useEffect(() => {
        fetch('appointmentsOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentsOptions(data))
        console.log(appointmentsOptions)
    }, [])
    return (
         <section className='mt-24'>
            <p className='text-center  font-bold text-primary'>Available Appointments on : {format(selectedDate,'PPPP')}</p>

            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto  justify-center '>
            {
                appointmentsOptions.map(option => <AvailableOption
                key={option._id}
                option={option}
                setTreatment={setTreatment}
                ></AvailableOption> )
            }
            </div>
            <BookingModal treatment={treatment} selectedDate={selectedDate}></BookingModal>
            
        </section>

        
    );
};

export default AvailableAppointments;
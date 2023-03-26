import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import Appointments from './../../Appointments/Appointments/Appointments';

const MakeAppointment = () => {
    return (
        <div>
            <div className="my-24 card lg:card-side bg-makeAppointment">
            <figure><img src={doctor} className='w-3/4' alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title text-5xl">Make an Appointment Today</h2>
                <p>It is a long established fact that a reader will be distracted by <br /> the readable content of a page when looking at its layout. The point of <br /> using Lorem Ipsumis that it has a more-or-less <br /> normal distribution of letters, br
                as opposed to using <br /> 'Content here, content here', making it look  like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary">GET STARTED</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MakeAppointment;
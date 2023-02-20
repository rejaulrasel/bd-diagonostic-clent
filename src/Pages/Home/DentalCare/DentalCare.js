import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className="mt-24 card flex-col md:flex-row ">
            <figure><img src={treatment} className='w-3/4' alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-5xl">Exceptional Dental <br /> Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by <br /> the readable content of a page when looking at its layout. The point of <br /> using Lorem Ipsumis that it has a more-or-less <br /> normal distribution of letters, br
                as opposed to using <br /> 'Content here, content here', making it look  like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;
import React from 'react';
import img from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className='py-16   '>
            <div className="hero bg-banner ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className='w-1/2' alt='chair'/>
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
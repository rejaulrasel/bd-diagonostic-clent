import React from 'react';

const AvailableOption = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="text-2xl text-secondary">{name}</h2>
        <p>{slots[0]}</p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}  available</p>
        <div className="card-actions justify-center">
          <label
           htmlFor="booking-modal" 
           className="btn btn-secondary"
           onClick={() => setTreatment(option)}
           >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AvailableOption;
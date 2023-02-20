import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment; //same as availabe option just change in name
    const date = format(selectedDate, 'PPPP')
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-4">{name}</h3>
                    <form className='grid grid-cols-1 gap-4'>
                        <input type="text" disabled value={date} className="input input-bordered input-secondary w-full font-bold " />

                        <select className="select select-bordered w-full ">
                           
                           {
                            slots.map(slot => <option value={slot}>{slot}</option>)
                           }
                        </select>

                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " />

                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " />

                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " />

                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " />

                        <input type="submit" value='Submit' className="btn btn-secondary w-full" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
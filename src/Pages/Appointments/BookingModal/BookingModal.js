import { format } from 'date-fns';
import React from 'react';
import Swal from 'sweetalert2'

const BookingModal = ({ treatment, setTreatment ,selectedDate }) => {
    const { name, slots } = treatment; //same as availabe option just change in name
    const date = format(selectedDate, 'PPPP')

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;

        const booking = {
            treatment: name,
            appointmentDate: date,
            patient: name,
            slot,
            email,
            number
        }
        console.log(booking)
        setTreatment(null)
        Swal.fire(
            'Appointment Done',
            '',
            'success'
          )

    } 
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-4">{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4'>
                        <input type="text" disabled value={date} className="input input-bordered input-secondary w-full font-bold " />

                        <select name='slot' className="select select-bordered w-full ">
                           
                           {
                            slots?.map((slot, index) => <option 
                            key={index}
                            value={slot}
                            >{slot}</option>)
                           }
                        </select>

                        <input name='name' type="text" placeholder="your name" className="input input-bordered input-secondary w-full " />

                        <input name='email' type="text" placeholder="your emal" className="input input-bordered input-secondary w-full " />

                        <input name='number' type="text" placeholder="Phone number" className="input input-bordered input-secondary w-full " />

                        <input type="submit" value='Submit' className="btn btn-secondary w-full" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
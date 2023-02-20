import React, { useState } from 'react';
import AppointmentsBanner from '../AppointmentsBanner/AppointmentsBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointments = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentsBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}>
            </AppointmentsBanner>

            <AvailableAppointments
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}>
            </AvailableAppointments>
        </div>
    );
};

export default Appointments;
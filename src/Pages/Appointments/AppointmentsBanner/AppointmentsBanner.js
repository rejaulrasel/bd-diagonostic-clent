import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';


const AppointmentsBanner = ({selectedDate,setSelectedDate}) => {
    const presentDate = new Date();
    const previousDate = presentDate.getTime() - (1 * 24 * 60 * 60 * 1000);
    const disableDays = [
        {from: new Date(1,0 ,1), to: previousDate}
    ];
    
    return (
        <header>
            <div className="hero bg-banner">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" alt='A chair pic here ' />
                    <div className='text-center'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={disableDays}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentsBanner;
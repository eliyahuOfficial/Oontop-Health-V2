import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const AnalogClock: React.FC = () => {
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-blue-600 text-white rounded-lg shadow-lg flex flex-col items-center p-4 max-w-xs mx-auto">
            <div className="mb-4">
                <Clock value={date} size={150} renderNumbers={true} />
            </div>
            <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Current Time</h3>
                <p className="text-2xl font-mono">{date.toLocaleTimeString()}</p>
                <p className="text-lg mt-2">{date.toDateString()}</p>
            </div>
        </div>
    );
};

export default AnalogClock;

import { func } from 'prop-types';
import React, {useState, useEffect} from 'react';

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
            console.log("CLear")
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        
        return `${padZero(hours)}:${minutes}:${padZero(seconds)}:${meridiem}`;
    }

    function padZero(number){
        return (number < 10 ? "0": "") + number;
    }


    return(
        <div className = "clock-container">
            <div className='clock'>
                <span>{formatTime()}</span>
            </div>
        </div>);
}

export default DigitalClock
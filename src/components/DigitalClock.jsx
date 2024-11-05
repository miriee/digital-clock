import { useState, useEffect } from 'react'

export const DigitalClock = () => {
    const [time, setTime] = useState(new Date() /* Thu Sep 26 2024 11:46:41 GMT+0100 (heure normale d’Afrique de l’Ouest)*/)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date() /* Thu Sep 26 2024 11:46:42 GMT+0100 (heure normale d’Afrique de l’Ouest)*/)
        }, 1000);

        return () => { /* clean-up function */
            clearInterval(intervalId)
        }

    }, [])

    const formatTime = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12  // If hours % 12 returns 0, set hours to 12; otherwise, use the remainder (reste) of the division.
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    const padZero = (number) => {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className='clock-container'>
            <div className='clock'>
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

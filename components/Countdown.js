import { useEffect, useState } from 'react';
import { getDateObject, getTimeDifference } from '../lib/date';

function leadingZero(n) {
    if (n < 10)
        return '0' + n;
    return n;
}

export default function Countdown({ date }) {
    const [time, setTime] = useState(null);

    useEffect(() => {
        let timer = setInterval(() => {
            let seconds = (getDateObject(date).getTime() - Date.now()) / 1000.0,
                minutes = seconds / 60,
                hours = minutes / 60,
                days = hours / 24;

            setTime({
                seconds: Math.floor(seconds) % 60,
                minutes: Math.floor(minutes) % 60,
                hours: Math.floor(hours) % 24,
                days: Math.floor(days),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [time, date]);

    if (time === null) {
        return null;
    }

    const { days, hours, minutes, seconds } = time;
    return <p>
        {days}:
        {leadingZero(hours)}:
        {leadingZero(minutes)}:
        {leadingZero(seconds)}
    </p>;
}
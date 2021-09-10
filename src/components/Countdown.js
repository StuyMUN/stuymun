import { useEffect, useState } from 'react';
import { getDateObject } from '../lib/date';

function getTimeState(date) {
    let seconds = (getDateObject(date).getTime() - Date.now()) / 1000.0,
        minutes = seconds / 60,
        hours = minutes / 60,
        days = hours / 24;

    return {
        seconds: Math.floor(seconds) % 60,
        minutes: Math.floor(minutes) % 60,
        hours: Math.floor(hours) % 24,
        days: Math.floor(days)
    };
}

function useCountdown(date) {
    const [time, setTime] = useState(getTimeState(date));

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(getTimeState(date));
        }, 1000);

        return () => clearInterval(timer);
    }, [time, date]);

    return time;
}

function timed(text, value) {
    if (value !== 1) {
        text += 's';
    }
    return `${value} ${text} `;
}

export default function Countdown({ date }) {
    const { days, hours, minutes, seconds } = useCountdown(date);

    return <p className="timer">
        {timed('day', days)}
        {timed('hour', hours)}
        {timed('minute', minutes)}
        {timed('second', seconds)}
    </p>;
}
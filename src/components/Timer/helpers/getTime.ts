interface Props {
    secondsLeft: number,
    days?: number,
    hours?: number,
    minutes?: number,
}

export default function getTime({secondsLeft, days, hours, minutes}: Props): number {
    function toHour(days: number): number { return days * 24 };
    function toMinutes(hours: number): number { return hours * 60 }
    function toSeconds(minutes: number): number { return minutes * 60 }
    const totalMinutes = secondsLeft / 60;
    const totalHours = secondsLeft / 60 / 60;


    
    if (minutes !== undefined) 
        return Math.floor(secondsLeft - toSeconds(toMinutes(toHour(days))) - toSeconds(toMinutes(hours)) - toSeconds(minutes)); // get Seconds
    if (hours !== undefined) 
        return Math.floor(totalMinutes - toMinutes(toHour(days)) - toMinutes(hours)); // get Minutes
    if (days !== undefined) 
        return Math.floor(totalHours - toHour(days)); // get Hours
    return Math.floor(totalHours / 24); // get Days
}
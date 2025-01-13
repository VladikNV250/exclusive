import { useEffect, useRef, useState } from "react";
import classes from "./Timer.module.scss";
import getTime from "./helpers/getTime";
import TimeItem from "@/components/Timer/UI/TimeItem/TimeItem";
import { useTranslation } from "react-i18next";

interface Props {
    date: Date;
    type?: "circle" | "text";
    colorStyle?: "black" | "white";
}

export function Timer({date, type = "circle", colorStyle = "black"}: Props) {
    const { t } = useTranslation();
    const secondsLeft = (date.getTime() - new Date().getTime()) / 1000;
    const [days, setDays] = useState(getTime({secondsLeft}));
    const [hours, setHours] = useState(getTime({secondsLeft, days}));
    const [minutes, setMinutes] = useState(getTime({secondsLeft, days, hours}));
    const [seconds, setSeconds] = useState(getTime({secondsLeft, days, hours, minutes}));
    const interval = useRef(0);

    useEffect(() => {
        const updateTimer = () => {
            setSeconds(prevSeconds => {
            if (prevSeconds === 0) {
                if (minutes === 0 && hours === 0 && days === 0) {
                clearInterval(interval.current);
                return 0;
                }
                updateMinutes();
                return 59;
            }
            return prevSeconds - 1;
            });
        };
    
        const updateMinutes = () => {
            setMinutes(prevMinutes => {
            if (prevMinutes === 0) {
                updateHours();
                return 59;
            }
            return prevMinutes - 1;
            });
        };
    
        const updateHours = () => {
            setHours(prevHours => {
            if (prevHours === 0) {
                updateDays();
                return 23;
            }
            return prevHours - 1;
            });
        };
    
        const updateDays = () => {
            setDays(prevDays => prevDays - 1);
        };

        interval.current = setInterval(updateTimer, 1000);
        return () => clearInterval(interval.current);
    }, [seconds, minutes, hours, days]);


    return (
        <div className={classes[`timer__${type}`]}>
            <TimeItem time={days} unit={t("days")} type={type} color={colorStyle} />
            {type === "text" && (
                <div className={classes[`semicolon`]}>
                    <div />
                    <div />
                </div>
            )}
            <TimeItem time={hours} unit={t("hours")} type={type} color={colorStyle} />
            {type === "text" && (
                <div className={classes[`semicolon`]}>
                    <div />
                    <div />
                </div>
            )}
            <TimeItem time={minutes} unit={t("minutes")} type={type} color={colorStyle} />
            {type === "text" && (
                <div className={classes[`semicolon`]}>
                    <div />
                    <div />
                </div>
            )}
            <TimeItem time={seconds} unit={t("seconds")} type={type} color={colorStyle} />
        </div>
    )
}
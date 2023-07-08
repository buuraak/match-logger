"use client"

import { useState, useRef, useEffect } from "react";


export default function Timer(props) {
    const [time, setTime] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    const intervalRef = useRef();
    const { startingTimestamp, pausedTimestamp } = props;

    //When the component mounts we want to calculate which position the timer is in.
    useEffect(() => {
        if (startingTimestamp) {
            const now = new Date();
            const timeElapsed = Math.floor((now - new Date(startingTimestamp)) / 1000);
            setTime(timeElapsed);
            setTimerActive(true);
            startTimer();
        } else {
            setTime(pausedTimestamp ?? 0);
        }
    }, [startingTimestamp, pausedTimestamp]);

    const startTimer = async () => {
        if (timerActive) return; //Prevent multiple timers from being created.
        const startingTime = pausedTimestamp ? new Date(new Date().setSeconds(new Date().getSeconds() - pausedTimestamp)) : new Date(); //If the timer was paused we want to start from the paused time.
        if (!props.startingTimestamp) { //If there already is a starting timestamp we don't want to create a new one.
            try {
                await fetch("/api/timer", {
                    method: "POST",
                    body: JSON.stringify({ startingTimestamp: startingTime, pausedTimestamp: null, timerAction: "start" })
                })
            } catch (error) {
                console.log(error);
            }
        }
        intervalRef.current = setInterval(() => { //We want to update the timer every second.
            setTime((prevTime) => prevTime + 1);
        }, 1000);
        setTimerActive(true);
    };

    const stopTimer = async () => {
        if (!timerActive) return; //Prevent multiple timers from being created.
        try {
            await fetch("/api/timer", { //We want to save the paused time to the database.
                method: "POST",
                body: JSON.stringify({ startingTimestamp: null, pausedTimestamp: time, timerAction: "pause" })
            })
            clearInterval(intervalRef.current);
            setTimerActive(false);
        } catch (error) {
            console.log(error);
        }
    };

    const resetTime = async () => {
        try {
            await fetch("/api/timer", {
                method: "POST",
                body: JSON.stringify({ startingTimestamp: null, pausedTimestamp: null, timerAction: "reset" })
            })
            setTime(0);
            clearInterval(intervalRef.current);
            setTimerActive(false);
        } catch (error) {
            console.log(error);
        }

    }

    const formatTime = (time) => { //We want to format the time to a mm:ss format including leading zeros.
        //padStart will add a leading zero if the string is less than 2 characters.
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };
    return (
        <>
            <div className="bg-black h-[90px] py-5 rounded-xl text-white font-courier font-bold flex justify-center items-center text-4xl">
                <span>{formatTime(time)}</span>
            </div>
            <div className="grid grid-cols-3 gap-5 py-7">
                <button onClick={startTimer} className="h-[80px] bg-primary rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32px" height="32px" className="mx-auto">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                </button>
                <button onClick={stopTimer} className="h-[80px] bg-primary rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32px" height="32px" className="mx-auto">
                        <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                    </svg>
                </button>
                <button onClick={resetTime} className="h-[80px] bg-primary rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32px" height="32px" className="mx-auto">
                        <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </>
    );
}
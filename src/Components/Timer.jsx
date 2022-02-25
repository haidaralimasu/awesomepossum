import React, { useEffect, useState } from "react";

export default function Timer() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    console.log(year);
    let difference = +new Date(`04/02/${year}`) - +new Date();
    console.log(difference);
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <>
      <div className="container py-5 my-5 mb-0">
        <div className="d-flex justify-content-center align-items-center ">
          <div className="d-flex flex-column align-items-center border-end px-lg-4 px-2">
            <span className="timer">{timeLeft.days}</span>
            <span className="fs-8 pt-3">DAYS</span>
          </div>
          <div className="d-flex flex-column align-items-center border-end px-lg-4 px-2">
            <span className="timer">{timeLeft.hours}</span>
            <span className="fs-8 pt-3">HOURS</span>
          </div>
          <div className="d-flex flex-column align-items-center border-end px-lg-4 px-2">
            <span className="timer">{timeLeft.minutes}</span>
            <span className="fs-8 pt-3">MINUTES</span>
          </div>
          <div className="d-flex flex-column align-items-center  px-lg-4 px-2">
            <span className="timer">{timeLeft.seconds}</span>
            <span className="fs-8 pt-3">SECONDS</span>
          </div>
        </div>
      </div>
    </>
  );
}

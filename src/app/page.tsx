"use client";

import {useEffect, useState} from "react";
import moment from "moment";

export default function Home() {
  const targetDate = moment.utc("2025-01-01T00:00:00Z");

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment.utc();
      const duration = moment.duration(targetDate.diff(now));

      setTimeLeft({
        days: String(Math.floor(duration.asDays())).padStart(2, "0"),
        hours: String(duration.hours()).padStart(2, "0"),
        minutes: String(duration.minutes()).padStart(2, "0"),
        seconds: String(duration.seconds()).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (<div className="flex items-center justify-center min-h-screen text-white relative">
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center bg-black bg-opacity-50 p-6 rounded-lg">
      <h1 className="text-4xl font-bold mb-8 drop-shadow-2xl">JetPack Service Launch Countdown</h1>
      <div className="flex justify-center space-x-6 text-2xl font-mono mb-6">
        <div>
          <p className="text-6xl font-bold drop-shadow-2xl">{timeLeft.days}</p>
          <p className="drop-shadow">Days</p>
        </div>
        <div>
          <p className="text-6xl font-bold drop-shadow-2xl">{timeLeft.hours}</p>
          <p className="drop-shadow">Hours</p>
        </div>
        <div>
          <p className="text-6xl font-bold drop-shadow-2xl">{timeLeft.minutes}</p>
          <p className="drop-shadow">Minutes</p>
        </div>
        <div>
          <p className="text-6xl font-bold drop-shadow-2xl">{timeLeft.seconds}</p>
          <p className="drop-shadow">Seconds</p>
        </div>
      </div>
      <a
          href="https://docs.jetpack.ws"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Learn More About JetPack
      </a>
    </div>
  </div>);
}

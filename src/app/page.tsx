"use client";

import {useEffect, useState} from "react";
import moment from "moment";
import Link from 'next/link';

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
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center bg-black bg-opacity-50 p-6 rounded-lg max-w-lg w-full sm:w-auto sm:p-8">
      <h1 className="text-2xl sm:text-4xl font-bold mb-8 drop-shadow-2xl">JetPack Service Launch Countdown</h1>
      <div className="flex justify-center space-x-3 text-xl sm:text-2xl sm:space-x-6 font-mono mb-6">
        <div>
          <p className="text-3xl sm:text-6xl font-bold drop-shadow-2xl">{timeLeft.days}</p>
          <p className="drop-shadow">Days</p>
        </div>
        <div>
          <p className="text-3xl sm:text-6xl font-bold drop-shadow-2xl">{timeLeft.hours}</p>
          <p className="drop-shadow">Hours</p>
        </div>
        <div>
          <p className="text-3xl sm:text-6xl font-bold drop-shadow-2xl">{timeLeft.minutes}</p>
          <p className="drop-shadow">Minutes</p>
        </div>
        <div>
          <p className="text-3xl sm:text-6xl font-bold drop-shadow-2xl">{timeLeft.seconds}</p>
          <p className="drop-shadow">Seconds</p>
        </div>
      </div>
      <Link
          href="https://docs.jetpack.ws"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Learn More About JetPack
      </Link>
      
      <div className="mt-4 text-sm text-gray-300">
        By using our service, you agree to our{' '}
        <Link
          href="https://docs.jetpack.ws/en/term"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          Terms of Service
        </Link>
        {' '}and{' '}
        <Link
          href="https://docs.jetpack.ws/en/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  </div>);
}

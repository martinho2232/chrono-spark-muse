import { useState, useEffect } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 2,
    minutes: 46,
    seconds: 51,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-4 bg-gradient-coral p-6 rounded-xl shadow-strong">
      <div className="text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
          <div className="text-3xl font-bold text-white">
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="text-xs text-white/80 uppercase tracking-wider">
            HORAS
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold text-white">:</div>
      <div className="text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
          <div className="text-3xl font-bold text-white">
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="text-xs text-white/80 uppercase tracking-wider">
            MIN
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold text-white">:</div>
      <div className="text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
          <div className="text-3xl font-bold text-white">
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="text-xs text-white/80 uppercase tracking-wider">
            SEG
          </div>
        </div>
      </div>
    </div>
  );
};
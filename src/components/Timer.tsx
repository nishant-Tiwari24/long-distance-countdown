import { useState, useEffect } from 'react';

interface TimerProps {
  targetDate: string; 
}

const Timer: React.FC<TimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const targetTime = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const timeDifference = targetTime - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      // Timer has reached zero
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [targetDate]);

  return (
    <section className="timer-container">
      <section className="timer absolute top-1/3 left-1/2 -translate-x-[50%] -translate-y-[50%] grid gap-40 mt-24">
        <div>
          <span className="mdi di-calender-clock ">
            <h2 className="text-red-200 text-2xl font-serif">🩷 Countdown to a really special date, To meet someone really special 🩷</h2>
          </span>
        </div>
        <div className="flex text-red-200 text-center align-middle translate-x-[12%] -translate-y-[50%] justify-center text-3xl border-sky-100 border-[1px] border-separate rounded-[30px] w-[35rem] h-[15rem] py-[4.5rem] gap-4 font-serif">
          <section>
            <h2 className="text-6xl">{timeLeft.days}</h2>
            <p><small className="text-[15px]">Days</small></p>
          </section>
          <span>:</span>
          <section>
            <h2 className="text-6xl">{timeLeft.hours}</h2>
            <p><small className="text-[15px]">Hours</small></p>
          </section>
          <span>: </span>
          <section>
            <h2 className="text-6xl">{timeLeft.minutes}</h2>
            <p><small className="text-[15px]">Minutes</small></p>
          </section>
          <span>: </span>
          <section>
            <h2 className="text-6xl">{timeLeft.seconds}</h2>
            <p><small className="text-[15px]">Seconds</small></p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Timer;

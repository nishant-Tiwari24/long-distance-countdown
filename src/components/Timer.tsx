// import { useState, useEffect, useRef } from 'react';

// const HeroContent = () => {

//   const [timerDays, setTimerDays] = React.useState(0);
//   const [timerHours, setTimerHours] = React.useState(0);
//   const [timerMinutes, setTimerMinutes] = React.useState(0);
//   const [timerSeconds, setTimerSeconds] = useState(0);
  
//   let interval = useRef();
  
//   const startTimer = () => {
//     const countdownDate = new Date('Jan 12, 2024 00:00:00').getTime();
  
//     interval.current = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countdownDate - now;
  
//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)/60))
  
//       if (distance <= 0) {
//         clearInterval(interval.current);
//       } else {
//         setTimerDays(days);
//         setTimerHours(hours);
//         setTimerMinutes(minutes);
//         setTimerSeconds(seconds);
//       }
//     }, 1000);
//   };
  
//   useEffect(() => {
//     startTimer();
//     return () => {
//       clearInterval(interval.current);
//     };
//   }, []);
// }

function Timer() {     
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
                    <h2 className="text-6xl">85</h2 >
                    <p><small className="text-[15px]">Days</small></p>
                </section>
                <span>:</span>
                <section>
                    <h2 className="text-6xl">85</h2 >
                    <p><small className="text-[15px]">Hours</small></p>
                </section>
                <span>: </span>
                <section>
                    <h2 className="text-6xl">85</h2 >
                    <p><small className="text-[15px]">Minutes</small></p>
                </section>
                <span>: </span>
                <section>
                    <h2 className="text-6xl">85</h2 >
                    <p><small className="text-[15px]">Seconds</small></p>
                </section>
            </div>
        </section>
    </section>
  )
}

export default Timer

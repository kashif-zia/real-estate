import { useEffect, useState } from "react";
//timer
const useTimer = (countDate) => {
  const [timer, setTimer] = useState({ days: "", hours: "", minutes: "", seconds: "" });
  const [countDownDate, setCountDownDate] = useState(countDate);
  useEffect(() => {
    setTimeout(() => {
      var now = new Date().getTime();
      var timeLeft = countDownDate - now;
      if (
        Math.floor((timeLeft % (1000 * 60)) / 1000) <= 0 &&
        Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) <= 0 &&
        Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)) <= 0 &&
        Math.floor((timeLeft % (1000 * 60)) / 1000) <= 0
      ) {
        const d = new Date();
        d.setDate(d.getDate() + 60);
        setCountDownDate(d);
      }
      setTimer({
        days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
      });
    }, 1000);
  }, [countDownDate, timer]);
  return [timer?.days, timer?.hours, timer?.minutes, timer?.seconds];
};

export default useTimer;

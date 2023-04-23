import React, { useState, useEffect } from 'react';

const endDate = new Date('2023-05-13T12:00:00');


function Timer() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft('00 | 00 | 00 | 00');
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft(`${days}  | ${hours}  | ${minutes}  | ${seconds} `);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      <p className='time'>{timeLeft}</p>
      <p className='hours'><span>days</span> <span>hours</span> <span>minutes</span> <span>seconds</span></p>

      
    </div>
  );
}

export default Timer;


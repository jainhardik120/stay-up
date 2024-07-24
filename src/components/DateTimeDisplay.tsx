import React, { useState, useEffect } from 'react';

const DateTimeDisplay: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeString = currentDateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
  const dateString = currentDateTime.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="text-6xl font-bold">
        {timeString}
      </div>
      <div className="text-xl mt-2">
        {dateString}
      </div>
    </div>
  );
};

export default DateTimeDisplay;

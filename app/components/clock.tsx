import React from "react";
import ReactClock from "react-clock";
import "react-clock/dist/Clock.css";

export default function Clock() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-10">
      <ReactClock
        value={time}
        className="bg-white rounded-full aspect-square"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl md:text-7xl font-extrabold">
          {time.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </h3>
        <p className="md:text-lg text-gray-400">
          {time.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}

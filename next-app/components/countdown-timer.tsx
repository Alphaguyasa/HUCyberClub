import React, { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

interface ShiftingCountdownProps {
  targetDate?: Date;
  onComplete?: () => void;
}

export default function ShiftingCountdown({ targetDate, onComplete }: ShiftingCountdownProps) {
  const target = targetDate ?? new Date(Date.now() + 5 * MINUTE);
  return (
    <div className="flex w-full items-center bg-transparent">
      <CountdownItem unit="Day"    label="Days"    target={target} onComplete={onComplete} />
      <CountdownItem unit="Hour"   label="Hours"   target={target} />
      <CountdownItem unit="Minute" label="Minutes" target={target} />
      <CountdownItem unit="Second" label="Seconds" target={target} />
    </div>
  );
}

function CountdownItem({ unit, label, target, onComplete }: { unit: string; label: string; target: Date; onComplete?: () => void }) {
  const { ref, time } = useTimer(unit, target, onComplete);
  const display = unit === "Second" ? String(time).padStart(2, "0") : time;

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-1 px-4 py-6 md:gap-2 md:py-8">
      <div className="relative w-full overflow-hidden text-center">
        <span ref={ref} className="block text-3xl font-mono font-semibold text-white md:text-5xl lg:text-7xl">
          {display}
        </span>
      </div>
      <span className="text-sm font-light text-gray-400 md:text-base lg:text-lg">{label}</span>
      <div className="h-px w-full bg-gray-700 mt-4" />
    </div>
  );
}

function useTimer(unit: string, target: Date, onComplete?: () => void) {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeRef = useRef(0);
  const [time, setTime] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    handleCountdown();
    intervalRef.current = setInterval(handleCountdown, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handleCountdown = async () => {
    const distance = target.getTime() - Date.now();

    if (distance <= 0 && !completedRef.current) {
      completedRef.current = true;
      if (onComplete) onComplete();
    }

    let newTime = 0;
    switch (unit) {
      case "Day":    newTime = Math.max(0, Math.floor(distance / DAY)); break;
      case "Hour":   newTime = Math.max(0, Math.floor((distance % DAY) / HOUR)); break;
      case "Minute": newTime = Math.max(0, Math.floor((distance % HOUR) / MINUTE)); break;
      default:       newTime = Math.max(0, Math.floor((distance % MINUTE) / SECOND));
    }

    if (newTime !== timeRef.current) {
      await animate(ref.current, { y: ["0%", "-50%"], opacity: [1, 0] }, { duration: 0.35 });
      timeRef.current = newTime;
      setTime(newTime);
      await animate(ref.current, { y: ["50%", "0%"], opacity: [0, 1] }, { duration: 0.35 });
    }
  };

  return { ref, time };
}

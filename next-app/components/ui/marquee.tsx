"use client";

import { ReactNode } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className = "",
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 1,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 ${vertical ? 'flex-col' : 'flex-row'} ${className}`}
      style={{ gap: 'var(--gap, 1rem)' }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around ${vertical ? 'flex-col animate-marquee-vertical' : 'flex-row animate-marquee'} ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''} ${reverse ? '[animation-direction:reverse]' : ''}`}
            style={{ gap: 'var(--gap, 1rem)' }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

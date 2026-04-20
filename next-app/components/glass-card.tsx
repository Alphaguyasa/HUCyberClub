import * as React from "react";
import { ChevronDown } from "lucide-react";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  category?: string;
  difficulty?: string;
  points?: number;
  solves?: number;
  solved?: boolean;
  diffColor?: string;
  catColor?: string;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({
    className,
    title = "Challenge",
    description = "Solve this challenge to earn points.",
    category = "Web",
    difficulty = "Easy",
    points = 100,
    solves = 0,
    solved = false,
    diffColor = "#4ade80",
    catColor = "#60a5fa",
    onClick,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={`group h-[300px] w-[290px] [perspective:1000px] cursor-pointer ${className ?? ""}`}
        onClick={onClick}
        {...props}
      >
        <div className="relative h-full rounded-[50px] bg-gradient-to-br from-zinc-900 to-black shadow-2xl transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[box-shadow:rgba(0,0,0,0.3)_30px_50px_25px_-40px,rgba(0,0,0,0.1)_0px_25px_30px_0px] group-hover:[transform:rotate3d(1,1,0,30deg)]">

          {/* Glass inner border */}
          <div className="absolute inset-2 rounded-[55px] border-b border-l border-white/20 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm [transform-style:preserve-3d] [transform:translate3d(0,0,25px)]" />

          {/* Solved badge */}
          {solved && (
            <div
              className="absolute top-5 left-5 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold [transform:translate3d(0,0,26px)]"
              style={{ backgroundColor: '#4ade80', color: '#111' }}
            >
              ✓ Solved
            </div>
          )}

          {/* Decorative circles */}
          <div className="absolute top-0 right-0 [transform-style:preserve-3d]">
            {[
              { size: "170px", pos: "8px",  z: "20px", delay: "0s"   },
              { size: "140px", pos: "10px", z: "40px", delay: "0.4s" },
              { size: "110px", pos: "17px", z: "60px", delay: "0.8s" },
              { size: "80px",  pos: "23px", z: "80px", delay: "1.2s" },
            ].map((circle, i) => (
              <div
                key={i}
                className="absolute aspect-square rounded-full bg-white/10 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] transition-all duration-500 ease-in-out"
                style={{
                  width: circle.size,
                  top: circle.pos,
                  right: circle.pos,
                  transform: `translate3d(0, 0, ${circle.z})`,
                  transitionDelay: circle.delay,
                }}
              />
            ))}
            {/* Points badge in circle */}
            <div
              className="absolute grid aspect-square w-[50px] place-content-center rounded-full shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] transition-all duration-500 ease-in-out [transform:translate3d(0,0,100px)] [transition-delay:1.6s] group-hover:[transform:translate3d(0,0,120px)]"
              style={{ top: "30px", right: "30px", backgroundColor: '#C9C73C' }}
            >
              <span className="text-[9px] font-black text-black leading-tight text-center">{points}{"\n"}pts</span>
            </div>
          </div>

          {/* Text content */}
          <div className="absolute [transform:translate3d(0,0,26px)]">
            <div className="px-7 pt-[100px] pb-0">
              <span className="block text-xl font-black text-white leading-tight mb-2">{title}</span>
              <span className="block text-[13px] text-zinc-300 line-clamp-2 leading-relaxed">{description}</span>
            </div>
          </div>

          {/* Bottom row */}
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between [transform-style:preserve-3d] [transform:translate3d(0,0,26px)]">
            <div className="flex gap-2 [transform-style:preserve-3d]">
              {/* Category badge */}
              <span
                className="px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all duration-200 group-hover:[transform:translate3d(0,0,50px)]"
                style={{ backgroundColor: `${catColor}25`, color: catColor, transitionDelay: "400ms" }}
              >
                {category}
              </span>
              {/* Difficulty badge */}
              <span
                className="px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all duration-200 group-hover:[transform:translate3d(0,0,50px)]"
                style={{ backgroundColor: `${diffColor}25`, color: diffColor, transitionDelay: "600ms" }}
              >
                {difficulty}
              </span>
            </div>

            <div className="flex items-center gap-1 cursor-pointer transition-all duration-200 ease-in-out hover:[transform:translate3d(0,0,10px)]">
              <span className="text-[11px] font-bold text-white">{solves} solves</span>
              <ChevronDown className="h-3.5 w-3.5 stroke-white" strokeWidth={3} />
            </div>
          </div>

        </div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;

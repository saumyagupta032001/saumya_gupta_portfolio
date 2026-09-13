
// import { useEffect, useRef, useState, useCallback } from "react";
// import { useInView } from "framer-motion";

// // High-performance RAF Number Counter
// const CounterNumber = ({ target, suffix = "+", triggerKey }) => {
//   const [count, setCount] = useState(0);
//   const animationFrameRef = useRef(null);

//   const startAnimation = useCallback(() => {
//     let startTime = null;
//     const duration = 1400; // Smooth 1.4s animation

//     if (animationFrameRef.current) {
//       cancelAnimationFrame(animationFrameRef.current);
//     }

//     const step = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);

//       // Smooth Quintic Ease-Out curve
//       const easeOut = 1 - Math.pow(1 - progress, 4);
//       setCount(Math.floor(easeOut * target));

//       if (progress < 1) {
//         animationFrameRef.current = requestAnimationFrame(step);
//       } else {
//         setCount(target);
//       }
//     };

//     animationFrameRef.current = requestAnimationFrame(step);
//   }, [target]);

//   useEffect(() => {
//     startAnimation();

//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [triggerKey, startAnimation]);

//   return (
//     <span className="tabular-nums font-mono tracking-tight select-none">
//       {count}
//       {suffix}
//     </span>
//   );
// };

// const stats = [
//   { value: 2, suffix: "+", label: "Years Exp." },
//   { value: 15, suffix: "+", label: "Projects Done" },
//   { value: 10, suffix: "+", label: "Tech Mastered" },
// ];

// const HeroStats = () => {
//   const [triggerKey, setTriggerKey] = useState(0);
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.3 });

//   // Viewport trigger
//   useEffect(() => {
//     if (isInView) {
//       setTriggerKey((prev) => prev + 1);
//     }
//   }, [isInView]);

//   // Global trigger on hovering or tapping anywhere in the stats section
//   const handleTriggerAll = () => {
//     setTriggerKey((prev) => prev + 1);
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseEnter={handleTriggerAll}
//       onTouchStart={handleTriggerAll}
//       className="
//         grid
//         grid-cols-3
//         gap-2.5
//         sm:gap-4
//         pt-2
//         w-full
//         max-w-lg
//         lg:max-w-md
//         cursor-pointer
//       "
//     >
//       {stats.map((item, index) => (
//         <div
//           key={item.label}
//           className="
//             group
//             relative
//             overflow-hidden
//             rounded-xl
//             border
//             border-slate-800/80
//             bg-[#0B132B]/60
//             p-3
//             sm:p-4
//             text-center
//             backdrop-blur-md
//             transition-all
//             duration-300
//             hover:border-cyan-500/40
//             hover:bg-cyan-950/20
//             hover:-translate-y-1
//             hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)]
//           "
//         >
//           {/* Subtle Glow Top Border */}
//           <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/0 group-hover:via-cyan-400/60 transition-all duration-500" />

//           {/* Number */}
//           <div className="text-xl sm:text-2xl font-bold text-cyan-400 transition-transform duration-300 group-hover:scale-105">
//             <CounterNumber
//               target={item.value}
//               suffix={item.suffix}
//               triggerKey={triggerKey}
//             />
//           </div>

//           {/* Label */}
//           <p className="mt-0.5 text-[11px] sm:text-xs text-slate-400 font-medium whitespace-nowrap transition-colors duration-300 group-hover:text-slate-200">
//             {item.label}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HeroStats;



// import { useEffect, useRef, useState, useCallback } from "react";
// import { useInView } from "framer-motion";

// // High-performance RAF Number Counter
// const CounterNumber = ({ target, suffix = "+", triggerKey }) => {
//   const [count, setCount] = useState(0);
//   const animationFrameRef = useRef(null);

//   const startAnimation = useCallback(() => {
//     let startTime = null;
//     const duration = 1400; // Smooth 1.4s animation

//     if (animationFrameRef.current) {
//       cancelAnimationFrame(animationFrameRef.current);
//     }

//     const step = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);

//       // Smooth Quintic Ease-Out curve
//       const easeOut = 1 - Math.pow(1 - progress, 4);
//       setCount(Math.floor(easeOut * target));

//       if (progress < 1) {
//         animationFrameRef.current = requestAnimationFrame(step);
//       } else {
//         setCount(target);
//       }
//     };

//     animationFrameRef.current = requestAnimationFrame(step);
//   }, [target]);

//   useEffect(() => {
//     startAnimation();

//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [triggerKey, startAnimation]);

//   return (
//     <span className="tabular-nums font-mono tracking-tight select-none">
//       {count}
//       {suffix}
//     </span>
//   );
// };

// const stats = [
//   { value: 2, suffix: "+", label: "Years Exp." },
//   { value: 15, suffix: "+", label: "Projects Done" },
//   { value: 10, suffix: "+", label: "Tech Mastered" },
// ];

// const HeroStats = () => {
//   const [triggerKey, setTriggerKey] = useState(0);
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.3 });

//   // Viewport trigger
//   useEffect(() => {
//     if (isInView) {
//       setTriggerKey((prev) => prev + 1);
//     }
//   }, [isInView]);

//   // Global trigger on hovering or tapping anywhere in the stats section
//   const handleTriggerAll = () => {
//     setTriggerKey((prev) => prev + 1);
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseEnter={handleTriggerAll}
//       onTouchStart={handleTriggerAll}
//       className="
//         grid
//         grid-cols-3
//         gap-2.5
//         sm:gap-4
//         pt-2
//         w-full
//         max-w-lg
//         lg:max-w-md
//         cursor-pointer
//       "
//     >
//       {stats.map((item, index) => (
//         <div
//           key={item.label}
//           className="
//             group
//             relative
//             overflow-hidden
//             rounded-xl
//             border
//             border-slate-800/80
//             bg-[#0B132B]/60
//             p-3
//             sm:p-4
//             text-center
//             backdrop-blur-md
//             transition-all
//             duration-300
//             hover:border-cyan-500/40
//             hover:bg-cyan-950/20
//             hover:-translate-y-1
//             hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)]
//           "
//         >
//           {/* Subtle Glow Top Border */}
//           <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/0 group-hover:via-cyan-400/60 transition-all duration-500" />

//           {/* Number */}
//           <div className="text-xl sm:text-2xl font-bold text-cyan-400 transition-transform duration-300 group-hover:scale-105">
//             <CounterNumber
//               target={item.value}
//               suffix={item.suffix}
//               triggerKey={triggerKey}
//             />
//           </div>

//           {/* Label */}
//           <p className="mt-0.5 text-[11px] sm:text-xs text-slate-400 font-medium whitespace-nowrap transition-colors duration-300 group-hover:text-slate-200">
//             {item.label}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HeroStats;


import { useEffect, useRef, useState, useCallback } from "react";
import { useInView } from "framer-motion";

// High-performance RAF Number Counter
const CounterNumber = ({ target, suffix = "+", triggerKey }) => {
  const [count, setCount] = useState(0);
  const animationFrameRef = useRef(null);

  const startAnimation = useCallback(() => {
    let startTime = null;
    const duration = 1400; // Smooth 1.4s animation

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);
  }, [target]);

  useEffect(() => {
    startAnimation();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [triggerKey, startAnimation]);

  return (
    <span className="tabular-nums font-mono tracking-tight select-none">
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  { value: 2, suffix: "+", label: "Years Exp." },
  { value: 15, suffix: "+", label: "Projects Done" },
  { value: 10, suffix: "+", label: "Tech Mastered" },
];

const HeroStats = () => {
  const [triggerKey, setTriggerKey] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  // Viewport trigger
  useEffect(() => {
    if (isInView) {
      setTriggerKey((prev) => prev + 1);
    }
  }, [isInView]);

  // Global trigger on hover/tap
  const handleTriggerAll = () => {
    setTriggerKey((prev) => prev + 1);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleTriggerAll}
      onTouchStart={handleTriggerAll}
      className="
        grid
        grid-cols-3
        gap-2.5
        sm:gap-4
        pt-2
        w-full
        max-w-lg
        lg:max-w-md
        cursor-pointer
      "
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className="
            group
            relative
            overflow-hidden
            rounded-xl
            border
            border-zinc-800/80
            bg-zinc-950/70
            p-3
            sm:p-4
            text-center
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-rose-500/40
            hover:bg-rose-950/20
            hover:-translate-y-1
            hover:shadow-[0_8px_25px_rgba(244,63,94,0.15)]
          "
        >
          {/* Top Border Glow */}
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-rose-400/0 group-hover:via-rose-400/60 transition-all duration-500" />

          {/* Number */}
          <div className="text-xl sm:text-2xl font-bold text-rose-400 transition-transform duration-300 group-hover:scale-105">
            <CounterNumber
              target={item.value}
              suffix={item.suffix}
              triggerKey={triggerKey}
            />
          </div>

          {/* Label */}
          <p className="mt-0.5 text-[11px] sm:text-xs text-zinc-400 font-medium whitespace-nowrap transition-colors duration-300 group-hover:text-zinc-200">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
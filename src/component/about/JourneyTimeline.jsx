

// import { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import JourneyCard from "./JourneyCard";
// import { journeyData } from "../../data/journeyData";
// import TimelineDot from "../career/TimelineDot";

// const JourneyTimeline = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [isManual, setIsManual] = useState(false);
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { amount: 0.25 });

//   const totalItems = journeyData.length;
//   const progressPercent =
//     totalItems > 1 ? (activeStep / (totalItems - 1)) * 100 : 100;

//   // Auto progression that gracefully pauses at the end instead of snapping
//   useEffect(() => {
//     if (!isInView || isManual) return;

//     const timer = setInterval(() => {
//       setActiveStep((prev) => {
//         if (prev < totalItems - 1) {
//           return prev + 1;
//         }
//         // Last card par pahuche toh wahi complete hold rahega
//         return prev;
//       });
//     }, 3200);

//     return () => clearInterval(timer);
//   }, [isInView, isManual, totalItems]);

//   const handleSelectStep = (index) => {
//     setIsManual(true);
//     setActiveStep(index);

//     const cardElem = document.getElementById(`journey-card-${index}`);
//     if (cardElem) {
//       cardElem.scrollIntoView({
//         behavior: "smooth",
//         block: "nearest",
//       });
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseEnter={() => setIsManual(true)}
//       className="relative max-w-5xl mx-auto"
//     >
//       {/* Static Base Track */}
//       <div className="absolute left-4 md:left-1/2 top-5 bottom-5 w-[2px] -translate-x-1/2 bg-slate-800/80 pointer-events-none" />

//       {/* Smooth Laser Beam Progression */}
//       <motion.div
//         className="absolute left-4 md:left-1/2 top-5 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_15px_rgba(34,211,238,0.9)] pointer-events-none"
//         initial={{ height: "0%" }}
//         animate={{ height: `${progressPercent}%` }}
//         transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
//       />

//       <div className="space-y-8 sm:space-y-12">
//         {journeyData.map((item, index) => {
//           const isLeft = index % 2 === 0;
//           const isActive = activeStep === index;
//           const isPassed = index <= activeStep;

//           return (
//             <div
//               id={`journey-card-${index}`}
//               key={item.id || index}
//               className={`relative flex items-center w-full ${
//                 isLeft ? "md:justify-start" : "md:justify-end"
//               } pl-10 md:pl-0`}
//             >
//               {/* Dot */}
//               <TimelineDot
//                 isActive={isActive}
//                 isPassed={isPassed}
//                 onClick={() => handleSelectStep(index)}
//               />

//               {/* Card */}
//               <div className="w-full md:w-[46%]">
//                 <JourneyCard
//                   item={item}
//                   index={index}
//                   isActive={isActive}
//                   onClick={() => handleSelectStep(index)}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default JourneyTimeline;





import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import JourneyCard from "./JourneyCard";
import { journeyData } from "../../data/journeyData";
import TimelineDot from "../career/TimelineDot";

const JourneyTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.25 });

  const totalItems = journeyData.length;
  const progressPercent =
    totalItems > 1 ? (activeStep / (totalItems - 1)) * 100 : 100;

  // Auto progression that gracefully pauses at the end instead of snapping
  useEffect(() => {
    if (!isInView || isManual) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < totalItems - 1) {
          return prev + 1;
        }
        // Last card par pahuche toh wahi complete hold rahega
        return prev;
      });
    }, 3200);

    return () => clearInterval(timer);
  }, [isInView, isManual, totalItems]);

  const handleSelectStep = (index) => {
    setIsManual(true);
    setActiveStep(index);

    const cardElem = document.getElementById(`journey-card-${index}`);
    if (cardElem) {
      cardElem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsManual(true)}
      className="relative max-w-5xl mx-auto"
    >
      {/* Static Base Track */}
      <div className="absolute left-4 md:left-1/2 top-5 bottom-5 w-[2px] -translate-x-1/2 bg-slate-800/80 pointer-events-none" />

      {/* Smooth Laser Beam Progression */}
      <motion.div
        className="absolute left-4 md:left-1/2 top-5 w-[2px] -translate-x-1/2 bg-gradient-to-b from-rose-400 via-pink-400 to-fuchsia-500 shadow-[0_0_15px_rgba(34,211,238,0.9)] pointer-events-none"
        initial={{ height: "0%" }}
        animate={{ height: `${progressPercent}%` }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      />

      <div className="space-y-8 sm:space-y-12">
        {journeyData.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isActive = activeStep === index;
          const isPassed = index <= activeStep;

          return (
            <div
              id={`journey-card-${index}`}
              key={item.id || index}
              className={`relative flex items-center w-full ${
                isLeft ? "md:justify-start" : "md:justify-end"
              } pl-10 md:pl-0`}
            >
              {/* Dot */}
              <TimelineDot
                isActive={isActive}
                isPassed={isPassed}
                onClick={() => handleSelectStep(index)}
              />

              {/* Card */}
              <div className="w-full md:w-[46%]">
                <JourneyCard
                  item={item}
                  index={index}
                  isActive={isActive}
                  onClick={() => handleSelectStep(index)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneyTimeline;
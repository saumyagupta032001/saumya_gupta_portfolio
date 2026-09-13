


// import { motion } from "framer-motion";

// const JourneyCard = ({ item, index, isActive, onClick }) => {
//   const isLeft = index % 2 === 0;

//   return (
//     <motion.div
//       onClick={onClick}
//       initial={{
//         opacity: 0,
//         x: typeof window !== "undefined" && window.innerWidth < 768 ? 20 : isLeft ? -25 : 25,
//         y: 15,
//       }}
//       whileInView={{ opacity: 1, x: 0, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className={`
//         group
//         relative
//         overflow-hidden
//         rounded-2xl
//         border
//         p-5
//         sm:p-6
//         backdrop-blur-xl
//         cursor-pointer
//         select-none
//         transform-gpu
//         transition-all
//         duration-300
//         ${
//           isActive
//             ? "border-cyan-400 bg-[#0B132B] shadow-[0_10px_35px_rgba(6,182,212,0.25)] -translate-y-1"
//             : "border-slate-800/90 bg-[#0B132B]/50 hover:border-cyan-500/40 hover:bg-[#0B132B]/75 hover:-translate-y-1"
//         }
//       `}
//     >
//       {/* Background Ambient Light */}
//       <div
//         className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition-opacity duration-300 ${
//           isActive ? "bg-cyan-500/20 opacity-100" : "bg-cyan-500/10 opacity-0 group-hover:opacity-100"
//         }`}
//       />

//       {/* Meta Header */}
//       <div className="flex items-center justify-between gap-3 mb-3">
//         <span
//           className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-colors ${
//             isActive
//               ? "bg-cyan-400 text-slate-950 font-bold"
//               : "bg-cyan-500/10 border border-cyan-400/30 text-cyan-300"
//           }`}
//         >
//           {item.year}
//         </span>

//         {item.icon && (
//           <div
//             className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl text-lg sm:text-xl transition-colors duration-300 ${
//               isActive
//                 ? "bg-cyan-400 text-slate-950"
//                 : "bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 group-hover:border-cyan-400/40"
//             }`}
//           >
//             {item.icon}
//           </div>
//         )}
//       </div>

//       {/* Content */}
//       <h3
//         className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
//           isActive ? "text-cyan-300" : "text-white group-hover:text-cyan-200"
//         }`}
//       >
//         {item.title}
//       </h3>

//       {item.subtitle && (
//         <h4 className="mt-0.5 text-xs sm:text-sm font-medium text-slate-400">
//           {item.subtitle}
//         </h4>
//       )}

//       <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 font-normal">
//         {item.description}
//       </p>

//       {/* Bottom Progress Underline */}
//       <div
//         className={`mt-4 h-[2px] rounded-full transition-all duration-300 ${
//           isActive
//             ? "w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500"
//             : "w-0 bg-cyan-400/30 group-hover:w-1/3"
//         }`}
//       />
//     </motion.div>
//   );
// };

// export default JourneyCard;






// import { motion } from "framer-motion";

// const JourneyCard = ({ item, index, isActive, onClick }) => {
//   const isLeft = index % 2 === 0;

//   return (
//     <motion.div
//       onClick={onClick}
//       initial={{
//         opacity: 0,
//         x: typeof window !== "undefined" && window.innerWidth < 768 ? 20 : isLeft ? -25 : 25,
//         y: 15,
//       }}
//       whileInView={{ opacity: 1, x: 0, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className={`
//         group
//         relative
//         overflow-hidden
//         rounded-2xl
//         border
//         p-5
//         sm:p-6
//         backdrop-blur-xl
//         cursor-pointer
//         select-none
//         transform-gpu
//         transition-all
//         duration-300
//         ${
//           isActive
//             ? "border-cyan-400 bg-[#0B132B] shadow-[0_10px_35px_rgba(6,182,212,0.25)] -translate-y-1"
//             : "border-slate-800/90 bg-[#0B132B]/50 hover:border-cyan-500/40 hover:bg-[#0B132B]/75 hover:-translate-y-1"
//         }
//       `}
//     >
//       {/* Background Ambient Light */}
//       <div
//         className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition-opacity duration-300 ${
//           isActive ? "bg-cyan-500/20 opacity-100" : "bg-cyan-500/10 opacity-0 group-hover:opacity-100"
//         }`}
//       />

//       {/* Meta Header */}
//       <div className="flex items-center justify-between gap-3 mb-3">
//         <span
//           className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-colors ${
//             isActive
//               ? "bg-cyan-400 text-slate-950 font-bold"
//               : "bg-cyan-500/10 border border-cyan-400/30 text-cyan-300"
//           }`}
//         >
//           {item.year}
//         </span>

//         {item.icon && (
//           <div
//             className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl text-lg sm:text-xl transition-colors duration-300 ${
//               isActive
//                 ? "bg-cyan-400 text-slate-950"
//                 : "bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 group-hover:border-cyan-400/40"
//             }`}
//           >
//             {item.icon}
//           </div>
//         )}
//       </div>

//       {/* Content */}
//       <h3
//         className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
//           isActive ? "text-cyan-300" : "text-white group-hover:text-cyan-200"
//         }`}
//       >
//         {item.title}
//       </h3>

//       {item.subtitle && (
//         <h4 className="mt-0.5 text-xs sm:text-sm font-medium text-slate-400">
//           {item.subtitle}
//         </h4>
//       )}

//       <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 font-normal">
//         {item.description}
//       </p>

//       {/* Bottom Progress Underline */}
//       <div
//         className={`mt-4 h-[2px] rounded-full transition-all duration-300 ${
//           isActive
//             ? "w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500"
//             : "w-0 bg-cyan-400/30 group-hover:w-1/3"
//         }`}
//       />
//     </motion.div>
//   );
// };

// export default JourneyCard;


import { motion } from "framer-motion";

const JourneyCard = ({ item, index, isActive, onClick }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      onClick={onClick}
      initial={{
        opacity: 0,
        x: typeof window !== "undefined" && window.innerWidth < 768 ? 20 : isLeft ? -25 : 25,
        y: 15,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    className={`
  group
  relative
  overflow-hidden
  rounded-2xl
  border
  p-5
  sm:p-6
  backdrop-blur-xl
  cursor-pointer
  select-none
  transform-gpu
  transition-all
  duration-300
  ${
    isActive
      ? "border-rose-400 bg-zinc-900/90 shadow-[0_10px_35px_rgba(244,63,94,0.25)] -translate-y-1"
      : "border-zinc-800/80 bg-zinc-950/70 hover:border-rose-500/40 hover:bg-zinc-900/60 hover:-translate-y-1"
  }
`}
    >
      {/* Background Ambient Light */}
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition-opacity duration-300 ${
          isActive ? "bg-rose-500/20 opacity-100" : "bg-rose-500/10 opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Meta Header */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-colors ${
            isActive
              ? "bg-rose-400 text-slate-950 font-bold"
              : "bg-rose-500/10 border border-rose-400/30 text-rose-300"
          }`}
        >
          {item.year}
        </span>

        {item.icon && (
          <div
            className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl text-lg sm:text-xl transition-colors duration-300 ${
              isActive
                ? "bg-rose-400 text-slate-950"
                : "bg-rose-500/10 border border-rose-400/20 text-rose-400 group-hover:border-rose-400/40"
            }`}
          >
            {item.icon}
          </div>
        )}
      </div>

      {/* Content */}
      <h3
        className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
          isActive ? "text-rose-300" : "text-white group-hover:text-rose-200"
        }`}
      >
        {item.title}
      </h3>

      {item.subtitle && (
        <h4 className="mt-0.5 text-xs sm:text-sm font-medium text-slate-400">
          {item.subtitle}
        </h4>
      )}

      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 font-normal">
        {item.description}
      </p>

      {/* Bottom Progress Underline */}
      <div
        className={`mt-4 h-[2px] rounded-full transition-all duration-300 ${
          isActive
            ? "w-full bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500"
            : "w-0 bg-rose-400/30 group-hover:w-1/3"
        }`}
      />
    </motion.div>
  );
};

export default JourneyCard;
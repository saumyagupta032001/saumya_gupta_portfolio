
// const TimelineDot = ({ isActive, isPassed, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className="
//         absolute
//         left-4
//         md:left-1/2
//         -translate-x-1/2
//         flex
//         items-center
//         justify-center
//         z-20
//         cursor-pointer
//         w-6
//         h-6
//       "
//     >
//       {/* Outer Pulse */}
//       {isActive && (
//         <div className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping pointer-events-none" />
//       )}

//       {/* Center Dot with constant 2px border */}
//       <div
//         className={`
//           rounded-full
//           border-2
//           transition-all
//           duration-300
//           flex
//           items-center
//           justify-center
//           ${
//             isActive
//               ? "h-5 w-5 border-cyan-300 bg-[#070B1F] shadow-[0_0_15px_rgba(34,211,238,0.9)]"
//               : isPassed
//               ? "h-4 w-4 border-cyan-400 bg-cyan-400"
//               : "h-3.5 w-3.5 border-slate-700 bg-[#070B1F] hover:border-cyan-400"
//           }
//         `}
//       >
//         {isActive && <div className="h-2 w-2 rounded-full bg-cyan-400" />}
//       </div>
//     </div>
//   );
// };

// export default TimelineDot;




// const TimelineDot = ({ isActive, isPassed, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className="
//         absolute
//         left-4
//         md:left-1/2
//         -translate-x-1/2
//         flex
//         items-center
//         justify-center
//         z-20
//         cursor-pointer
//         w-6
//         h-6
//       "
//     >
//       {/* Outer Pulse */}
//       {isActive && (
//         <div className="absolute inset-0 rounded-full bg-cyan-rose00/30 animate-ping pointer-events-none" />
//       )}

//       {/* Center Dot with constant 2px border */}
//       <div
//         className={`
//           rounded-full
//           border-2
//           transition-all
//           duration-300
//           flex
//           items-center
//           justify-center
//           ${
//             isActive
//               ? "h-5 w-5 border-rose-300 bg-[#000000] shadow-[0_0_15px_rgba(34,211,238,0.9)]"
//               : isPassed
//               ? "h-4 w-4 border-rose-400 bg-rose-400"
//               : "h-3.5 w-3.5 border-slate-700 bg-[#000000] hover:border-rose-400"
//           }
//         `}
//       >
//         {isActive && <div className="h-2 w-2 rounded-full bg-rose-400" />}
//       </div>
//     </div>
//   );
// };

// export default TimelineDot;


const TimelineDot = ({ isActive, isPassed, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        absolute
        left-4
        md:left-1/2
        -translate-x-1/2
        flex
        items-center
        justify-center
        z-20
        cursor-pointer
        w-6
        h-6
      "
    >
      {/* Outer Pulse */}
      {isActive && (
        <div className="absolute inset-0 rounded-full bg-rose-500/30 animate-ping pointer-events-none" />
      )}

      {/* Center Dot with constant 2px border */}
      <div
        className={`
          rounded-full
          border-2
          transition-all
          duration-300
          flex
          items-center
          justify-center
          ${
            isActive
              ? "h-5 w-5 border-rose-300 bg-[#000000] shadow-[0_0_15px_rgba(251,113,133,0.9)]"
              : isPassed
              ? "h-4 w-4 border-rose-400 bg-rose-400"
              : "h-3.5 w-3.5 border-slate-700 bg-[#000000] hover:border-rose-400"
          }
        `}
      >
        {isActive && <div className="h-2 w-2 rounded-full bg-rose-400" />}
      </div>
    </div>
  );
};

export default TimelineDot;
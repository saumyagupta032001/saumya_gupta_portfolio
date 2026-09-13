


// import { motion } from "framer-motion";
// import { FaJava, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
// import { SiSpringboot, SiMysql } from "react-icons/si";

// const techIcons = [
//   { icon: <FaJava />, color: "hover:text-orange-400" },
//   { icon: <FaReact />, color: "hover:text-cyan-400" },
//   { icon: <SiSpringboot />, color: "hover:text-emerald-400" },
//   { icon: <SiMysql />, color: "hover:text-blue-400" },
//   { icon: <FaDocker />, color: "hover:text-sky-400" },
//   { icon: <FaGitAlt />, color: "hover:text-red-400" },
// ];

// const FloatingTech = () => {
//   const total = techIcons.length;
//   // Radius percentage (orbit size)
//   const radius = 48; 

//   return (
//     <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
//       {/* 1. Orbit Parent: Smooth Continuous Rotation */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 35,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="relative w-full h-full"
//       >
//         {techIcons.map((tech, index) => {
//           // Calculate angle for equidistant distribution (60 deg each for 6 items)
//           const angle = (index / total) * 2 * Math.PI;
//           const x = 50 + radius * Math.cos(angle);
//           const y = 50 + radius * Math.sin(angle);

//           return (
//             <div
//               key={index}
//               className="absolute -translate-x-1/2 -translate-y-1/2"
//               style={{
//                 left: `${x}%`,
//                 top: `${y}%`,
//               }}
//             >
//               {/* 2. Counter-Rotation: Keeps the icon upright */}
//               <motion.div
//                 animate={{ rotate: -360 }}
//                 transition={{
//                   duration: 35,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="pointer-events-auto"
//               >
//                 <div
//                   className={`
//                     w-10 h-10 
//                     sm:w-12 sm:h-12 
//                     md:w-13 md:h-13 
//                     rounded-2xl 
//                     bg-[#0b1329]/85 
//                     backdrop-blur-md 
//                     border border-cyan-500/25 
//                     flex justify-center items-center 
//                     text-cyan-400/90 
//                     text-base sm:text-xl md:text-2xl 
//                     shadow-[0_4px_20px_rgba(0,0,0,0.35)]
//                     hover:border-cyan-400 
//                     hover:scale-125
//                     hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]
//                     transition-all duration-300
//                     cursor-pointer
//                     ${tech.color}
//                   `}
//                 >
//                   {tech.icon}
//                 </div>
//               </motion.div>
//             </div>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default FloatingTech;






// import { motion } from "framer-motion";
// import { FaNodeJs, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
// // import { SiSpringboot, SiMysql } from "react-icons/si";
// import { SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si";

// // const techIcons = [
// //   { icon: <FaJava />, color: "hover:text-orange-400" },
// //   { icon: <FaReact />, color: "hover:text-cyan-400" },
// //   { icon: <SiSpringboot />, color: "hover:text-emerald-400" },
// //   { icon: <SiMysql />, color: "hover:text-blue-400" },
// //   { icon: <FaDocker />, color: "hover:text-sky-400" },
// //   { icon: <FaGitAlt />, color: "hover:text-red-400" },
// // ];


// const techIcons = [
//   { icon: <FaReact />, color: "hover:text-cyan-400" },
//   { icon: <SiNextdotjs />, color: "hover:text-white" },
//   { icon: <FaNodeJs />, color: "hover:text-green-400" },
//   { icon: <SiMongodb />, color: "hover:text-green-500" },
//   { icon: <SiMysql />, color: "hover:text-blue-400" },
//   { icon: <FaDocker />, color: "hover:text-sky-400" },
//   { icon: <FaGitAlt />, color: "hover:text-orange-400" },
// ];

// const FloatingTech = () => {
//   const total = techIcons.length;
//   // Radius percentage (orbit size)
//   const radius = 48; 

//   return (
//     <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
//       {/* 1. Orbit Parent: Smooth Continuous Rotation */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 35,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="relative w-full h-full"
//       >
//         {techIcons.map((tech, index) => {
//           // Calculate angle for equidistant distribution (60 deg each for 6 items)
//           const angle = (index / total) * 2 * Math.PI;
//           const x = 50 + radius * Math.cos(angle);
//           const y = 50 + radius * Math.sin(angle);

//           return (
//             <div
//               key={index}
//               className="absolute -translate-x-1/2 -translate-y-1/2"
//               style={{
//                 left: `${x}%`,
//                 top: `${y}%`,
//               }}
//             >
//               {/* 2. Counter-Rotation: Keeps the icon upright */}
//               <motion.div
//                 animate={{ rotate: -360 }}
//                 transition={{
//                   duration: 35,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="pointer-events-auto"
//               >
//                 <div
//                   className={`
//                     w-10 h-10 
//                     sm:w-12 sm:h-12 
//                     md:w-13 md:h-13 
//                     rounded-2xl 
//                     bg-[#0b1329]/85 
//                     backdrop-blur-md 
//                     border border-cyan-500/25 
//                     flex justify-center items-center 
//                     text-cyan-400/90 
//                     text-base sm:text-xl md:text-2xl 
//                     shadow-[0_4px_20px_rgba(0,0,0,0.35)]
//                     hover:border-cyan-400 
//                     hover:scale-125
//                     hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]
//                     transition-all duration-300
//                     cursor-pointer
//                     ${tech.color}
//                   `}
//                 >
//                   {tech.icon}
//                 </div>
//               </motion.div>
//             </div>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default FloatingTech;


import { motion } from "framer-motion";
import { FaNodeJs, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si";

const techIcons = [
  { icon: <FaReact />, color: "hover:text-rose-400" },
  { icon: <SiNextdotjs />, color: "hover:text-white" },
  { icon: <FaNodeJs />, color: "hover:text-emerald-400" },
  { icon: <SiMongodb />, color: "hover:text-green-500" },
  { icon: <SiMysql />, color: "hover:text-pink-400" },
  { icon: <FaDocker />, color: "hover:text-fuchsia-400" },
  { icon: <FaGitAlt />, color: "hover:text-orange-400" },
];

const FloatingTech = () => {
  const total = techIcons.length;
  const radius = 48; // Radius percentage for orbit size

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
      {/* 1. Orbit Parent: Continuous Linear Rotation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative w-full h-full"
      >
        {techIcons.map((tech, index) => {
          const angle = (index / total) * 2 * Math.PI;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);

          return (
            <div
              key={index}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
            >
              {/* 2. Counter-Rotation: Keeps icons upright */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-auto"
              >
                <div
                  className={`
                    w-10 h-10 
                    sm:w-12 sm:h-12 
                    md:w-13 md:h-13 
                    rounded-2xl 
                    bg-zinc-950/85 
                    backdrop-blur-md 
                    border border-rose-500/25 
                    flex justify-center items-center 
                    text-rose-400/90 
                    text-base sm:text-xl md:text-2xl 
                    shadow-[0_4px_20px_rgba(0,0,0,0.5)]
                    hover:border-rose-400 
                    hover:scale-125
                    hover:shadow-[0_0_20px_rgba(251,113,133,0.4)]
                    transition-all duration-300
                    cursor-pointer
                    ${tech.color}
                  `}
                >
                  {tech.icon}
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FloatingTech;
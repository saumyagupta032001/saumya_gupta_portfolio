
// import { motion } from "framer-motion";

// const SkillsHeader = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 25 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
//     >
//       {/* Pulse Badge */}
//       <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
//         <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
//         <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
//           Core Competencies
//         </span>
//       </div>

//       {/* Heading */}
//       <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
//         Skills{" "}
//         <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
//           Galaxy
//         </span>
//       </h2>

//       {/* Subtitle */}
//       <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
//         Explore the core technologies and modern frameworks I leverage to design scalable full-stack applications with high-performance architectures.
//       </p>
//     </motion.div>
//   );
// };

// export default SkillsHeader;




import { motion } from "framer-motion";

const SkillsHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
    >
      {/* Pulse Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-rose-300">
          Core Competencies
        </span>
      </div>

      {/* Heading */}
      <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
        Skills{" "}
        <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
          Galaxy
        </span>
      </h2>

      {/* Subtitle */}
      <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
        Explore the core technologies and modern frameworks I leverage to design scalable full-stack applications with high-performance architectures.
      </p>
    </motion.div>
  );
};

export default SkillsHeader;



// import { motion } from "framer-motion";
// import Container from "../common/Container";
// import JourneyTimeline from "./JourneyTimeline";

// const Journey = () => {
//   return (
//     <section
//       id="journey"
//       className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#070B1F]"
//     >
//       {/* Background Ambient Glow */}
//       <div className="pointer-events-none absolute top-12 -left-20 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
//       <div className="pointer-events-none absolute bottom-10 -right-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-purple-500/10 blur-[140px]" />

//       <Container>
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
//         >
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
//             <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
//               My Journey
//             </span>
//           </div>

//           <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
//             From Beginner to{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
//               Full Stack Developer
//             </span>
//           </h2>

//           <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-justify text-slate-400">
//             Milestones that shaped my path from writing initial programs to crafting scalable enterprise solutions with modern full-stack architectures.
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <JourneyTimeline />
//       </Container>
//     </section>
//   );
// };

// export default Journey;




import { motion } from "framer-motion";
import Container from "../common/Container";
import JourneyTimeline from "./JourneyTimeline";

const Journey = () => {
  return (
    <section
      id="journey"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-black"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-12 -left-20 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 -right-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-purple-500/10 blur-[140px]" />

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-rose-300">
              My Journey
            </span>
          </div>

          <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From Beginner to{" "}
            <span className="text-gradient-primary">
              Full Stack Developer
            </span>
          </h2>

          <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-justify text-slate-400">
            Milestones that shaped my path from writing initial programs to crafting scalable enterprise solutions with modern full-stack architectures.
          </p>
        </motion.div>

        {/* Timeline */}
        <JourneyTimeline />
      </Container>
    </section>
  );
};

export default Journey;
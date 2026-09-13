


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Briefcase,
//   GraduationCap,
//   MapPin,
//   CheckCircle2,
//   ChevronRight,
//   ChevronDown,
//   Sparkles,
//   Terminal,
//   X,
// } from "lucide-react";
// import Container from "../common/Container";
// import { careerData } from "@/data/careerData";

// const Career = () => {
//   const [selectedId, setSelectedId] = useState(careerData[0]?.id || 5);
//   const [activeFilter, setActiveFilter] = useState("all");

//   const filteredList = careerData.filter((item) =>
//     activeFilter === "all" ? true : item.type === activeFilter
//   );

//   const activeItem = careerData.find((item) => item.id === selectedId);

//   // Smooth toggle handler
//   const handleCardClick = (id) => {
//     setSelectedId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <section
//       id="experience"
//       className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#070B1F]"
//     >
//       {/* Background Glows */}
//       <div className="pointer-events-none absolute top-10 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
//       <div className="pointer-events-none absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

//       <Container>
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
//             <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
//               Career & Credentials
//             </span>
//           </div>

//           <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
//             Work Experience &{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
//               Education
//             </span>
//           </h2>

//           <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
//             Select any milestone to inspect technical responsibilities, architecture impact, and specialized toolsets.
//           </p>

//           {/* Quick Filters */}
//           <div className="mt-7 inline-flex p-1 rounded-2xl border border-slate-800 bg-[#0B132B]/80 backdrop-blur-xl">
//             {["all", "experience", "education"].map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => {
//                   setActiveFilter(filter);
//                   const firstMatch = careerData.find(
//                     (i) => filter === "all" || i.type === filter
//                   );
//                   if (firstMatch) setSelectedId(firstMatch.id);
//                 }}
//                 className={`capitalize px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
//                   activeFilter === filter
//                     ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.35)]"
//                     : "text-slate-400 hover:text-white"
//                 }`}
//               >
//                 {filter === "all" ? "All Milestones" : filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Master-Detail Split Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
//           {/* Left Column: Interactive Milestone List */}
//           <div className="lg:col-span-5 space-y-3">
//             {filteredList.map((item) => {
//               const isSelected = selectedId === item.id;
//               const isWork = item.type === "experience";

//               return (
//                 <div key={item.id} className="flex flex-col">
//                   {/* Selector Card */}
//                   <div
//                     onClick={() => handleCardClick(item.id)}
//                     className={`
//                       group
//                       relative
//                       flex
//                       items-center
//                       justify-between
//                       p-4
//                       sm:p-5
//                       rounded-2xl
//                       border
//                       cursor-pointer
//                       select-none
//                       transform-gpu
//                       transition-colors
//                       duration-200
//                       ${
//                         isSelected
//                           ? "border-cyan-400 bg-[#0B132B] shadow-[0_4px_20px_rgba(6,182,212,0.2)]"
//                           : "border-slate-800/80 bg-[#0B132B]/40 hover:border-slate-700 hover:bg-[#0B132B]/75"
//                       }
//                     `}
//                   >
//                     <div className="flex items-center gap-3.5 min-w-0">
//                       <div
//                         className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base transition-colors ${
//                           isSelected
//                             ? "bg-cyan-400 text-slate-950 font-bold"
//                             : "bg-slate-900 border border-slate-700/60 text-slate-300"
//                         }`}
//                       >
//                         {item.icon || (isWork ? <Briefcase size={16} /> : <GraduationCap size={16} />)}
//                       </div>

//                       <div className="min-w-0">
//                         <div className="flex items-center gap-2">
//                           <span className="text-[11px] font-semibold text-cyan-400">
//                             {item.year}
//                           </span>
//                           <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
//                             {item.type}
//                           </span>
//                         </div>

//                         <h4
//                           className={`truncate text-sm sm:text-base font-bold transition-colors ${
//                             isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
//                           }`}
//                         >
//                           {item.title}
//                         </h4>
//                         <p className="truncate text-xs text-slate-400">
//                           {item.subtitle}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Desktop Icon vs Mobile Icon */}
//                     <div className="shrink-0 text-slate-500 pl-2">
//                       <div className="hidden lg:block">
//                         <ChevronRight
//                           size={16}
//                           className={`transition-transform duration-200 ${
//                             isSelected ? "text-cyan-400 translate-x-0.5" : "group-hover:text-slate-400"
//                           }`}
//                         />
//                       </div>
//                       <div className="lg:hidden">
//                         <ChevronDown
//                           size={18}
//                           className={`transition-transform duration-200 ${
//                             isSelected ? "rotate-180 text-cyan-400" : ""
//                           }`}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* MOBILE ONLY: Smooth Hardware-Accelerated Accordion */}
//                   <div
//                     className={`
//                       lg:hidden
//                       grid
//                       transition-all
//                       duration-300
//                       ease-in-out
//                       ${
//                         isSelected
//                           ? "grid-rows-[1fr] opacity-100 mt-2"
//                           : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
//                       }
//                     `}
//                   >
//                     <div className="overflow-hidden">
//                       <div className="rounded-2xl border border-cyan-500/30 bg-[#081124] p-4 sm:p-5 shadow-lg space-y-4">
//                         {/* Summary */}
//                         <p className="text-xs leading-relaxed text-slate-300">
//                           {item.description}
//                         </p>

//                         {/* Key Highlights */}
//                         {item.highlights && (
//                           <div className="space-y-2">
//                             <h5 className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
//                               <Sparkles size={12} />
//                               Key Contributions
//                             </h5>
//                             <ul className="space-y-2">
//                               {item.highlights.map((point, pIdx) => (
//                                 <li
//                                   key={pIdx}
//                                   className="flex items-start gap-2 text-xs text-slate-300"
//                                 >
//                                   <CheckCircle2
//                                     size={14}
//                                     className="text-cyan-400 shrink-0 mt-0.5"
//                                   />
//                                   <span>{point}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         )}

//                         {/* Tech Stack Chips */}
//                         {item.skills && (
//                           <div className="pt-3 border-t border-slate-800/80">
//                             <div className="flex flex-wrap gap-1.5">
//                               {item.skills.map((skill, sIdx) => (
//                                 <span
//                                   key={sIdx}
//                                   className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20 text-[10px] font-medium text-cyan-300"
//                                 >
//                                   {skill}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         )}

//                         {/* Direct Close Button */}
//                         <button
//                           type="button"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setSelectedId(null);
//                           }}
//                           className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
//                         >
//                           <X size={14} />
//                           <span>Close Details</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Right Column: Desktop Detail Inspector (Hidden on Mobile) */}
//           <div className="hidden lg:block lg:col-span-7 sticky top-28">
//             <AnimatePresence mode="wait">
//               {activeItem ? (
//                 <motion.div
//                   key={activeItem.id}
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -8 }}
//                   transition={{ duration: 0.2, ease: "easeOut" }}
//                   className="
//                     relative
//                     overflow-hidden
//                     rounded-3xl
//                     border
//                     border-cyan-500/30
//                     bg-[#0B132B]/90
//                     p-7
//                     xl:p-8
//                     backdrop-blur-2xl
//                     shadow-[0_15px_40px_rgba(0,0,0,0.6)]
//                   "
//                 >
//                   {/* Decorative Glow */}
//                   <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />

//                   {/* Inspector Header */}
//                   <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800">
//                     <div className="space-y-1.5">
//                       <div className="flex items-center gap-2">
//                         <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-semibold text-cyan-300">
//                           {activeItem.year}
//                         </span>
//                         {activeItem.location && (
//                           <span className="flex items-center gap-1 text-xs text-slate-400">
//                             <MapPin size={12} className="text-slate-500" />
//                             {activeItem.location}
//                           </span>
//                         )}
//                       </div>

//                       <h3 className="text-xl sm:text-2xl font-black text-white">
//                         {activeItem.title}
//                       </h3>
//                       <p className="text-sm font-semibold text-cyan-400">
//                         {activeItem.subtitle}
//                       </p>
//                     </div>

//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-2xl">
//                       {activeItem.icon || <Terminal size={22} />}
//                     </div>
//                   </div>

//                   {/* Summary */}
//                   <p className="mt-5 text-sm leading-relaxed text-slate-300">
//                     {activeItem.description}
//                   </p>

//                   {/* Key Contributions & Highlights */}
//                   {activeItem.highlights && (
//                     <div className="mt-6 space-y-3">
//                       <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
//                         <Sparkles size={14} className="text-cyan-400" />
//                         Key Engineering Impact
//                       </h4>
//                       <ul className="space-y-2.5">
//                         {activeItem.highlights.map((point, index) => (
//                           <li
//                             key={index}
//                             className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
//                           >
//                             <CheckCircle2
//                               size={15}
//                               className="text-cyan-400 shrink-0 mt-0.5"
//                             />
//                             <span>{point}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   {/* Tech Stack Chips */}
//                   {activeItem.skills && (
//                     <div className="mt-8 pt-5 border-t border-slate-800/80">
//                       <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
//                         Technologies & Tools
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {activeItem.skills.map((skill, sIdx) => (
//                           <span
//                             key={sIdx}
//                             className="px-3 py-1 rounded-lg bg-[#070B1F] border border-cyan-500/20 text-xs font-medium text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               ) : (
//                 <div className="rounded-3xl border border-slate-800/80 bg-[#0B132B]/40 p-12 text-center text-slate-500">
//                   Select a milestone from the list to view full engineering details.
//                 </div>
//               )}
//             </AnimatePresence>
//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Career;





// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Briefcase,
//   GraduationCap,
//   MapPin,
//   CheckCircle2,
//   ChevronRight,
//   ChevronDown,
//   Sparkles,
//   Terminal,
//   X,
// } from "lucide-react";
// import Container from "../common/Container";
// import { careerData } from "@/data/careerData";

// const Career = () => {
//   const [selectedId, setSelectedId] = useState(careerData[0]?.id || 5);
//   const [activeFilter, setActiveFilter] = useState("all");

//   const filteredList = careerData.filter((item) =>
//     activeFilter === "all" ? true : item.type === activeFilter
//   );

//   const activeItem = careerData.find((item) => item.id === selectedId);

//   // Smooth toggle handler
//   const handleCardClick = (id) => {
//     setSelectedId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <section
//       id="experience"
//       className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#070B1F]"
//     >
//       {/* Background Glows */}
//       <div className="pointer-events-none absolute top-10 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
//       <div className="pointer-events-none absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

//       <Container>
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
//             <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
//               Career & Credentials
//             </span>
//           </div>

//           <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
//             Work Experience &{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
//               Education
//             </span>
//           </h2>

//           <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
//             Select any milestone to inspect technical responsibilities, architecture impact, and specialized toolsets.
//           </p>

//           {/* Quick Filters */}
//           <div className="mt-7 inline-flex p-1 rounded-2xl border border-slate-800 bg-[#0B132B]/80 backdrop-blur-xl">
//             {["all", "experience", "education"].map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => {
//                   setActiveFilter(filter);
//                   const firstMatch = careerData.find(
//                     (i) => filter === "all" || i.type === filter
//                   );
//                   if (firstMatch) setSelectedId(firstMatch.id);
//                 }}
//                 className={`capitalize px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
//                   activeFilter === filter
//                     ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.35)]"
//                     : "text-slate-400 hover:text-white"
//                 }`}
//               >
//                 {filter === "all" ? "All Milestones" : filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Master-Detail Split Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
//           {/* Left Column: Interactive Milestone List */}
//           <div className="lg:col-span-5 space-y-3">
//             {filteredList.map((item) => {
//               const isSelected = selectedId === item.id;
//               const isWork = item.type === "experience";

//               return (
//                 <div key={item.id} className="flex flex-col">
//                   {/* Selector Card */}
//                   <div
//                     onClick={() => handleCardClick(item.id)}
//                     className={`
//                       group
//                       relative
//                       flex
//                       items-center
//                       justify-between
//                       p-4
//                       sm:p-5
//                       rounded-2xl
//                       border
//                       cursor-pointer
//                       select-none
//                       transform-gpu
//                       transition-colors
//                       duration-200
//                       ${
//                         isSelected
//                           ? "border-cyan-400 bg-[#0B132B] shadow-[0_4px_20px_rgba(6,182,212,0.2)]"
//                           : "border-slate-800/80 bg-[#0B132B]/40 hover:border-slate-700 hover:bg-[#0B132B]/75"
//                       }
//                     `}
//                   >
//                     <div className="flex items-center gap-3.5 min-w-0">
//                       <div
//                         className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base transition-colors ${
//                           isSelected
//                             ? "bg-cyan-400 text-slate-950 font-bold"
//                             : "bg-slate-900 border border-slate-700/60 text-slate-300"
//                         }`}
//                       >
//                         {item.icon || (isWork ? <Briefcase size={16} /> : <GraduationCap size={16} />)}
//                       </div>

//                       <div className="min-w-0">
//                         <div className="flex items-center gap-2">
//                           <span className="text-[11px] font-semibold text-cyan-400">
//                             {item.year}
//                           </span>
//                           <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
//                             {item.type}
//                           </span>
//                         </div>

//                         <h4
//                           className={`truncate text-sm sm:text-base font-bold transition-colors ${
//                             isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
//                           }`}
//                         >
//                           {item.title}
//                         </h4>
//                         <p className="truncate text-xs text-slate-400">
//                           {item.subtitle}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Desktop Icon vs Mobile Icon */}
//                     <div className="shrink-0 text-slate-500 pl-2">
//                       <div className="hidden lg:block">
//                         <ChevronRight
//                           size={16}
//                           className={`transition-transform duration-200 ${
//                             isSelected ? "text-cyan-400 translate-x-0.5" : "group-hover:text-slate-400"
//                           }`}
//                         />
//                       </div>
//                       <div className="lg:hidden">
//                         <ChevronDown
//                           size={18}
//                           className={`transition-transform duration-200 ${
//                             isSelected ? "rotate-180 text-cyan-400" : ""
//                           }`}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* MOBILE ONLY: Smooth Hardware-Accelerated Accordion */}
//                   <div
//                     className={`
//                       lg:hidden
//                       grid
//                       transition-all
//                       duration-300
//                       ease-in-out
//                       ${
//                         isSelected
//                           ? "grid-rows-[1fr] opacity-100 mt-2"
//                           : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
//                       }
//                     `}
//                   >
//                     <div className="overflow-hidden">
//                       <div className="rounded-2xl border border-cyan-500/30 bg-[#081124] p-4 sm:p-5 shadow-lg space-y-4">
//                         {/* Summary */}
//                         <p className="text-xs leading-relaxed text-slate-300">
//                           {item.description}
//                         </p>

//                         {/* Key Highlights */}
//                         {item.highlights && (
//                           <div className="space-y-2">
//                             <h5 className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
//                               <Sparkles size={12} />
//                               Key Contributions
//                             </h5>
//                             <ul className="space-y-2">
//                               {item.highlights.map((point, pIdx) => (
//                                 <li
//                                   key={pIdx}
//                                   className="flex items-start gap-2 text-xs text-slate-300"
//                                 >
//                                   <CheckCircle2
//                                     size={14}
//                                     className="text-cyan-400 shrink-0 mt-0.5"
//                                   />
//                                   <span>{point}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         )}

//                         {/* Tech Stack Chips */}
//                         {item.skills && (
//                           <div className="pt-3 border-t border-slate-800/80">
//                             <div className="flex flex-wrap gap-1.5">
//                               {item.skills.map((skill, sIdx) => (
//                                 <span
//                                   key={sIdx}
//                                   className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20 text-[10px] font-medium text-cyan-300"
//                                 >
//                                   {skill}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         )}

//                         {/* Direct Close Button */}
//                         <button
//                           type="button"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setSelectedId(null);
//                           }}
//                           className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
//                         >
//                           <X size={14} />
//                           <span>Close Details</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Right Column: Desktop Detail Inspector (Hidden on Mobile) */}
//           <div className="hidden lg:block lg:col-span-7 sticky top-28">
//             <AnimatePresence mode="wait">
//               {activeItem ? (
//                 <motion.div
//                   key={activeItem.id}
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -8 }}
//                   transition={{ duration: 0.2, ease: "easeOut" }}
//                   className="
//                     relative
//                     overflow-hidden
//                     rounded-3xl
//                     border
//                     border-cyan-500/30
//                     bg-[#0B132B]/90
//                     p-7
//                     xl:p-8
//                     backdrop-blur-2xl
//                     shadow-[0_15px_40px_rgba(0,0,0,0.6)]
//                   "
//                 >
//                   {/* Decorative Glow */}
//                   <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />

//                   {/* Inspector Header */}
//                   <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800">
//                     <div className="space-y-1.5">
//                       <div className="flex items-center gap-2">
//                         <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-semibold text-cyan-300">
//                           {activeItem.year}
//                         </span>
//                         {activeItem.location && (
//                           <span className="flex items-center gap-1 text-xs text-slate-400">
//                             <MapPin size={12} className="text-slate-500" />
//                             {activeItem.location}
//                           </span>
//                         )}
//                       </div>

//                       <h3 className="text-xl sm:text-2xl font-black text-white">
//                         {activeItem.title}
//                       </h3>
//                       <p className="text-sm font-semibold text-cyan-400">
//                         {activeItem.subtitle}
//                       </p>
//                     </div>

//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-2xl">
//                       {activeItem.icon || <Terminal size={22} />}
//                     </div>
//                   </div>

//                   {/* Summary */}
//                   <p className="mt-5 text-sm leading-relaxed text-slate-300">
//                     {activeItem.description}
//                   </p>

//                   {/* Key Contributions & Highlights */}
//                   {activeItem.highlights && (
//                     <div className="mt-6 space-y-3">
//                       <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
//                         <Sparkles size={14} className="text-cyan-400" />
//                         Key Engineering Impact
//                       </h4>
//                       <ul className="space-y-2.5">
//                         {activeItem.highlights.map((point, index) => (
//                           <li
//                             key={index}
//                             className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
//                           >
//                             <CheckCircle2
//                               size={15}
//                               className="text-cyan-400 shrink-0 mt-0.5"
//                             />
//                             <span>{point}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   {/* Tech Stack Chips */}
//                   {activeItem.skills && (
//                     <div className="mt-8 pt-5 border-t border-slate-800/80">
//                       <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
//                         Technologies & Tools
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {activeItem.skills.map((skill, sIdx) => (
//                           <span
//                             key={sIdx}
//                             className="px-3 py-1 rounded-lg bg-[#070B1F] border border-cyan-500/20 text-xs font-medium text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               ) : (
//                 <div className="rounded-3xl border border-slate-800/80 bg-[#0B132B]/40 p-12 text-center text-slate-500">
//                   Select a milestone from the list to view full engineering details.
//                 </div>
//               )}
//             </AnimatePresence>
//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Career;


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import Container from "../common/Container";
import { careerData } from "@/data/careerData";

const Career = () => {
  const [selectedId, setSelectedId] = useState(careerData[0]?.id || 5);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredList = careerData.filter((item) =>
    activeFilter === "all" ? true : item.type === activeFilter
  );

  const activeItem = careerData.find((item) => item.id === selectedId);

  const handleCardClick = (id) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-black"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute top-10 -left-20 h-72 w-72 rounded-full bg-rose-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-rose-300">
              Career & Credentials
            </span>
          </div>

          <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Work Experience &{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
            Select any milestone to inspect technical responsibilities, architecture impact, and specialized toolsets.
          </p>

          {/* Quick Filters */}
          <div className="mt-7 inline-flex p-1 rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
            {["all", "experience", "education"].map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  const firstMatch = careerData.find(
                    (i) => filter === "all" || i.type === filter
                  );
                  if (firstMatch) setSelectedId(firstMatch.id);
                }}
                className={`capitalize px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  activeFilter === filter
                    ? "bg-rose-400 text-slate-950 shadow-[0_0_15px_rgba(251,113,133,0.35)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {filter === "all" ? "All Milestones" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Master-Detail Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Interactive Milestone List */}
          <div className="lg:col-span-5 space-y-3">
            {filteredList.map((item) => {
              const isSelected = selectedId === item.id;
              const isWork = item.type === "experience";

              return (
                <div key={item.id} className="flex flex-col">
                  {/* Selector Card */}
                  <div
                    onClick={() => handleCardClick(item.id)}
                    className={`
                      group
                      relative
                      flex
                      items-center
                      justify-between
                      p-4
                      sm:p-5
                      rounded-2xl
                      border
                      cursor-pointer
                      select-none
                      transition-colors
                      duration-200
                      ${
                        isSelected
                          ? "border-rose-400 bg-zinc-900/90 shadow-[0_4px_20px_rgba(244,63,94,0.2)]"
                          : "border-zinc-800/80 bg-zinc-950/70 hover:border-zinc-700 hover:bg-zinc-900/50"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base transition-colors ${
                          isSelected
                            ? "bg-rose-400 text-slate-950 font-bold"
                            : "bg-zinc-900 border border-zinc-700/60 text-slate-300"
                        }`}
                      >
                        {item.icon || (isWork ? <Briefcase size={16} /> : <GraduationCap size={16} />)}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-semibold text-rose-400">
                            {item.year}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                            {item.type}
                          </span>
                        </div>

                        <h4
                          className={`truncate text-sm sm:text-base font-bold transition-colors ${
                            isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          {item.title}
                        </h4>
                        <p className="truncate text-xs text-slate-400">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Desktop vs Mobile Indicator */}
                    <div className="shrink-0 text-slate-500 pl-2">
                      <div className="hidden lg:block">
                        <ChevronRight
                          size={16}
                          className={`transition-transform duration-200 ${
                            isSelected ? "text-rose-400 translate-x-0.5" : "group-hover:text-slate-400"
                          }`}
                        />
                      </div>
                      <div className="lg:hidden">
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            isSelected ? "rotate-180 text-rose-400" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* MOBILE ONLY: Accordion Details */}
                  <div
                    className={`
                      lg:hidden
                      grid
                      transition-all
                      duration-300
                      ease-in-out
                      ${
                        isSelected
                          ? "grid-rows-[1fr] opacity-100 mt-2"
                          : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="rounded-2xl border border-rose-500/30 bg-zinc-950 p-4 sm:p-5 shadow-lg space-y-4">
                        <p className="text-xs leading-relaxed text-slate-300">
                          {item.description}
                        </p>

                        {item.highlights && (
                          <div className="space-y-2">
                            <h5 className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-rose-400">
                              <Sparkles size={12} />
                              Key Contributions
                            </h5>
                            <ul className="space-y-2">
                              {item.highlights.map((point, pIdx) => (
                                <li
                                  key={pIdx}
                                  className="flex items-start gap-2 text-xs text-slate-300"
                                >
                                  <CheckCircle2
                                    size={14}
                                    className="text-rose-400 shrink-0 mt-0.5"
                                  />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {item.skills && (
                          <div className="pt-3 border-t border-zinc-800">
                            <div className="flex flex-wrap gap-1.5">
                              {item.skills.map((skill, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="px-2 py-0.5 rounded bg-rose-500/10 border border-rose-400/20 text-[10px] font-medium text-rose-300"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedId(null);
                          }}
                          className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <X size={14} />
                          <span>Close Details</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Detail Inspector */}
          <div className="hidden lg:block lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              {activeItem ? (
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-rose-500/30
                    bg-zinc-950/90
                    p-7
                    xl:p-8
                    backdrop-blur-2xl
                    shadow-[0_15px_40px_rgba(0,0,0,0.6)]
                  "
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-rose-500/15 blur-3xl" />

                  <div className="flex items-start justify-between gap-4 pb-6 border-b border-zinc-800">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-400/30 text-[11px] font-semibold text-rose-300">
                          {activeItem.year}
                        </span>
                        {activeItem.location && (
                          <span className="flex items-center gap-1 text-xs text-slate-400">
                            <MapPin size={12} className="text-slate-500" />
                            {activeItem.location}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {activeItem.title}
                      </h3>
                      <p className="text-sm font-semibold text-rose-400">
                        {activeItem.subtitle}
                      </p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-500/10 border border-rose-400/30 text-rose-300 text-2xl">
                      {activeItem.icon || <Terminal size={22} />}
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-slate-300">
                    {activeItem.description}
                  </p>

                  {activeItem.highlights && (
                    <div className="mt-6 space-y-3">
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        <Sparkles size={14} className="text-rose-400" />
                        Key Engineering Impact
                      </h4>
                      <ul className="space-y-2.5">
                        {activeItem.highlights.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                          >
                            <CheckCircle2
                              size={15}
                              className="text-rose-400 shrink-0 mt-0.5"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeItem.skills && (
                    <div className="mt-8 pt-5 border-t border-zinc-800">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeItem.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1 rounded-lg bg-zinc-900 border border-rose-500/20 text-xs font-medium text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.1)]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/40 p-12 text-center text-slate-500">
                  Select a milestone from the list to view full engineering details.
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Career;

// import { motion } from "framer-motion";
// import profile from "@/assets/images/vikasProfile.png";
// import AvailabilityCard from "./AvailabilityCard";
// import FloatingTech from "./FloatingTech";

// const HeroImage = () => {
//   return (
//     <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[420px] md:max-w-[480px] aspect-square flex items-center justify-center mx-auto my-6 select-none">
      
//       {/* 1. Ambient Background Glow (Z-0) */}
//       <div className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full bg-cyan-500/15 blur-[80px] pointer-events-none z-0" />

//       {/* 2. Outer Decorative Dashed Ring (Z-0) */}
//       <div className="absolute inset-0 m-auto w-full h-full rounded-full border border-cyan-400/20 border-dashed animate-[spin_50s_linear_infinite] pointer-events-none z-0" />
      
//       {/* 3. Rotating Tech Icons (Z-20) */}
//       <FloatingTech />

//       {/* 4. Profile Main Frame (Z-10) */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 w-[70%] h-[70%]"
//       >
//         {/* Floating Y-Axis Animation */}
//         <motion.div
//           animate={{ y: [0, -8, 0] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//           className="relative w-full h-full"
//         >
//           {/* Border Ring Glow */}
//           <div className="w-full h-full rounded-full p-1 bg-gradient-to-b from-cyan-400/50 via-cyan-500/15 to-transparent shadow-[0_0_40px_rgba(6,182,212,0.25)]">
            
//             {/* Image Mask (Only this has overflow-hidden) */}
//             <div className="relative w-full h-full rounded-full overflow-hidden bg-[#070B1F]">
//               <div className="absolute inset-0 z-10 rounded-full bg-gradient-to-tr from-cyan-500/10 via-transparent to-white/10 pointer-events-none" />
//               <img
//                 src={profile}
//                 alt="Profile"
//                 className="w-full h-full object-cover object-center rounded-full"
//               />
//             </div>

//           </div>

//           {/* 5. Availability Card (Attached directly to float with profile) */}
//           <AvailabilityCard />
//         </motion.div>
//       </motion.div>

//     </div>
//   );
// };

// export default HeroImage;



// import { motion } from "framer-motion";
// import profile from "@/assets/images/vikasProfile.png";
// import AvailabilityCard from "./AvailabilityCard";
// import FloatingTech from "./FloatingTech";

// const HeroImage = () => {
//   return (
//     <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[420px] md:max-w-[480px] aspect-square flex items-center justify-center mx-auto my-6 select-none">
      
//       {/* 1. Ambient Background Glow (Z-0) */}
//       <div className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full bg-cyan-500/15 blur-[80px] pointer-events-none z-0" />

//       {/* 2. Outer Decorative Dashed Ring (Z-0) */}
//       <div className="absolute inset-0 m-auto w-full h-full rounded-full border border-cyan-400/20 border-dashed animate-[spin_50s_linear_infinite] pointer-events-none z-0" />
      
//       {/* 3. Rotating Tech Icons (Z-20) */}
//       <FloatingTech />

//       {/* 4. Profile Main Frame (Z-10) */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 w-[70%] h-[70%]"
//       >
//         {/* Floating Y-Axis Animation */}
//         <motion.div
//           animate={{ y: [0, -8, 0] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//           className="relative w-full h-full"
//         >
//           {/* Border Ring Glow */}
//           <div className="w-full h-full rounded-full p-1 bg-gradient-to-b from-cyan-400/50 via-cyan-500/15 to-transparent shadow-[0_0_40px_rgba(6,182,212,0.25)]">
            
//             {/* Image Mask (Only this has overflow-hidden) */}
//             <div className="relative w-full h-full rounded-full overflow-hidden bg-[#070B1F]">
//               <div className="absolute inset-0 z-10 rounded-full bg-gradient-to-tr from-cyan-500/10 via-transparent to-white/10 pointer-events-none" />
//               <img
//                 src={profile}
//                 alt="Profile"
//                 className="w-full h-full object-cover object-center rounded-full"
//               />
//             </div>

//           </div>

//           {/* 5. Availability Card (Attached directly to float with profile) */}
//           <AvailabilityCard />
//         </motion.div>
//       </motion.div>

//     </div>
//   );
// };

// export default HeroImage;


import { motion } from "framer-motion";
import profile from "@/assets/images/saumyagupta_image.jpg";
import AvailabilityCard from "./AvailabilityCard";
import FloatingTech from "./FloatingTech";

const HeroImage = () => {
  return (
    <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[420px] md:max-w-[480px] aspect-square flex items-center justify-center mx-auto my-6 select-none">
      
      {/* 1. Ambient Background Glow (Z-0) */}
      <div className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full bg-rose-500/15 blur-[80px] pointer-events-none z-0" />

      {/* 2. Outer Decorative Dashed Ring (Z-0) */}
      <div className="absolute inset-0 m-auto w-full h-full rounded-full border border-rose-400/20 border-dashed animate-[spin_50s_linear_infinite] pointer-events-none z-0" />
      
      {/* 3. Rotating Tech Icons (Z-20) */}
      <FloatingTech />

      {/* 4. Profile Main Frame (Z-10) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-[70%] h-[70%]"
      >
        {/* Floating Y-Axis Animation */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          {/* Border Ring Glow */}
          <div className="w-full h-full rounded-full p-1 bg-gradient-to-b from-rose-400/50 via-rose-500/15 to-transparent shadow-[0_0_40px_rgba(244,63,94,0.25)]">
            
            {/* Image Mask */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-950">
              <div className="absolute inset-0 z-10 rounded-full bg-gradient-to-tr from-rose-500/10 via-transparent to-white/10 pointer-events-none" />
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>

          </div>

          {/* 5. Availability Card */}
          <AvailabilityCard />
        </motion.div>
      </motion.div>

    </div>
  );
};

export default HeroImage;
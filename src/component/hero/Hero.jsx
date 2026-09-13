
// import { motion } from "framer-motion";
// import BackgroundGlow from "./BackgroundGlow";
// import HeroParticles from "./HeroParticles";
// import HeroContent from "./HeroContent";
// import HeroImage from "./HeroImage";
// import ScrollIndicator from "./ScrollIndicator";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="
//         relative
//         min-h-screen
//         w-full
//         flex
//         flex-col
//         justify-between
//         items-center
//         overflow-hidden
//         bg-[#070B1F]
//         pt-28
//         pb-16
//         sm:pt-32
//         sm:pb-20
//         lg:pt-36
//         lg:pb-20
//       "
//     >
//       {/* Background Layers */}
//       <BackgroundGlow />
//       <HeroParticles />

//       {/* Ambient Radial Glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           z-0
//           bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))]
//         "
//       />

//       {/* Main Content Container */}
//       <div
//         className="
//           relative
//           z-10
//           w-full
//           max-w-7xl
//           mx-auto
//           px-4
//           xs:px-6
//           sm:px-8
//           lg:px-12
//           my-auto
//         "
//       >
//         <div
//           className="
//             grid
//             grid-cols-1
//             items-center
//             gap-2
//             sm:gap-14
//             lg:grid-cols-12
//             lg:gap-8
//             xl:gap-12
//           "
//         >
//           {/* Left Column (Hero Content) */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.8,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//             className="
//               order-2
//               lg:order-1
//               lg:col-span-7
//               text-center
//               lg:text-left
//               flex
//               flex-col
//               items-center
//               lg:items-start
//             "
//           >
//             <HeroContent />
//           </motion.div>

//           {/* Right Column (Hero Image) */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{
//               duration: 0.9,
//               delay: 0.1,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//             className="
//               order-1
//               lg:order-2
//               lg:col-span-5
//               flex
//               justify-center
//               items-center
//               w-full
//             "
//           >
//             <HeroImage />
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom Scroll Indicator */}
//       <div className="relative z-10 w-full flex justify-center mt-auto pt-30">
//         <ScrollIndicator />
//       </div>
//     </section>
//   );
// };

// export default Hero;




// import { motion } from "framer-motion";
// import BackgroundGlow from "./BackgroundGlow";
// import HeroParticles from "./HeroParticles";
// import HeroContent from "./HeroContent";
// import HeroImage from "./HeroImage";
// import ScrollIndicator from "./ScrollIndicator";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="
//         relative
//         min-h-screen
//         w-full
//         flex
//         flex-col
//         justify-between
//         items-center
//         overflow-hidden
//         bg-[#070B1F]
//         pt-28
//         pb-16
//         sm:pt-32
//         sm:pb-20
//         lg:pt-36
//         lg:pb-20
//       "
//     >
//       {/* Background Layers */}
//       <BackgroundGlow />
//       <HeroParticles />

//       {/* Ambient Radial Glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           z-0
//           bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))]
//         "
//       />

//       {/* Main Content Container */}
//       <div
//         className="
//           relative
//           z-10
//           w-full
//           max-w-7xl
//           mx-auto
//           px-4
//           xs:px-6
//           sm:px-8
//           lg:px-12
//           my-auto
//         "
//       >
//         <div
//           className="
//             grid
//             grid-cols-1
//             items-center
//             gap-2
//             sm:gap-14
//             lg:grid-cols-12
//             lg:gap-8
//             xl:gap-12
//           "
//         >
//           {/* Left Column (Hero Content) */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.8,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//             className="
//               order-2
//               lg:order-1
//               lg:col-span-7
//               text-center
//               lg:text-left
//               flex
//               flex-col
//               items-center
//               lg:items-start
//             "
//           >
//             <HeroContent />
//           </motion.div>

//           {/* Right Column (Hero Image) */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{
//               duration: 0.9,
//               delay: 0.1,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//             className="
//               order-1
//               lg:order-2
//               lg:col-span-5
//               flex
//               justify-center
//               items-center
//               w-full
//             "
//           >
//             <HeroImage />
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom Scroll Indicator */}
//       <div className="relative z-10 w-full flex justify-center mt-auto pt-30">
//         <ScrollIndicator />
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";
import BackgroundGlow from "./BackgroundGlow";
import HeroParticles from "./HeroParticles";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full
        flex
        flex-col
        justify-between
        items-center
        overflow-hidden
        bg-black
        pt-28
        pb-16
        sm:pt-32
        sm:pb-20
        lg:pt-36
        lg:pb-20
      "
    >
      {/* Background Layers */}
      <BackgroundGlow />
      <HeroParticles />

      {/* Ambient Radial Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(244,63,94,0.15),rgba(0,0,0,0))]
        "
      />

      {/* Main Content Container */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-4
          xs:px-6
          sm:px-8
          lg:px-12
          my-auto
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-2
            sm:gap-14
            lg:grid-cols-12
            lg:gap-8
            xl:gap-12
          "
        >
          {/* Left Column (Hero Content) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              order-2
              lg:order-1
              lg:col-span-7
              text-center
              lg:text-left
              flex
              flex-col
              items-center
              lg:items-start
            "
          >
            <HeroContent />
          </motion.div>

          {/* Right Column (Hero Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              order-1
              lg:order-2
              lg:col-span-5
              flex
              justify-center
              items-center
              w-full
            "
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 w-full flex justify-center mt-auto pt-20">
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
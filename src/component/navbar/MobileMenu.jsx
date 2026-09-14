

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X, Download } from "lucide-react";
// import { navigation } from "../../data/navigation";
// import Logo from "./Logo";

// const MobileMenu = ({ activeSection }) => {
//   const [open, setOpen] = useState(false);

//   const closeMenu = () => setOpen(false);

//   return (
//     <div className="lg:hidden">
//       {/* Navbar Toggle Trigger */}
//       <motion.button
//         whileTap={{ scale: 0.92 }}
//         onClick={() => setOpen(true)}
//         aria-label="Open Navigation"
//         className="
//           relative
//           flex
//           h-9
//           w-9
//           sm:h-10
//           sm:w-10
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-cyan-400/30
//           bg-cyan-500/10
//           text-cyan-300
//           backdrop-blur-md
//         "
//       >
//         <Menu size={18} />
//       </motion.button>

//       {/* Drawer Overlay & Popup */}
//       <AnimatePresence>
//         {open && (
//           <>
//             {/* Backdrop: Clicking outside closes the drawer */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={closeMenu}
//               className="fixed inset-0 z-[1100] bg-black/75 backdrop-blur-md"
//             />

//             {/* Modal Container */}
//             <motion.div
//               initial={{ opacity: 0, y: -20, scale: 0.96 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -20, scale: 0.96 }}
//               transition={{ duration: 0.25, ease: "easeOut" }}
//               className="
//                 fixed
//                 top-5
//                 left-4
//                 right-4
//                 z-[1110]
//                 max-w-md
//                 mx-auto
//                 rounded-3xl
//                 border
//                 border-cyan-500/30
//                 bg-[#08111f]/95
//                 p-5
//                 shadow-[0_20px_50px_rgba(0,0,0,0.8)]
//                 backdrop-blur-3xl
//               "
//             >
//               {/* Modal Top Bar with Brand Logo and Close Button */}
//               <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-white/10">
//                 <div onClick={closeMenu}>
//                   <Logo />
//                 </div>

//                 <button
//                   onClick={closeMenu}
//                   aria-label="Close Navigation"
//                   className="
//                     flex
//                     h-8
//                     w-8
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-white/10
//                     bg-white/5
//                     text-slate-300
//                     hover:border-cyan-400/40
//                     hover:bg-cyan-500/10
//                     hover:text-cyan-300
//                     transition-colors
//                   "
//                 >
//                   <X size={16} />
//                 </button>
//               </div>

//               {/* Navigation Links */}
//               <ul className="space-y-1.5">
//                 {navigation.map((item, index) => {
//                   const isActive = activeSection === item.id;
//                   return (
//                     <motion.li
//                       key={item.id}
//                       initial={{ opacity: 0, x: -15 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.04 }}
//                     >
//                       <a
//                         href={`#${item.id}`}
//                         onClick={closeMenu}
//                         className={`
//                           group
//                           flex
//                           items-center
//                           justify-between
//                           rounded-xl
//                           px-4
//                           py-2.5
//                           text-sm
//                           font-medium
//                           transition-all
//                           duration-200
//                           ${
//                             isActive
//                               ? "border border-cyan-400/30 bg-cyan-500/15 text-cyan-300"
//                               : "border border-transparent bg-white/[0.03] text-slate-300 hover:border-cyan-400/20 hover:bg-cyan-500/10 hover:text-cyan-300"
//                           }
//                         `}
//                       >
//                         <div className="flex items-center gap-3">
//                           <item.icon
//                             size={16}
//                             className={`transition-transform duration-300 group-hover:rotate-180 ${
//                               isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-cyan-400"
//                             }`}
//                           />
//                           <span>{item.title}</span>
//                         </div>

//                         <span
//                           className={`h-1.5 w-1.5 rounded-full bg-cyan-400 transition-opacity ${
//                             isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
//                           }`}
//                         />
//                       </a>
//                     </motion.li>
//                   );
//                 })}
//               </ul>

//               {/* Resume CTA */}
//               <a
//                 href="/resume/FSD_v2.1_Vikas_Gupta.pdf"
//                 download
//                 onClick={closeMenu}
//                 className="
//                   mt-4
//                   flex
//                   w-full
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-xl
//                   bg-cyan-400
//                   py-2.5
//                   text-xs
//                   font-semibold
//                   text-slate-950
//                   shadow-[0_0_20px_rgba(34,211,238,0.25)]
//                   hover:bg-cyan-300
//                   transition-all
//                 "
//               >
//                 <Download size={14} />
//                 <span>Download Resume</span>
//               </a>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MobileMenu;



// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X, Download } from "lucide-react";
// import { navigation } from "../../data/navigation";
// import Logo from "./Logo";

// const MobileMenu = ({ activeSection }) => {
//   const [open, setOpen] = useState(false);

//   const closeMenu = () => setOpen(false);

//   return (
//     <div className="lg:hidden">
//       {/* Navbar Toggle Trigger */}
//       <motion.button
//         whileTap={{ scale: 0.92 }}
//         onClick={() => setOpen(true)}
//         aria-label="Open Navigation"
//         className="
//           relative
//           flex
//           h-9
//           w-9
//           sm:h-10
//           sm:w-10
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-cyan-400/30
//           bg-cyan-500/10
//           text-cyan-300
//           backdrop-blur-md
//         "
//       >
//         <Menu size={18} />
//       </motion.button>

//       {/* Drawer Overlay & Popup */}
//       <AnimatePresence>
//         {open && (
//           <>
//             {/* Backdrop: Clicking outside closes the drawer */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={closeMenu}
//               className="fixed inset-0 z-[1100] bg-black/75 backdrop-blur-md"
//             />

//             {/* Modal Container */}
//             <motion.div
//               initial={{ opacity: 0, y: -20, scale: 0.96 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -20, scale: 0.96 }}
//               transition={{ duration: 0.25, ease: "easeOut" }}
//               className="
//                 fixed
//                 top-5
//                 left-4
//                 right-4
//                 z-[1110]
//                 max-w-md
//                 mx-auto
//                 rounded-3xl
//                 border
//                 border-cyan-500/30
//                 bg-[#08111f]/95
//                 p-5
//                 shadow-[0_20px_50px_rgba(0,0,0,0.8)]
//                 backdrop-blur-3xl
//               "
//             >
//               {/* Modal Top Bar with Brand Logo and Close Button */}
//               <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-white/10">
//                 <div onClick={closeMenu}>
//                   <Logo />
//                 </div>

//                 <button
//                   onClick={closeMenu}
//                   aria-label="Close Navigation"
//                   className="
//                     flex
//                     h-8
//                     w-8
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-white/10
//                     bg-white/5
//                     text-slate-300
//                     hover:border-cyan-400/40
//                     hover:bg-cyan-500/10
//                     hover:text-cyan-300
//                     transition-colors
//                   "
//                 >
//                   <X size={16} />
//                 </button>
//               </div>

//               {/* Navigation Links */}
//               <ul className="space-y-1.5">
//                 {navigation.map((item, index) => {
//                   const isActive = activeSection === item.id;
//                   return (
//                     <motion.li
//                       key={item.id}
//                       initial={{ opacity: 0, x: -15 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.04 }}
//                     >
//                       <a
//                         href={`#${item.id}`}
//                         onClick={closeMenu}
//                         className={`
//                           group
//                           flex
//                           items-center
//                           justify-between
//                           rounded-xl
//                           px-4
//                           py-2.5
//                           text-sm
//                           font-medium
//                           transition-all
//                           duration-200
//                           ${
//                             isActive
//                               ? "border border-cyan-400/30 bg-cyan-500/15 text-cyan-300"
//                               : "border border-transparent bg-white/[0.03] text-slate-300 hover:border-cyan-400/20 hover:bg-cyan-500/10 hover:text-cyan-300"
//                           }
//                         `}
//                       >
//                         <div className="flex items-center gap-3">
//                           <item.icon
//                             size={16}
//                             className={`transition-transform duration-300 group-hover:rotate-180 ${
//                               isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-cyan-400"
//                             }`}
//                           />
//                           <span>{item.title}</span>
//                         </div>

//                         <span
//                           className={`h-1.5 w-1.5 rounded-full bg-cyan-400 transition-opacity ${
//                             isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
//                           }`}
//                         />
//                       </a>
//                     </motion.li>
//                   );
//                 })}
//               </ul>

//               {/* Resume CTA */}
//               <a
//                 href="/resume/FSD_v2.1_Vikas_Gupta.pdf"
//                 download
//                 onClick={closeMenu}
//                 className="
//                   mt-4
//                   flex
//                   w-full
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-xl
//                   bg-cyan-400
//                   py-2.5
//                   text-xs
//                   font-semibold
//                   text-slate-950
//                   shadow-[0_0_20px_rgba(34,211,238,0.25)]
//                   hover:bg-cyan-300
//                   transition-all
//                 "
//               >
//                 <Download size={14} />
//                 <span>Download Resume</span>
//               </a>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MobileMenu;


import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navigation } from "../../data/navigation";
import Logo from "./Logo";

const MobileMenu = ({ activeSection }) => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="lg:hidden">
      {/* Navbar Toggle Trigger */}
      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(true)}
        aria-label="Open Navigation"
        className="
          relative
          flex
          h-9
          w-9
          sm:h-10
          sm:w-10
          items-center
          justify-center
          rounded-full
          border
          border-rose-400/30
          bg-rose-500/10
          text-rose-300
          backdrop-blur-md
        "
      >
        <Menu size={18} />
      </motion.button>

      {/* Drawer Overlay & Popup */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[1100] bg-black/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                fixed
                top-5
                left-4
                right-4
                z-[1110]
                max-w-md
                mx-auto
                rounded-3xl
                border
                border-rose-500/30
                bg-zinc-950/95
                p-5
                shadow-[0_20px_50px_rgba(0,0,0,0.8)]
                backdrop-blur-3xl
              "
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-white/10">
                <div onClick={closeMenu}>
                  <Logo />
                </div>

                <button
                  onClick={closeMenu}
                  aria-label="Close Navigation"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-slate-300
                    hover:border-rose-400/40
                    hover:bg-rose-500/10
                    hover:text-rose-300
                    transition-colors
                  "
                >
                  <X size={16} />
                </button>
              </div>

              {/* Navigation Links */}
              <ul className="space-y-1.5">
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={closeMenu}
                        className={`
                          group
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-2.5
                          text-sm
                          font-medium
                          transition-all
                          duration-200
                          ${
                            isActive
                              ? "border border-rose-400/30 bg-rose-500/15 text-rose-300"
                              : "border border-transparent bg-white/[0.03] text-slate-300 hover:border-rose-400/20 hover:bg-rose-500/10 hover:text-rose-300"
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon
                            size={16}
                            className={`transition-transform duration-300 group-hover:rotate-180 ${
                              isActive ? "text-rose-400" : "text-slate-400 group-hover:text-rose-400"
                            }`}
                          />
                          <span>{item.title}</span>
                        </div>

                        <span
                          className={`h-1.5 w-1.5 rounded-full bg-rose-400 transition-opacity ${
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Resume CTA */}
              <a
                href={`${import.meta.env.BASE_URL}assets/saumya_gupta-resume_2026.pdf`}
                download
                onClick={closeMenu}
                className="
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-rose-400
                  to-pink-500
                  py-2.5
                  text-xs
                  font-semibold
                  text-slate-950
                  shadow-[0_0_20px_rgba(251,113,133,0.25)]
                  hover:brightness-110
                  transition-all
                "
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
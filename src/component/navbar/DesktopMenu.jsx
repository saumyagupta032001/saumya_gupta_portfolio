

// import { navigation } from "../../data/navigation";

// const DesktopMenu = ({ activeSection }) => {
//   return (
//     <ul className="flex items-center gap-1.5 rounded-full bg-white/[0.02] p-1.5 border border-white/5">
//       {navigation.map((item) => {
//         const isActive = activeSection === item.id;

//         return (
//           <li key={item.id}>
//             <a
//               href={`#${item.id}`}
//               className={`
//                 group
//                 relative
//                 flex
//                 items-center
//                 gap-2
//                 overflow-hidden
//                 rounded-xl
//                 px-4
//                 py-2.5
//                 text-xs
//                 xl:text-sm
//                 font-medium
//                 transition-all
//                 duration-500
//                 ${
//                   isActive
//                     ? "text-cyan-300"
//                     : "text-slate-300 hover:text-cyan-300"
//                 }
//               `}
//             >
//               {/* Glass Background */}
//               <span
//                 className={`
//                   absolute
//                   inset-0
//                   rounded-xl
                  
//                   transition-all
//                   duration-500
//                   ${
//                     isActive
//                       ? "  opacity-100"
//                       : "border-transparent bg-white/[0.02] opacity-0 group-hover:border-cyan-400/20 group-hover:bg-cyan-500/10 group-hover:opacity-100"
//                   }
//                 `}
//               />

//               {/* Light Shine Effect */}
//               <span
//                 className="
//                   absolute
//                   left-[-120%]
//                   top-0
//                   h-full
//                   w-1/2
//                   -skew-x-12
//                   bg-gradient-to-r
//                   from-transparent
//                   via-white/20
//                   to-transparent
//                   transition-all
//                   duration-700
//                   group-hover:left-[130%]
//                 "
//               />

//               {/* Icon (180° Rotate on Hover) */}
//               <item.icon
//                 size={16}
//                 className={`
//                   relative
//                   z-10
//                   transition-transform
//                   duration-500
//                   ease-in-out
//                   group-hover:rotate-180
//                   ${
//                     isActive
//                       ? "text-cyan-400 scale-110"
//                       : "text-slate-400 group-hover:text-cyan-400"
//                   }
//                 `}
//               />

//               {/* Text Flip Effect */}
//               <div className="relative z-10 h-5 overflow-hidden">
//                 <span
//                   className={`
//                     block
//                     transition-transform
//                     duration-500
//                     group-hover:-translate-y-full
//                     ${isActive ? "text-cyan-300 font-semibold" : "text-slate-300"}
//                   `}
//                 >
//                   {item.title}
//                 </span>

//                 <span
//                   className="
//                     absolute
//                     left-0
//                     top-full
//                     block
//                     text-cyan-400
//                     transition-transform
//                     duration-500
//                     group-hover:-translate-y-full
//                   "
//                 >
//                   {item.title}
//                 </span>
//               </div>

//               {/* Bottom Line (Active or Hover) */}
//               <span
//                 className={`
//                   absolute
//                   bottom-0
//                   left-1/2
//                   h-[2px]
//                   -translate-x-1/2
//                   rounded-full
//                   bg-gradient-to-r
//                   from-cyan-400
//                   via-sky-400
//                   to-purple-500
//                   transition-all
//                   duration-500
//                   ${
//                     isActive
//                       ? "w-3/4 opacity-100"
//                       : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
//                   }
//                 `}
//               />
//             </a>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default DesktopMenu;




// import { navigation } from "../../data/navigation";

// const DesktopMenu = ({ activeSection }) => {
//   return (
//     <ul className="flex items-center gap-1.5 rounded-full bg-white/[0.02] p-1.5 border border-white/5">
//       {navigation.map((item) => {
//         const isActive = activeSection === item.id;

//         return (
//           <li key={item.id}>
//             <a
//               href={`#${item.id}`}
//               className={`
//                 group
//                 relative
//                 flex
//                 items-center
//                 gap-2
//                 overflow-hidden
//                 rounded-xl
//                 px-4
//                 py-2.5
//                 text-xs
//                 xl:text-sm
//                 font-medium
//                 transition-all
//                 duration-500
//                 ${
//                   isActive
//                     ? "text-cyan-300"
//                     : "text-slate-300 hover:text-cyan-300"
//                 }
//               `}
//             >
//               {/* Glass Background */}
//               <span
//                 className={`
//                   absolute
//                   inset-0
//                   rounded-xl
                  
//                   transition-all
//                   duration-500
//                   ${
//                     isActive
//                       ? "  opacity-100"
//                       : "border-transparent bg-white/[0.02] opacity-0 group-hover:border-cyan-400/20 group-hover:bg-cyan-500/10 group-hover:opacity-100"
//                   }
//                 `}
//               />

//               {/* Light Shine Effect */}
//               <span
//                 className="
//                   absolute
//                   left-[-120%]
//                   top-0
//                   h-full
//                   w-1/2
//                   -skew-x-12
//                   bg-gradient-to-r
//                   from-transparent
//                   via-white/20
//                   to-transparent
//                   transition-all
//                   duration-700
//                   group-hover:left-[130%]
//                 "
//               />

//               {/* Icon (180° Rotate on Hover) */}
//               <item.icon
//                 size={16}
//                 className={`
//                   relative
//                   z-10
//                   transition-transform
//                   duration-500
//                   ease-in-out
//                   group-hover:rotate-180
//                   ${
//                     isActive
//                       ? "text-cyan-400 scale-110"
//                       : "text-slate-400 group-hover:text-cyan-400"
//                   }
//                 `}
//               />

//               {/* Text Flip Effect */}
//               <div className="relative z-10 h-5 overflow-hidden">
//                 <span
//                   className={`
//                     block
//                     transition-transform
//                     duration-500
//                     group-hover:-translate-y-full
//                     ${isActive ? "text-cyan-300 font-semibold" : "text-slate-300"}
//                   `}
//                 >
//                   {item.title}
//                 </span>

//                 <span
//                   className="
//                     absolute
//                     left-0
//                     top-full
//                     block
//                     text-cyan-400
//                     transition-transform
//                     duration-500
//                     group-hover:-translate-y-full
//                   "
//                 >
//                   {item.title}
//                 </span>
//               </div>

//               {/* Bottom Line (Active or Hover) */}
//               <span
//                 className={`
//                   absolute
//                   bottom-0
//                   left-1/2
//                   h-[2px]
//                   -translate-x-1/2
//                   rounded-full
//                   bg-gradient-to-r
//                   from-cyan-400
//                   via-sky-400
//                   to-purple-500
//                   transition-all
//                   duration-500
//                   ${
//                     isActive
//                       ? "w-3/4 opacity-100"
//                       : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
//                   }
//                 `}
//               />
//             </a>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default DesktopMenu;



// import { navigation } from "../../data/navigation";

// const DesktopMenu = ({ activeSection }) => {
//   return (
//     <ul className="flex items-center gap-1.5 rounded-full bg-white/[0.02] p-1.5 border border-white/5">
//       {navigation.map((item) => {
//         const isActive = activeSection === item.id;

//         return (
//           <li key={item.id}>
//             <a
//               href={`#${item.id}`}
//               className={`
//                 group
//                 relative
//                 flex
//                 items-center
//                 gap-2
//                 overflow-hidden
//                 rounded-xl
//                 px-4
//                 py-2.5
//                 text-xs
//                 xl:text-sm
//                 font-medium
//                 transition-all
//                 duration-500
//                 ${
//                   isActive
//                     ? "text-rose-300"
//                     : "text-slate-300 hover:text-rose-300"
//                 }
//               `}
//             >
//               {/* Glass Background */}
//               <span
//                 className={`
//                   absolute
//                   inset-0
//                   rounded-xl
//                   transition-all
//                   duration-500
//                   ${
//                     isActive
//                       ? "opacity-100 bg-rose-500/10 border border-rose-400/20"
//                       : "border-transparent bg-white/[0.02] opacity-0 group-hover:border-rose-400/20 group-hover:bg-rose-500/10 group-hover:opacity-100"
//                   }
//                 `}
//               />

//               {/* Light Shine Effect */}
//               <span
//                 className="
//                   absolute
//                   left-[-120%]
//                   top-0
//                   h-full
//                   w-1/2
//                   -skew-x-12
//                   bg-gradient-to-r
//                   from-transparent
//                   via-white/20
//                   to-transparent
//                   transition-all
//                   duration-700
//                   group-hover:left-[130%]
//                 "
//               />

//               {/* Icon */}
//               <item.icon
//                 size={16}
//                 className={`
//                   relative
//                   z-10
//                   transition-transform
//                   duration-500
//                   ease-in-out
//                   group-hover:rotate-180
//                   ${
//                     isActive
//                       ? "text-rose-400 scale-110"
//                       : "text-slate-400 group-hover:text-rose-400"
//                   }
//                 `}
//               />

//               {/* Text Flip Effect */}
//               <div className="relative z-10 h-5 overflow-hidden">
//                 <span
//                   className={`
//                     block
//                     transition-transform
//                     duration-500
//                     group-hover:-translate-y-full
//                     ${isActive ? "text-rose-300 font-semibold" : "text-slate-300"}
//                   `}
//                 >
//                   {item.title}
//                 </span>

//                 <span
//                   className="
//                     absolute
//                     left-0
//                     top-full
//                     block
//                     text-rose-400
//                     transition-transform
//                     duration-500
//                     group-hover:-translate-y-full
//                   "
//                 >
//                   {item.title}
//                 </span>
//               </div>

//               {/* Bottom Gradient Line */}
//               <span
//                 className={`
//                   absolute
//                   bottom-0
//                   left-1/2
//                   h-[2px]
//                   -translate-x-1/2
//                   rounded-full
//                   bg-gradient-to-r
//                   from-rose-400
//                   via-pink-400
//                   to-fuchsia-500
//                   transition-all
//                   duration-500
//                   ${
//                     isActive
//                       ? "w-3/4 opacity-100"
//                       : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
//                   }
//                 `}
//               />
//             </a>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default DesktopMenu;


import { navigation } from "../../data/navigation";

const DesktopMenu = ({ activeSection }) => {
  return (
    <ul className="flex items-center gap-1 rounded-full bg-zinc-950/60 p-1.5 border border-zinc-800/80 backdrop-blur-xl">
      {navigation.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <li key={item.id} className="relative">
            <a
              href={`#${item.id}`}
              className={`
                relative
                flex
                items-center
                gap-2
                rounded-xl
                px-3.5
                py-2
                text-xs
                xl:text-sm
                font-medium
                transition-colors
                duration-200
                select-none
                ${
                  isActive
                    ? "text-rose-300"
                    : "text-zinc-400 hover:text-zinc-100"
                }
              `}
            >
              {/* Active / Hover Background Capsule */}
              <span
                className={`
                  absolute
                  inset-0
                  rounded-xl
                  transition-all
                  duration-200
                  pointer-events-none
                  ${
                    isActive
                      ? "bg-rose-500/15 border border-rose-400/30 opacity-100"
                      : "bg-transparent border border-transparent opacity-0 hover:bg-zinc-800/50 hover:opacity-100"
                  }
                `}
              />

              {/* Icon (Constant size, no layout shift) */}
              <item.icon
                size={16}
                className={`
                  relative
                  z-10
                  shrink-0
                  transition-colors
                  duration-200
                  ${
                    isActive
                      ? "text-rose-400"
                      : "text-zinc-500 group-hover:text-zinc-300"
                  }
                `}
              />

              {/* Text (Uniform width & weight) */}
              <span className="relative z-10 whitespace-nowrap">
                {item.title}
              </span>

              {/* Bottom Subtle Active Line */}
              <span
                className={`
                  absolute
                  bottom-0.5
                  left-1/2
                  h-[2px]
                  -translate-x-1/2
                  rounded-full
                  bg-gradient-to-r
                  from-rose-400
                  via-pink-500
                  to-fuchsia-500
                  transition-all
                  duration-300
                  ${isActive ? "w-2/3 opacity-100" : "w-0 opacity-0"}
                `}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopMenu;
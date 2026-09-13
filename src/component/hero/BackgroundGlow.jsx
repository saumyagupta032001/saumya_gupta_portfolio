// const BackgroundGlow = () => {
//   return (
//     <>
//       {/* Left Cyan Glow */}
//       <div
//         className="
//           absolute
//           -left-24
//           top-20
//           h-[380px]
//           w-[380px]
//           rounded-full
//           bg-cyan-500/15
//           blur-[140px]
//         "
//       />

//       {/* Right Purple Glow */}
//       <div
//         className="
//           absolute
//           -right-24
//           bottom-16
//           h-[420px]
//           w-[420px]
//           rounded-full
//           bg-purple-500/15
//           blur-[150px]
//         "
//       />

//       {/* Center Soft Blue Glow */}
//       <div
//         className="
//           absolute
//           left-1/2
//           top-1/3
//           h-[280px]
//           w-[280px]
//           -translate-x-1/2
//           rounded-full
//           bg-sky-400/8
//           blur-[120px]
//         "
//       />

//       {/* Top Light */}
//       <div
//         className="
//           absolute
//           left-1/2
//           top-0
//           h-40
//           w-[600px]
//           -translate-x-1/2
//           bg-gradient-to-b
//           from-cyan-500/8
//           to-transparent
//           blur-3xl
//         "
//       />
//     </>
//   );
// };

// export default BackgroundGlow;



const BackgroundGlow = () => {
  return (
    <>
      {/* Left Rose Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-20
          h-[380px]
          w-[380px]
          rounded-full
          bg-rose-500/15
          blur-[140px]
        "
      />

      {/* Right Fuchsia Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-16
          h-[420px]
          w-[420px]
          rounded-full
          bg-fuchsia-500/15
          blur-[150px]
        "
      />

      {/* Center Soft Pink Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[280px]
          w-[280px]
          -translate-x-1/2
          rounded-full
          bg-pink-500/10
          blur-[120px]
        "
      />

      {/* Top Rose Light */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-40
          w-[600px]
          -translate-x-1/2
          bg-gradient-to-b
          from-rose-500/10
          to-transparent
          blur-3xl
        "
      />
    </>
  );
};

export default BackgroundGlow;
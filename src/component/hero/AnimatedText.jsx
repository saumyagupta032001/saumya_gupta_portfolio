
// import { Typewriter } from "react-simple-typewriter";

// const AnimatedText = () => {
//   return (
//     <span className="inline-block text-cyan-400 font-semibold">
//       <Typewriter
//         words={[
//           "Java Full Stack Developer",
//           "Spring Boot Specialist",
//           "React & Angular Developer",
//           "Backend Engineer",
//         ]}
//         loop={0}
//         cursor
//         cursorStyle="|"
//         typeSpeed={60}
//         deleteSpeed={35}
//         delaySpeed={1800}
//       />
//     </span>
//   );
// };

// export default AnimatedText;




import { Typewriter } from "react-simple-typewriter";

const AnimatedText = () => {
  return (
    <span className="inline-block text-rose-400 font-semibold">
      <Typewriter
        words={[
             "Full Stack Developer",
             "MERN Stack Developer",
             "React & Next.js Developer",
             "Node.js Backend Developer",
]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={60}
        deleteSpeed={35}
        delaySpeed={1800}
      />
    </span>
  );
};

export default AnimatedText;
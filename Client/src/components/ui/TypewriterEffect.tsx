import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
  <h1>
    <Typewriter
      words={["Pasar Waitlist", "Join the Community", "Stay Updated"]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </h1>;
};
export default TypewriterEffect;

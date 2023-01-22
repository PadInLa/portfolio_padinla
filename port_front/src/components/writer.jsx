import ReactTypingEffect from "react-typing-effect";
import "@fontsource/cambo";
import "@fontsource/caladea";

const Writer = () => (
  <ReactTypingEffect
    text={[
      "a Full-Stack Web Developer.",
      "a System Engineer.",
      "an Artist.",
      "a Youtuber.",
    ]}
    staticText="I'm"
    style={{
      color: "white",
      fontSize: "2.5vw",
      fontFamily: `"Caladea", sans-serif`,
    }}
    speed="50"
    eraseSpeed="50"
    typingDelay="100"
  ></ReactTypingEffect>
);

export default Writer;

import ReactTypingEffect from "react-typing-effect";

const Writer = ({ text }) => (
  <ReactTypingEffect
    text={[`${text}`]}
    style={{ color: "white", fontSize: "3vw" }}
    speed="100"
    erasespeed="50"
  ></ReactTypingEffect>
);

export default Writer;

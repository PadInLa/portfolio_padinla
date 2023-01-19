import { Route, Routes } from "react-router-dom";
import About from "../views/about/about";
import Home from "../views/home/home";
import Projects from "../views/projects/projects";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
);

export default Routing;

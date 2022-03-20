import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Post from "./components/DynamicLink";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/post/:category" element={<Post />}></Route>
      </Routes>
    </div>
  );
}

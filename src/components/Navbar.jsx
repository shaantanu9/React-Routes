//import {useState, useEffect,useRef} from 'react'

import { Link } from "react-router-dom";

//import Navbar from './components/Navbar'
const Navbar = (props) => {
  return (
    <>
      <Link to="/about">About</Link>
      <Link to="/home">home</Link>
      <Link to="/post">Post</Link>
      <Link to="/post/headphone">headphone</Link>
      <Link to="/post/Car">Car</Link>
      <Link className="" to="/post/Mobile">
        Mobile
      </Link>
    </>
  );
};

export default Navbar;

//import {useState, useEffect,useRef} from 'react'

import { Link } from "react-router-dom";

//import Navbar from './components/Navbar'
const Navbar = (props) => {
  return (
    <>
      <Link to="/about">About</Link>
      <Link to="/home">home</Link>
    </>
  );
};

export default Navbar;

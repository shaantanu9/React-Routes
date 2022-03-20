//import {useState, useEffect,useRef} from 'react'
//import Post from './components/Post'
import { useParams } from "react-router-dom";
const Post = (props) => {
  const { category } = useParams();
  return (
    <>
      <p className="animate-bounce bg-indigo-700">
        Params on this page is {category}
      </p>
    </>
  );
};

export default Post;

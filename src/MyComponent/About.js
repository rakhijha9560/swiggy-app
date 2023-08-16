import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass.js";
import { useState } from "react";

const About = (props) => {
  const [Count, setCount] = useState(0);
  const [Count2, setCount2] = useState(3);
  return (
    <div>
      <h1>About Us Page</h1>
      <p> This is the namaste react live course chapter-07 finding the path</p>
      <ProfileClass name={"rakhi"} />
      <h3>Count: {Count}</h3>
      <button
        onClick={() => {
          setCount(1);
          setCount2(2);
        }}>
        count
      </button>
    </div>
  );
};

export default About;

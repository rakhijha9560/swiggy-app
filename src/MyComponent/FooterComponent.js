
import React from "react"; 
import { useContext } from "react";
import UserContext from "../Utils/UserContext.js";


const FooterComponent = () => {

  const { user }= useContext(UserContext);
  return (
    <footer >This site is developed by: <span className="p-10 m-10 font-bold">{user.name}, {user.email}</span></footer>
  );
};

export default FooterComponent;
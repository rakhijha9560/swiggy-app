import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline.js";
import UserContext from "../Utils/UserContext.js";



const loggedInUser = () => {
  // Api call to check authentication
  return true;
};

const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      alt="logo"
      src="https://th.bing.com/th/id/OIP._b6q0KzTrD7VrwPuS-gojgAAAA?pid=ImgDet&rs=1"
    />
  </a>
);

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const isOnline = useOnline();

const {user} = useContext(UserContext);

  return (
    <div  className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
<h1>{isOnline? "🟢" : "🔴"}</h1>
<span className="p-10 font-bold text-red-600">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;

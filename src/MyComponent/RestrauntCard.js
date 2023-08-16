import { IMG_CDN_URL } from "./config";
import React from "react";
import { useContext } from "react";
import UserContext from "../Utils/UserContext.js";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {

  const {user} = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img alt="cloud-img" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h5>{user.name} {user.email}</h5>
    </div>
  );
};

export default RestrauntCard;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";
import useRestaurant from "../Utils/useRestaurant";



const RestrauntMenu = () => {
  const { id } = useParams();

  // const [restaurant, setRestaurant] = useState([]);

  const restaurant = useRestaurant(id);

  
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {id}</h1>
        <h2>{restaurant?.cards?.card?.card?.info?.name}</h2>
        <img  alt="image" src={IMG_CDN_URL} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
      </div>
      <div>
        <h1>Menu</h1>
        {/* <ul>
            {Object.values(restaurant.menu.items).map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul> */}
      </div>
    </div>
  );
};

export default RestrauntMenu;

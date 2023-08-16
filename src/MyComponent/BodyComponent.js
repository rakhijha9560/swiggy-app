import React, { useState, useEffect, useContext } from "react";
import RestrauntCard from "./RestrauntCard.js";
import { restrauntList } from "./config";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper.js";
import useOnline from "../Utils/useOnline.js";
import UserContext from "../Utils/UserContext.js";

const BodyComponent = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState(""); // [variable name, fuction to update varible]

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    // API Call
    getfilteredRestaurants();
  }, []);

  async function getfilteredRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4445351&lng=76.9948735&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-50 p-2 m-2"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            //e.target.value=? whatever you write in input
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="p-2 m-5 bg-purple-900 hover:bg-grey-500 text-white rounded-md"
          onClick={() => {
            // need to filter data
            const data = filterData(searchInput, allRestaurants);
            // update the state; restaurants
            setfilteredRestaurants(data);
          }}>
          Search
        </button>

        {/* <input value={user.name} onChange={
          e => setUser({
            name: e.target.value,
            email: "newEmail@gmail.com",
          })
        }></input> */}
      </div>

      <div className="flex flex-wrap">
        {/* write a logic for no resturant found */}

        {filteredRestaurants.map((restraurant) => {
          return (
            <Link
              to={"/restaurant/" + restraurant.data.id}
              key={restraurant.data.id}>
              <RestrauntCard {...restraurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;

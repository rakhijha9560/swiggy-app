import React from "react";


export function filterData(searchInput, filteredRestaurants) {
    const filterData = filteredRestaurants.filter((restraurant) =>
      restraurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
  
    return filterData;
  }
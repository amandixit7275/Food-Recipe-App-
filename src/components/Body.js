import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

function Body() {
  async function fetchData() {
    let response = await fetch(
      "dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await response.json();
    console.log(json);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap">
      <RestaurantCard name="KFC" rating="4.2" Location="Chowk" />
      <RestaurantCard name="Modanwal" rating="4.1" Location="RajajiPuram" />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
}

export default Body;

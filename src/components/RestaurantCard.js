import React from "react";

export default function RestaurantCard(props) {
  const { name, rating, Location } = props;
  return (
    <div className=" m-5 w-[250px] rounded-lg shadow-lg border bg-gray-100 items-center ">
      <div>
        <img
          className="p-2 rounded-xl "
          src="/media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gqllu2qnsrawyuk4op5x"
          alt=""
        />
      </div>
      <div className="p-2">
        <h1 className="text-xl">{name}</h1>
        <p>Rating : {rating}</p> <span>{Location}</span>
      </div>
    </div>
  );
}

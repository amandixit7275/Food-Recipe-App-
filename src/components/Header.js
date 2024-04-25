import React from "react";
import { LOGO_URL } from "../utils/constant";

function Header() {
  return (
    <div className="flex justify-between bg-slate-100 shadow-lg  ">
      <div>
        <img className=" h-24 w-24" src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">About</li>
          <li className="px-4">Contact</li>
          <li className="px-4">Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

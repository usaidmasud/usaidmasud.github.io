import React from "react";
import profileImg from "../../../assets/images/profile.png";
import Sosmed from "../../moleculs/Sosmed";
import { Switch, Route, Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <img
        className="border-4 object-cover h-48 w-48 rounded-full"
        src={profileImg}
        alt=""
      />
      <div className="mt-4 text-center">
        <h5 className="text-2xl font-semibold tracking-wider text-gray-800">
          Syarip Mas'ud
        </h5>
        <p className="text-base bg-orange-400 text-gray-700">Web Developer</p>
      </div>
      {/* social-media */}
      <div className="mt-6">
        <Sosmed />
      </div>
      <div className="mt-10">
        <ul className="text-center w-40 flex flex-col gap-2">
          <li className="px-4 py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div class="absolute bottom-0 mb-5">
        <p className="text-base text-gray-800">	&#169; 2020 Syarip Mas'ud.</p>
      </div>
    </div>
  );
};

export default Sidebar;

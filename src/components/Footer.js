import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpoon } from "@fortawesome/free-solid-svg-icons";
import Clock from "./Clock";

const Footer = () => {
  return (
    <div className=" absolute bottom-0 w-full bg-slate-300 h-10 flex items-center justify-between ">
      <div className="w-10 flex justify-center border-double border-[3px] border-gray-700 ml-1 px-6 py-1 shadow-2xl">
        <FontAwesomeIcon icon={faSpoon} className=" text-[20px]" />
      </div>
      <div className="mr-1 border-solid border-[3px] border-gray-700 px-6 py-1">
        <Clock />
      </div>
    </div>
  );
};

export default Footer;

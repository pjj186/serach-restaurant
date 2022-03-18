import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="w-full h-6  bg-neutral-200 flex justify-start items-center px-3 opacity-80">
      <div className="font-bold text-md space-x-3">
        <FontAwesomeIcon icon={faCoffee} />
        <span>오늘 어디서 먹지?</span>
      </div>
    </div>
  );
};

export default Header;

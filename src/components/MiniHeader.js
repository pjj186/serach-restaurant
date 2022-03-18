import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

const MiniHeader = ({ cancelModal, category }) => {
  return (
    <div className="flex w-full h-6 bg-neutral-200 px-5 py-4 items-center justify-between">
      <span className="font-bold">{category}</span>
      <FontAwesomeIcon
        icon={faXmarkCircle}
        size="lg"
        onClick={cancelModal}
        className=" cursor-pointer"
      />
    </div>
  );
};

export default MiniHeader;

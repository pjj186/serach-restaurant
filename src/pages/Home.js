import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

const Home = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    if (modal === false) {
      setModal(true);
    }
  };

  const cancelModal = () => {
    if (modal === true) {
      setModal(false);
    }
  };

  return (
    <>
      {modal ? <Modal cancelModal={cancelModal} /> : null}
      <div className="w-full h-full p-6 space-y-3">
        <div
          className="flex flex-col items-center w-10 cursor-pointer"
          onClick={openModal}
        >
          <div className=" w-16 h-16 bg-slate-500 rounded-lg mb-2" />
          <span className=" text-white">한식</span>
        </div>
        <div className="flex flex-col items-center w-10 cursor-pointer">
          <div className=" w-16 h-16 bg-slate-500 rounded-lg mb-2" />
          <span className="text-white">중식</span>
        </div>
        <div className="flex flex-col items-center w-10 cursor-pointer">
          <div className=" w-16 h-16 bg-slate-500 rounded-lg mb-2" />
          <span className="text-white">일식</span>
        </div>
        <div className="flex flex-col items-center w-10 cursor-pointer">
          <div className=" w-16 h-16 bg-slate-500 rounded-lg mb-2" />
          <span className="text-white">양식</span>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useState } from "react";
import Modal from "../components/Modal";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState("");

  const openModal = (category) => {
    if (modal === false) {
      setModal(true);
      setCategory(category);
    }
  };

  const cancelModal = () => {
    if (modal === true) {
      setModal(false);
    }
  };

  return (
    <>
      {modal ? <Modal cancelModal={cancelModal} category={category} /> : null}
      <div className="w-full h-full p-10 space-y-10">
        <div
          className="flex flex-col items-center w-10 cursor-pointer"
          onClick={() => {
            openModal("한식");
          }}
        >
          <div className=" w-16 h-16 bg-[url('/images/kimbab.png')] rounded-lg mb-2" />
          <span className=" text-white">한식</span>
        </div>
        <div
          className="flex flex-col items-center w-10 cursor-pointer"
          onClick={() => {
            openModal("중식");
          }}
        >
          <div className=" w-16 h-16 bg-[url('/images/zajang.png')] rounded-lg mb-2" />
          <span className="text-white">중식</span>
        </div>
        <div
          className="flex flex-col items-center w-10 cursor-pointer"
          onClick={() => {
            openModal("일식");
          }}
        >
          <div className=" w-16 h-16 bg-[url('/images/sushi.png')] rounded-lg mb-2" />
          <span className="text-white">일식</span>
        </div>
        <div
          className="flex flex-col items-center w-10 cursor-pointer"
          onClick={() => {
            openModal("양식");
          }}
        >
          <div className=" w-16 h-16 bg-[url('/images/burger.png')] rounded-lg mb-2" />
          <span className="text-white">양식</span>
        </div>
      </div>
    </>
  );
};

export default Home;

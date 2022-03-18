import React from "react";

const Modal = ({ cancelModal }) => {
  return (
    <div className="w-full h-screen p-20 bg-teal-700 opacity-50 absolute">
      <div className=" bg-cyan-100 w-full h-full">
        <button onClick={cancelModal}>나는 모달 끄기</button>
      </div>
    </div>
  );
};

export default Modal;

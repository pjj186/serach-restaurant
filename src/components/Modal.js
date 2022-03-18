import React from "react";
import styled from "styled-components";
import MiniHeader from "./MiniHeader";
import Location from "./location";

const ModalContainer = styled.div`
  background-color: rgba(15, 118, 110, 0.4);
`;

const Modal = ({ cancelModal, category }) => {
  return (
    <ModalContainer className="w-full h-screen p-20 absolute">
      <div className=" bg-white w-full h-full">
        <MiniHeader cancelModal={cancelModal} category={category} />
        <div className="">
          <p className=" text-3xl mb-3 text-center">
            주변에 이런 식당들이 있어요!
          </p>
          <div className="flex justify-center items-center border-8 border-solid">
            <Location />
          </div>
        </div>
        <div>식당 뽑기!</div>
      </div>
    </ModalContainer>
  );
};

export default Modal;

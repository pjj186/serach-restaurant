import React from "react";
import styled from "styled-components";
import MiniHeader from "./MiniHeader";
import Location from "./location";

const ModalContainer = styled.div`
  background-color: rgba(15, 118, 110, 0.4);
`;

const Modal = ({ cancelModal, category }) => {
  return (
    <ModalContainer className="w-full h-screen p-20 absolute flex items-center justify-center">
      <div className=" bg-neutral-200 w-1/2 h-full rounded-lg">
        <MiniHeader cancelModal={cancelModal} category={category} />
        <div>
          <p className=" text-3xl mt-3 mb-3 text-center">
            주변에 이런 식당들이 있어요!
          </p>
          <div className="flex justify-center items-center pb-10 border-b-2 border-dashed">
            <Location category={category} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-3xl border-2 border-solid mt-24 px-4 py-2 rounded-lg cursor-pointer shadow-lg hover:bg-slate-300">
            식당 뽑기!
          </span>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;

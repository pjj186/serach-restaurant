import React from "react";
import styled from "styled-components";
import MiniHeader from "./MiniHeader";

const ModalContainer = styled.div`
  background-color: rgba(15, 118, 110, 0.4);
`;

const Modal = ({ cancelModal, category }) => {
  return (
    <ModalContainer className="w-full h-screen p-20 absolute">
      <div className=" bg-white w-full h-full">
        <MiniHeader cancelModal={cancelModal} category={category} />
      </div>
    </ModalContainer>
  );
};

export default Modal;

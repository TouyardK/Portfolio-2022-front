import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
z-index: 1040;
background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  display: flex;
`;

const ModalContain = styled.div`
  z-index: 100;
  background: #fff;
  position: relative;
  margin: auto;
  border-radius: 35px;
  width: 80%;
  padding: 1rem;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalBody = styled.div`
width: 150vh;
height: 50vh;
`;

const ModalCloseButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  color: #000;
  cursor: pointer;
  border: none;
  background: transparent;
`;

const ModalTitleh4 = styled.h4`

`;

const Modal = ({ isOpen, hide, title, ...props }) =>
isOpen
    ? ReactDOM.createPortal(
        <>
            <ModalOverlay>
                    <ModalWrapper>
                            <ModalContain>
                                    <ModalHeader>
                                        <ModalTitleh4>{title}</ModalTitleh4>
                                        <ModalCloseButton type="button" onClick={hide}>X</ModalCloseButton>
                                    </ModalHeader>
                                        <ModalBody>{props.children}</ModalBody>
                            </ModalContain>
                    </ModalWrapper>
            </ModalOverlay>
        </>,
        document.body
    ) : null;

    export default Modal;
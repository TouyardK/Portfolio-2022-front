import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import close from '../../Assets/cancel.png';
import pixel from '../../Assets/pixel.png';

const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: auto;
height: auto;
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
  border: solid 10px black;
  background-image: url(${pixel}),linear-gradient(45deg,#eb4f56, #9d66e9);
  position: relative;
  margin: auto;
  border-radius: 28px;
  width: auto;
  height: auto;
  padding: 1rem;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150vh;
  height: auto;

`;

const ModalBody = styled.div`
display: flex;
flex-direction: column;
width: 150vh;
height: 60vh;
`;

const ModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  height: 5vh;
  width: 5vh;
  padding: 10vh;
  cursor: pointer;
  border: none;
  background: transparent;
`;

const CloseImg = styled.img`
height: 6vh;
width: 6vh;
`;

const ModalTitleh4 = styled.h4`
font-size: 55px;
color: white;
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
                                        <ModalCloseButton type="button" onClick={hide}>
                                          <CloseImg src={close} alt="close" />
                                        </ModalCloseButton>
                                    </ModalHeader>
                                        <ModalBody>{props.children}</ModalBody>
                            </ModalContain>
                    </ModalWrapper>
            </ModalOverlay>
        </>,
        document.body
    ) : null;

    export default Modal;
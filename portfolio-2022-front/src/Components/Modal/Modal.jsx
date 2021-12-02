import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import close from '../../Assets/cancel.png';

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
  border: solid 3px #000000c1;
  background-image: linear-gradient(45deg,#ffffff, #818080);
  background-position: cover;
  position: relative;
  margin: auto;
  border-radius: 28px;
  width: auto;
  height: auto;
  padding: 1rem;
  @media screen and (max-width: 425px){
  width: 35vh;
  height: 65vh;
}
@media screen and (min-width: 426px) and (max-width: 767px){
  width: 45vh;
  height: 90vh;
}
@media only screen and (min-width: 768px){
  width: 80vh;
  height: 90vh;
}
`;

const ModalHeader = styled.div`
display: flex;
justify-content: space-between;
width: 150vh;
height: auto;
@media only screen and (max-width: 425px){
height: 10vh;
width: 36vh;
}
@media screen and (min-width: 426px) and (max-width: 767px){
height: 12vh;
width: 45vh;
}
@media only screen and (min-width: 768px){
height: 12vh;
width: 80vh;
}
`;

const ModalBody = styled.div`
display: flex;
flex-direction: column;
width: 150vh;
height: 60vh;
@media only screen and (max-width: 425px){
  width: 35vh;
  height: 50vh;
}
@media screen and (min-width: 426px) and (max-width: 767px){
  width: 40vh;
  height: 75vh;
}
@media only screen and (min-width: 768px){
  width: 40vh;
  height: 65vh;
}
`;

const ModalCloseButton = styled.button`
  display: flex;
  height: 5vh;
  width: 5vh;
  cursor: pointer;
  border: none;
  background: transparent;
`;

const CloseImg = styled.img`
height: 6vh;
width: 6vh;
@media only screen and (max-width: 425px){
height: 3vh;
width: 3vh;
}
@media screen and (min-width: 426px) and (max-width: 767px){
height: 4vh;
width: 4vh;
}
@media only screen and (min-width: 768px){
height: 4vh;
width: 4vh;
}
`;

const ModalTitleh4 = styled.h4`
font-size: 55px;
color: #000000d1;
@media only screen and (max-width: 425px){
font-size: 20px;
}
@media screen and (min-width: 426px) and (max-width: 767px){
font-size: 30px;
font-weight: 900;
}
@media only screen and (min-width: 768px){
font-size: 30px;
font-weight: 900;
}
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
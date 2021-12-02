import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import regionsud from '../../Assets/regionsud.png';
import useModal from '../Modal/useModal';
import CarouselRegionSud from '../Carousel/CarouselRegionSud';
import logoRs from '../../Assets/logoRS.png';


export const BodyProjects = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
background-image: url(${logoRs});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border: 3px solid black;
border-radius: 28px;
width: 40vh;
height: 25vh;
transform-style: preserve-3d;
transform-origin: top center;
will-change: transform;
transform: skewX(.001deg);
transition: transform .50s ease-in-out;
&:hover{
cursor: pointer;
will-change: transform;
transition: transform .65s cubic-bezier(0.18, 0.9, 0.58, 1);
background-image: url(${regionsud});
}
@media only screen and (max-width: 425px){
width: auto;
}
@media screen and (min-width: 426px) and (max-width: 767px){
width: auto;
}
@media only screen and (min-width: 768px){
width: auto;
}
`;

export const ButtonProjects = styled.button`
color: white;
border: solid 1px #1d1d1f;
background-image: linear-gradient(120deg, #eb4f56, #9d66e9);
border-radius: 28px;
width: 25vh;
height: 5vh;
cursor: pointer;
opacity: 0;
font-size: 20px;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
&:hover{
cursor: pointer;
opacity: 1;
}
@media only screen and (max-width: 425px){
height: 5vh;
width: 15vh;
}
@media screen and (min-width: 426px) and (max-width: 768px){
height: 5vh;
width: 15vh;
}
@media only screen and (min-width: 768px){
height: 5vh;
width: 15vh;
}
`;

export const ModalBody = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: auto;
height: 45vh;
@media only screen and (max-width: 425px){
height: 50vh;
width: 35vh;
}
@media screen and (min-width: 426px) and (max-width: 768px){
height: 90vh;
width: 45vh;
align-items: center;
}
@media only screen and (min-width: 768px){
height: 90vh;
width: 80vh;
align-items: center;
}
`;

export const ContainerImg = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: auto;
height: 30vh;
@media only screen and (max-width: 425px){
width: auto;
height: auto;
justify-content: center;
}
@media screen and (min-width: 426px) and (max-width: 768px){
width: auto;
height: auto;
justify-content: center;
}
@media only screen and (min-width: 768px){
width: auto;
height: auto;
justify-content: center;
}
`;

export const ContainerText = styled.div`
display: flex;
justify-content: center;
width: auto;
height: 10vh;
@media only screen and (max-width: 425px){
width: 35vh;
height: 10vh;
}
@media screen and (min-width: 426px) and (max-width: 768px){
width: 32vh;
height: 15vh;
word-wrap: break-word;
}
@media only screen and (min-width: 768px){
  width: 82vh;
height: 15vh;
word-wrap: break-word;
}
`;

export const ModalText = styled.p`
text-align: center;
color: #000000d1;
word-wrap: break-word;
font-size: 35px;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
@media only screen and (max-width: 425px){
font-size: 10px;
}
@media screen and (min-width: 426px) and (max-width: 768px){
font-size: 15px;
}
@media only screen and (min-width: 768px){
  font-size: 20px;
}
`;



export default function GetRegionSud () {
    const [itemProject, setItemProject] = useState([]);

    const RequestProject = async () => {
        await axios
          .get('http://localhost:8080/api/projects/1')
          .then((res) => res.data)
          .then((data) => {
            setItemProject(data);
          });
      };
      useEffect(() => {
        RequestProject();
      }, []);

      const { isOpen: isProjectShowed, toggle: toggleInProject } = useModal();

      return(
            <>
                {itemProject.map((item) => (
                <BodyProjects>
                  <ButtonProjects type="button" onClick={toggleInProject}>
                    {item.title}
                  </ButtonProjects>
                  <Modal
                  isOpen={isProjectShowed}
                  hide={toggleInProject}
                  title="Région Sud"
                  >
                      <ModalBody>
                        <ContainerImg>
                            <CarouselRegionSud />
                        </ContainerImg>
                            <ContainerText>
                              <ModalText>
                                  Conception d'un calculateur d'impact environnemental, qui contient un questionnaire
                                   avec des recommandations qui varient en fonction des réponses,
                                   un système de notation en temps réel, un
                                   espace administrateur et user.
                              </ModalText>
                            </ContainerText>
                      </ModalBody>
                  </Modal>
                </BodyProjects>
                ))}
            </>
      );
}
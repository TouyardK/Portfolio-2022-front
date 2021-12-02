import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ButtonProjects } from './GetRegionSud';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import fiiver from '../../Assets/fiiver.png';
import fiiver1 from '../../Assets/fiiver1.png';
import CarouselFiiver from '../Carousel/CarouselFiiver';
import { ModalBody, ContainerImg, ContainerText, ModalText } from './GetRegionSud';

const BodyFiiver = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
background-image: url(${fiiver});
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
background-image: url(${fiiver1});
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


export default function GetFiiver () {
    const [itemProject, setItemProject] = useState([]);

    const RequestProject = async () => {
        await axios
          .get('http://localhost:8080/api/projects/2')
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
                <BodyFiiver>
                  <ButtonProjects type="button" onClick={toggleInProject}>
                    {item.title}
                  </ButtonProjects>
                  <Modal
                  isOpen={isProjectShowed}
                  hide={toggleInProject}
                  title="Hackathon Fiiver"
                  >
                      <ModalBody>
                        <ContainerImg>
                          <CarouselFiiver />
                        </ContainerImg>
                            <ContainerText>
                                <ModalText>
                                    Nous avons développé un module complétementaire pour le site Fiiver, qui permet à la communautée de créer des évènements pour partager des moments de convivialité.
                                </ModalText>
                              </ContainerText>
                          </ModalBody>
                  </Modal>
                </BodyFiiver>
                ))}
            </>
      );
}
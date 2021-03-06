import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ButtonProjects } from './GetRegionSud';
import logooovyy from '../../Assets/logooovy.png';
import oovy1 from '../../Assets/Oovy1.png'
import CarouselOovy from '../Carousel/CarouselOovy';
import useModal from '../Modal/useModal';
import Modal from '../Modal/Modal';
import { ModalBody, ContainerImg, ContainerText, ModalText } from './GetRegionSud';

const BodyOovy = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
background-image: url(${logooovyy});
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
background-image: url(${oovy1});
}
@media only screen and (max-width: 768px){
width: auto;
}
`;



export default function GetOovy () {
    const [itemProject, setItemProject] = useState([]);

    const RequestProject = async () => {
        await axios
          .get('http://localhost:8080/api/projects/3')
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
                <BodyOovy>
                  <ButtonProjects type="button" onClick={toggleInProject}>
                    {item.title}
                  </ButtonProjects>
                  <Modal
                  isOpen={isProjectShowed}
                  hide={toggleInProject}
                  title="Oovy"
                  >
                      <ModalBody>
                        <ContainerImg>
                          <CarouselOovy />
                        </ContainerImg>
                        <ContainerText>
                             <ModalText>
                             Notre but ??tait l apprentissage de l utilisation d une API, nous avons donc r??alis?? une apply dynamique sous React, qui permettait de rechercher des films avec des filtres.
                             </ModalText>
                          </ContainerText>
                      </ModalBody>
                  </Modal>
                </BodyOovy>
                ))}
            </>
      );
}
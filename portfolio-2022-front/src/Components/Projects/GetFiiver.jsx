import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ButtonProjects } from './GetRegionSud';
import fiiver1 from '../../Assets/fiiver1.png'
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import fiiver from '../../Assets/fiiver.png';
import fiiver2 from '../../Assets/fiiver2.png';
import fiiver3 from '../../Assets/fiiver3.png';
import { ModalBody, ContainerImg, ContainerText, ModalText, ModalImg } from './GetRegionSud';

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
                          <ModalImg src={fiiver1} alt="rs2" />
                          <ModalImg src={fiiver2} alt="rs3" />
                          <ModalImg src={fiiver3} alt="rs4" />
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
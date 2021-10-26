import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ButtonProjects } from './GetRegionSud';
import oovy1 from '../../Assets/Oovy1.png';
import oovy2 from '../../Assets/oovy2.png';
import oovy3 from '../../Assets/oovy3.png';
import useModal from '../Modal/useModal';
import Modal from '../Modal/Modal';
import { ModalBody, ContainerImg, ContainerText, ModalText, ModalImg } from './GetRegionSud';

const BodyOovy = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
background-image: url(${oovy1});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border: 1px solid hsla(0,0%,51.4%,.16);
border-radius: 35px;
width: 75vh;
height: 45vh;
&:hover{
  transform: scale(1.12);
  transition: all 1s;
  filter: drop-shadow(0 0 0.95rem white);
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
                          <ModalImg src={oovy1} alt="rs2" />
                          <ModalImg src={oovy2} alt="rs3" />
                          <ModalImg src={oovy3} alt="rs4" />
                        </ContainerImg>
                        <ContainerText>
                             <ModalText>
                             Notre but était l apprentissage de l utilisation d une API, nous avons donc réalisé une apply dynamique sous React, qui permettait de rechercher des films avec des filtres.
                             </ModalText>
                          </ContainerText>
                      </ModalBody>
                  </Modal>
                </BodyOovy>
                ))}
            </>
      );
}
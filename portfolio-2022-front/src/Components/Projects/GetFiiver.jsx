import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ButtonProjects } from './GetRegionSud';
import fiiver1 from '../../Assets/fiiver1.png'
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import fiiver2 from '../../Assets/fiiver2.png';
import fiiver3 from '../../Assets/fiiver3.png';

const BodyFiiver = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
background-image: url(${fiiver1});
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

const ModalBody = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 55vh;
padding: 50px;
`;

const ContainerImg = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
height: 35vh;
`;

const ContainerText = styled.div`
display: flex;
width: 100%;
height: 10vh;
`;


const ModalText = styled.p`
text-align: center;
`;

const ModalImg = styled.img`
height: 35vh;
width: 48vh;
&:hover{
    transform: scale(1.80);
    transition: all 2s;
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
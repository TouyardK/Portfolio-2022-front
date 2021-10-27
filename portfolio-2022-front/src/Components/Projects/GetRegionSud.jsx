import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import regionsud from '../../Assets/regionsud.png';
import useModal from '../Modal/useModal';
import logoRs from '../../Assets/logoRS.png';
import rs2 from '../../Assets/regionsud2.png';
import rs3 from '../../Assets/regionsud3.png';
import rs4 from '../../Assets/regionsud4.png';


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
width: 60vh;
height: 45vh;
transform-style: preserve-3d;
transform-origin: top center;
will-change: transform;
transform: skewX(.001deg);
transition: transform .50s ease-in-out;
&:hover{
cursor: pointer;
transform: translateY(-20%);
will-change: transform;
transition: transform .65s cubic-bezier(0.18, 0.9, 0.58, 1);
background-image: url(${regionsud});
}
`;

export const ButtonProjects = styled.button`
color: white;
border: solid 3px #1d1d1f;
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
`;

export const ModalBody = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 55vh;
padding: 50px;
`;

export const ContainerImg = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
height: 35vh;
`;

export const ContainerText = styled.div`
display: flex;
width: 100%;
height: 10vh;
`;


export const ModalText = styled.p`
text-align: center;
`;

export const ModalImg = styled.img`
height: 35vh;
width: 48vh;
&:hover{
    transform: scale(1.80);
    transition: all 2s;
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
                          <ModalImg src={rs2} alt="rs2" />
                          <ModalImg src={rs3} alt="rs3" />
                          <ModalImg src={rs4} alt="rs4" />
                        </ContainerImg>
                            <ContainerText>
                              <ModalText>
                                  Conception d'un calculateur d'impact environnemental, qui contient un questionnaire avec des recommandations qui varient en fonction des réponses, un système de notation en temps réel, un
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
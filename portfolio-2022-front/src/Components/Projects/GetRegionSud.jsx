import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import regionsud from '../../Assets/regionsud.png';
import useModal from '../Modal/useModal';


export const BodyProjects = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
background-image: url(${regionsud});
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

export const ButtonProjects = styled.button`
color: white;
border: solid 5px #1d1d1f;
background-image: linear-gradient(120deg, #eb4f56, #9d66e9);
border-radius: 35px;
width: 20vh;
height: 5vh;
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
                  title="Hello"
                  >

                  </Modal>
                </BodyProjects>
                ))}
            </>
      );
}
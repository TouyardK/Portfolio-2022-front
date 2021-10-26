import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ButtonProjects } from './GetRegionSud';
import akgs1 from '../../Assets/akgs1.png';

const BodyAkgs = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
background-image: url(${akgs1});
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


export default function GetAkgs () {
    const [itemProject, setItemProject] = useState([]);

    const RequestProject = async () => {
        await axios
          .get('http://localhost:8080/api/projects/4')
          .then((res) => res.data)
          .then((data) => {
            setItemProject(data);
          });
      };
      useEffect(() => {
        RequestProject();
      }, []);



      return(
            <>
                {itemProject.map((item) => (
                <BodyAkgs>
                  <ButtonProjects>
                    {item.title}
                  </ButtonProjects>
                </BodyAkgs>
                ))}
            </>
      );
}
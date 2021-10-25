import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ButtonProjects } from './GetRegionSud';
import oovy1 from '../../Assets/Oovy1.png';

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



      return(
            <>
                {itemProject.map((item) => (
                <BodyOovy>
                  <ButtonProjects>
                    {item.title}
                  </ButtonProjects>
                </BodyOovy>
                ))}
            </>
      );
}
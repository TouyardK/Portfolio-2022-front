import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ButtonProjects } from './GetRegionSud';
import akgs1 from '../../Assets/akgs1.png';
import akgs from '../../Assets/akgs.png';

const BodyAkgs = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
background-image: url(${akgs});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-color: white;
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
background-image: url(${akgs1});
}
@media only screen and (max-width: 768px){
width: auto;
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
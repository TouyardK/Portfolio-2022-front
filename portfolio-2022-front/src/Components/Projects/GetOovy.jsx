import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { TitleProjects, ContentProjects } from './GetRegionSud';
import oovy1 from '../../Assets/Oovy1.png';

const BodyOovy = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
background-image: url(${oovy1});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border: 1px solid hsla(0,0%,51.4%,.16);
border-radius: 55px;
width: 75vh;
height: 42vh;
padding: 28px;
line-height: 1.1;
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
                  <TitleProjects>
                    {item.title}
                  </TitleProjects>
                  <ContentProjects>
                    {item.content}
                  </ContentProjects>
                </BodyOovy>
                ))}
            </>
      );
}
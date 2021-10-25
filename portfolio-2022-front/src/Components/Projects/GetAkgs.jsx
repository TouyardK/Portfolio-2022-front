import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { TitleProjects, ContentProjects } from './GetRegionSud';
import akgs1 from '../../Assets/akgs1.png';

const BodyAkgs = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
background-image: url(${akgs1});
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
                  <TitleProjects>
                    {item.title}
                  </TitleProjects>
                  <ContentProjects>
                    {item.content}
                  </ContentProjects>
                </BodyAkgs>
                ))}
            </>
      );
}
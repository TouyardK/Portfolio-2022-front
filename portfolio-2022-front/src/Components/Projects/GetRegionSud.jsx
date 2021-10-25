import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import regionsud from '../../Assets/regionsud.png';


export const BodyProjects = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
background-image: url(${regionsud});
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

export const TitleProjects = styled.h2`
color: white;
`;

export const ContentProjects = styled.p`
color: white;
text-align: center;
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



      return(
            <>
                {itemProject.map((item) => (
                <BodyProjects>
                  <TitleProjects>
                    {item.title}
                  </TitleProjects>
                  <ContentProjects>
                    {item.content}
                  </ContentProjects>
                </BodyProjects>
                ))}
            </>
      );
}
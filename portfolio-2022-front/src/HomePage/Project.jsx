import React from 'react';
import styled from "styled-components";
import ProjectBox from "./ProjectBox";

const ProjectContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: auto;
width: auto;
`;

const TitleProject = styled.h2`
padding: 75px;
color: white;
font-size: 6vh;
letter-spacing: 1vh;
height: 1vh;
text-align: center;
  text-transform: uppercase;
  background: linear-gradient(91.36deg, #ECA658 0%, #F391A6 13.02%, #E188C3 25.52%, #A58DE3 37.5%, #56ABEC 49.48%, #737EB7 63.02%, #C8638C 72.92%, #DD5D57 84.38%, #DF6C51 97.92%);
  letter-spacing: 10px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
`;

export default function Project () {
    return (
        <>  
            <ProjectContainer>
                <TitleProject>Projets.</TitleProject>
                <ProjectBox />
            </ProjectContainer>
        </>
    );
}
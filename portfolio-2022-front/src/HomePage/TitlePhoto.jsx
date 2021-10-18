import React from 'react';
import styled from "styled-components";

const StyledContainerTitles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
font-weight: 700;
  text-align: center;
  font-family: Hack, sans-serif;
  text-transform: uppercase;
  background: linear-gradient(91.36deg, #ECA658 0%, #F391A6 13.02%, #E188C3 25.52%, #A58DE3 37.5%, #56ABEC 49.48%, #737EB7 63.02%, #C8638C 72.92%, #DD5D57 84.38%, #DF6C51 97.92%);
  letter-spacing: 5px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  background-size: 80%;
  animation: shine 4s linear;
  position: relative;
  @keyframes shine {
  0% {
    background-position-x: -500%;
  }
  100% {
    background-position-x: 500%;
  }
}
`;

const StyledTitleName = styled.h2`
font-size: 2rem;
`;

const StyledTitlePro = styled.h1`
font-size: 3rem;
`;

const StyledTitleEnd = styled.h3`
font-size: 1.5rem;
`;


export default function TitlePhoto () {
    return (
        <>
        <StyledContainerTitles>
            <StyledTitleName>Touyard Kévin</StyledTitleName>
            <StyledTitlePro>Développeur FullStack Junior.</StyledTitlePro>
            <StyledTitleEnd>Découvrez mes projets.</StyledTitleEnd>
        </StyledContainerTitles>
        </>
    );
}
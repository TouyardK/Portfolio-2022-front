import React from 'react';
import styled from "styled-components";
import { device } from '../Styles/device';

const StyledContainerTitles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
line-height: 0.9vh;
font-weight: 700;
text-align: center;
text-transform: uppercase;
background: linear-gradient(91.36deg, #ECA658 0%, #F391A6 13.02%, #E188C3 25.52%, #A58DE3 37.5%, #56ABEC 49.48%, #737EB7 63.02%, #C8638C 72.92%, #DD5D57 84.38%, #DF6C51 97.92%);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
background-repeat: repeat;
background-size: 80%;
animation: shine 15s infinite;
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
letter-spacing: -.045em;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
@media ${device.mobileS}{
padding: 17px;
font-size: 1.5rem;
  }
`;

const StyledTitlePro = styled.h1`
font-size: 3rem;
letter-spacing: -.045em;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
@media ${device.mobileS}{
padding: 5px;
font-size: 0.95rem;
  }
`;

export default function TitlePhoto () {
    return (
        <>
        <StyledContainerTitles>
            <StyledTitleName>Touyard Kévin</StyledTitleName>
            <StyledTitlePro>Junior FullStack Web-Developer</StyledTitlePro>
        </StyledContainerTitles>
        </>
    );
}
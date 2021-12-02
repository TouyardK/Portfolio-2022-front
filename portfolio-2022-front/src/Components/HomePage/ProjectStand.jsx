import React from "react";
import styled from "styled-components";

const StyledTitleContainer = styled.div`
display: flex;
background-color: #1d1d1f;
justify-content: center;
align-items: center;
left: 0;
right: 0;
height: auto;
width: auto;
letter-spacing: -.045em;
@media only screen and (max-width: 768px){
height: 30vh;
width: auto;
justify-content: start;
}
`;

const StyledTitleBox = styled.div`
display: flex;
flex-direction: column;
background-color: #1d1d1f;
border-radius: 25px;
width: 150vh;
height: 35vh;
line-height: 1vh;
padding-left: 20vh;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
@media only screen and (max-width: 768px){
  word-wrap: break-word;
  padding-left: 0;
  height: auto;
  width: auto;
}
`;

const StyledH1 = styled.h1`
color: white;
letter-spacing: -.045em;
font-size: 8vh;
@media only screen and (max-width: 768px){
font-size: 3vh;
}
`;

const StyledH2 = styled.h2`
color: #999999;
letter-spacing: -.045em;
font-size: 4vh;
@media only screen and (max-width: 768px){
font-size: 3vh;
}
`;

const LineTop = styled.div`
border: solid 1px;
background-image: linear-gradient(120deg, #ffffff, #ff0000);
width: 43vh;
border-radius: 35px;
height: 3px;
@media only screen and (max-width: 768px){
width: 15vh;
}
`;


export default function ProjectStand () {
    return (
            <StyledTitleContainer id="section-projects">
                <StyledTitleBox>
                    <StyledH2>Projects</StyledH2>
                        <LineTop />
                            <StyledH1>A selection of</StyledH1>
                                <StyledH1>Some projects I worked on.</StyledH1>
                    </StyledTitleBox>
            </StyledTitleContainer>
    )
}
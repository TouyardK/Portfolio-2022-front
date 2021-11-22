import React from 'react';
import styled from "styled-components";


const StyledTitleContainer = styled.div`
display: flex;
background-color: black;
position: relative;
justify-content: center;
align-items: center;
left: 0;
right: 0;
height: auto;
width: auto;
@media only screen and (max-width: 768px){
height: 30vh;
width: auto;
justify-content: start;
}
`;

const StyledTitleBox = styled.div`
display: flex;
flex-direction: column;
background-color: black;
width: 150vh;
height: 38vh;
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
font-size: 3.5vh;
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
background-image: linear-gradient(120deg, #f8ff8f, #ffee00);
width: 45vh;
border-radius: 35px;
height: 3px;
@media only screen and (max-width: 768px){
width: 15vh;
}
`;



export default function SoftSkills () {
    return (
        <StyledTitleContainer>
            <StyledTitleBox>
                <StyledH2>Soft Skills</StyledH2>
                    <LineTop />
                        <StyledH1>JavaScript developper</StyledH1>
                     <StyledH1>Front-end Designer.</StyledH1>
            </StyledTitleBox>
        </StyledTitleContainer>
    );
}
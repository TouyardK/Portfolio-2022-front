import React from 'react';
import styled from "styled-components";

const StyledTitleContainer = styled.div`
display: flex;
background-color: black;
justify-content: center;
align-items: center;
border: solid 1px;
left: 0;
right: 0;
height: auto;
width: auto;
`;

const StyledTitleBox = styled.div`
display: flex;
flex-direction: column;
background-color: black;
border-radius: 25px;
width: 150vh;
height: 50vh;
line-height: 1vh;
padding-left: 20vh;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
`;

const StyledH1 = styled.h1`
color: white;
letter-spacing: -.045em;
font-size: 8vh;
`;

const StyledH2 = styled.h2`
color: #999999;
letter-spacing: -.045em;
font-size: 4vh;
`;

const LineTop = styled.div`
border: solid 1px;
background-image: linear-gradient(120deg, #f8ff8f, #ffee00);
width: 45vh;
border-radius: 35px;
height: 3px;
`;




export default function SoftSkills () {
    return (
        <>
            <StyledTitleContainer>
                <StyledTitleBox>
                    <StyledH2>Soft Skills</StyledH2>
                    <LineTop />
                    <StyledH1>JavaScript developper</StyledH1>
                    <StyledH1>Front-end Designer.</StyledH1>
                </StyledTitleBox>
            </StyledTitleContainer>
        </>
    );
}
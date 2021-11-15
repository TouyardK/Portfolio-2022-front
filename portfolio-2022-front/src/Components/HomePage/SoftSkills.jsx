import React from 'react';
import styled from "styled-components";
import { device } from '../Styles/device';


const StyledTitleContainer = styled.div`
display: flex;
background-color: black;
justify-content: center;
align-items: center;
left: 0;
right: 0;
`;

const StyledTitleBox = styled.div`
display: flex;
flex-direction: column;
background-color: black;
border-radius: 25px;
width: 150vh;
height: 38vh;
line-height: 1vh;
padding-left: 20vh;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
@media ${device.mobileS}{
    height: 15vh;
  }
`;

const StyledH1 = styled.h1`
color: white;
letter-spacing: -.045em;
font-size: 8vh;
@media ${device.mobileS}{
    font-size: 1.5rem;
  }

  @media ${device.tablet}{
  }

  @media ${device.desktop}{

  }
`;

const StyledH2 = styled.h2`
color: #999999;
letter-spacing: -.045em;
font-size: 4vh;
@media ${device.mobileS}{
    font-size: 1.5rem;
  }

  @media ${device.tablet}{
  }

  @media ${device.desktop}{

  }
`;

const LineTop = styled.div`
border: solid 1px;
background-image: linear-gradient(120deg, #f8ff8f, #ffee00);
width: 45vh;
border-radius: 35px;
height: 3px;
@media ${device.mobileS}{
    font-size: 5vh;
  }

  @media ${device.tablet}{
  }

  @media ${device.desktop}{

  }
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
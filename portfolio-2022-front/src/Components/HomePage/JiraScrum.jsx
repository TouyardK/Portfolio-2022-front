import React from 'react';
import styled from "styled-components";
import agile from '../../Assets/agile.jpg';
import { device } from '../Styles/device';


const JiraScrumContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: black;
height: 60vh;
@media ${device.mobileS}{
    flex-direction: column;
    align-items: center;
    height: 55vh;
  }
`;

const ContainerImgAndText = styled.div`
display: flex;
border-radius: 28px;
height: 50vh;
width: 160vh;
letter-spacing: -.045em;
@media ${device.mobileS}{
    flex-direction: column;
    align-items: center;
    height: 38vh;
    width: 40vh;
  }
`;

const ImgResponsive = styled.img`
height: 36vh;
width: 75vh;
border-radius: 15px;
border: 1px solid hsla(0,0%,51.4%,.16);
box-shadow: 0 0 10px 5px rgb(163, 83, 255);
@media ${device.mobileS}{
height: 20vh;
width: 40vh;
  }
`;

const RightCol = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
@media ${device.mobileS}{
  }
`;

const LeftCol = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
@media ${device.mobileS}{
height: auto;
width: auto;
  }
`;

const TitleResponsive = styled.h2`
color: white;
font-size: 3vh;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
@media ${device.mobileS}{
font-size: 2.5vh;
  }
`;

const TextResponsive = styled.p`
color: white;
font-size: 2vh;
text-align: center;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
@media ${device.mobileS}{
font-size: 1.70vh;
  }
`;

const Line = styled.div`
border: solid 1px;
background-image: linear-gradient(120deg, #4e68ff, #b726f0);
width: 17vh;
height: 1px;
@media ${device.mobileS}{
width: 15vh;
  }
`;

const LineTop = styled.div`
border: solid 1px;
background-image: linear-gradient(120deg, #4e68ff, #b726f0);
width: 45vh;
height: 1px;
@media ${device.mobileS}{
width: 30vh;
  }
`;



export default function JiraScrum () {
    return (
        <>
            <JiraScrumContainer>
                <ContainerImgAndText>
                    <RightCol>
                        <ImgResponsive src={agile} alt="resp" />
                    </RightCol>
                    <LeftCol>
                        <TitleResponsive>Agility Method Developpement</TitleResponsive>
                            <LineTop />
                        <TextResponsive>During the training, we had several projects to carry out in groups, in order to teach us how to work with the agile method. By managing sprints, tickets, story points.</TextResponsive>
                            <Line />
                    </LeftCol>
                </ContainerImgAndText>
            </JiraScrumContainer>
        
        </>
    );
}
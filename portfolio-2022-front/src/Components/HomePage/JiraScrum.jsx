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
@media only screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    height: auto;
    width: auto;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const ContainerImgAndText = styled.div`
display: flex;
border-radius: 28px;
height: 50vh;
width: 160vh;
letter-spacing: -.045em;
@media only screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    height: auto;
    width: auto;
  }
`;

const ImgResponsive = styled.img`
height: 36vh;
width: 75vh;
border-radius: 15px;
border: 1px solid hsla(0,0%,51.4%,.16);
box-shadow: 0 0 10px 5px rgb(163, 83, 255);
@media only screen and (max-width: 768px){
height: 20vh;
width: auto;
  }
`;

const RightCol = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
@media only screen and (max-width: 768px){
  width: auto;
  }
`;

const LeftCol = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
@media only screen and (max-width: 768px){
height: auto;
width: auto;
  }
`;

const TitleResponsive = styled.h2`
color: white;
font-size: 3vh;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
@media only screen and (max-width: 768px){
font-size: 2.5vh;
  }
`;

const TextResponsive = styled.p`
color: white;
font-size: 2vh;
text-align: center;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
@media only screen and (max-width: 768px){
font-size: 1.70vh;
  }
`;

const Line = styled.div`
border: solid 1px;
background-image: linear-gradient(120deg, #4e68ff, #b726f0);
width: 17vh;
height: 1px;
@media only screen and (max-width: 768px){
width: 15vh;
  }
`;

const LineTop = styled.div`
border: solid 1px;
background-image: linear-gradient(120deg, #4e68ff, #b726f0);
width: 45vh;
height: 1px;
@media only screen and (max-width: 768px){
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
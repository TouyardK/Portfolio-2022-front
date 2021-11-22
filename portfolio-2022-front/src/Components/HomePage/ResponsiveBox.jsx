import React from 'react';
import styled from "styled-components";
import responsive from '../../Assets/responsive.jpg';

const ResponsiveContainer = styled.div`
display: flex;
align-items: center;
height: 70vh;
width: 160vh;
@media only screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    height: 35vh;
    width: auto;
    padding-bottom: 20px;
  }
`;

export const ContainerImgAndText = styled.div`
display: flex;
border-radius: 28px;
background-image: linear-gradient(120deg, #4e68ff, #b726f0);
height: 40vh;
width: 160vh;
letter-spacing: -.045em;
@media only screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    height: 38vh;
    width: 38vh;
  }
`;

export const ImgResponsive = styled.img`
height: 36vh;
width: 75vh;
border-radius: 15px;
border: 1px solid hsla(0,0%,51.4%,.16);
box-shadow: 0 0 10px 5px;
@media only screen and (max-width: 768px){
height: 20vh;
width: 30vh;
  }
`;

export const RightCol = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
@media only screen and (max-width: 768px){
height: 20vh;
width: 30vh;
  }
`;

export const LeftCol = styled.div`
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

export const TitleResponsive = styled.h2`
color: white;
font-size: 5vh;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
@media only screen and (max-width: 768px){
font-size: 2.5vh;
  }
`;

export const TextResponsive = styled.p`
color: white;
font-size: 2vh;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
@media only screen and (max-width: 768px){
font-size: 1.4vh;
  }
`;

const Line = styled.div`
border: solid 1px;
background-image: linear-gradient(120deg, #ffffff, #118f00);
width: 17vh;
height: 1px;
@media only screen and (max-width: 768px){
width: 28vh;
  }
`;

const LineTop = styled.div`
border: solid 1px;
background-image: linear-gradient(120deg, #ffffff, #118f00);
width: 28vh;
height: 1px;
`;


export default function ResponSive() {
    return(
        <>
            <ResponsiveContainer>
                <ContainerImgAndText>
                    <LeftCol>
                        <TitleResponsive>Responsive DeSign.</TitleResponsive>
                            <LineTop />
                        <TextResponsive>Learning and intense practice, in order to ensure quality in my projects.</TextResponsive>
                            <Line />
                    </LeftCol>
                    <RightCol>
                        <ImgResponsive src={responsive} alt="resp" />
                    </RightCol>
                </ContainerImgAndText>
            </ResponsiveContainer>
        </>
    );
}
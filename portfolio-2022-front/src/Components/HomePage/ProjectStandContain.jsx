import React from "react";
import styled from "styled-components";

const GlobalContainer = styled.div`
display: flex;
justify-content: center;
`;

const ContainerCardProject = styled.div`
display: flex;
background-color: #1d1d1f;
height: 90vh;
width: 110vh;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
`;

const RightContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 50%;
`;

const LeftContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 50%;
`;

const CardProject = styled.div`
height: 400px;
width: 500px;
background-color: white;
border: solid 1px;
border-radius: 35px;
`;

export default function ProjectStandContain () {
    return (
        <>
        <GlobalContainer>
            <ContainerCardProject >
                <LeftContainer>
                    <CardProject />
                    <CardProject />
                </LeftContainer>
                <RightContainer>
                    <CardProject />
                    <CardProject />
                </RightContainer>
            </ContainerCardProject >
        </GlobalContainer>
        </>
    )
}
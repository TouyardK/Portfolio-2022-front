import React from "react";
import styled from "styled-components";

const GlobalContainer = styled.div`
display: flex;
justify-content: center;
height: auto;
width: auto;
`;

const ContainerCardProject = styled.div`
display: flex;
flex-direction: column;
width: 138vh;
height: auto;
background-color: #1d1d1f;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
`;

const RightContainer = styled.div`
display: flex;
justify-content: space-between;
width: auto;
height: 30vh;
`;

const LeftContainer = styled.div`
display: flex;
justify-content: space-between;
width: auto;
height: 44vh;
`;

const CardProject = styled.div`
height: 400px;
width: 650px;
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
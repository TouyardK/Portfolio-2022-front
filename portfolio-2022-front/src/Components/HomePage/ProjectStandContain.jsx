import React from "react";
import styled from "styled-components";
import GetRegionSud from "../Projects/GetRegionSud";
import GetFiiver from "../Projects/GetFiiver";
import GetOovy from "../Projects/GetOovy";
import GetAkgs from "../Projects/GetAkgs";

const GlobalContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
height: auto;
width: auto;
@media only screen and (max-width: 768px){
height: auto;
width: auto;
}
`;

const ContainerTop = styled.div`
display: flex;
justify-content: space-around;
width: 90vh;
height: 30vh;
@media only screen and (max-width: 768px){
flex-direction: column;
align-content: center;
width: 35vh;
height: 60vh;
padding-bottom: 10px;
}
`;

const ContainerBottom = styled.div`
display: flex;
justify-content: space-around;
width: 90vh;
height: 30vh;
@media only screen and (max-width: 768px){
flex-direction: column;
width: 35vh;
height: 60vh;
}
`;


export default function ProjectStandContain () {
    return (
            <GlobalContainer>
                    <ContainerTop>
                        <GetRegionSud />
                        <GetFiiver />
                    </ContainerTop>
                        <ContainerBottom>
                            <GetOovy />
                            <GetAkgs />
                        </ContainerBottom>
            </GlobalContainer>
    )
}
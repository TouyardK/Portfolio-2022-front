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
`;

const ContainerTop = styled.div`
display: flex;
justify-content: space-around;
width: 160vh;
height: 50vh;
`;

const ContainerBottom = styled.div`
display: flex;
justify-content: space-around;
width: 160vh;
height: auto;
`;


export default function ProjectStandContain () {
    return (
        <>
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
        </>
    )
}
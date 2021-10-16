import React from "react";
import styled from "styled-components";
import Header from './Header';
import AboutBox from './AboutBox';
import SoftSkills from "./SoftSkills";
import SoftSkillsDates from "./SoftSkillsDates";


const StyledContainerGlobal = styled.div`
background-color: #1d1d1f;
height: 100%;
width: 100%;
`;

export default function HomePage () {
    return (
        <>
        <StyledContainerGlobal>
            <Header />
            <AboutBox />
            <SoftSkills />
            <SoftSkillsDates />
        </StyledContainerGlobal>
        </>
    );
}
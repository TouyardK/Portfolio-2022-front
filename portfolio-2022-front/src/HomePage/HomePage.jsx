import React from "react";
import styled from "styled-components";
import Header from './Header';
import AboutBox from './AboutBox';
import SoftSkills from "./SoftSkills";
import SoftSkillsDates from "./SoftSkillsDates";
import Project from "./Project";


const StyledContainerGlobal = styled.div`
background-color: #1d1d1f;
position: absolute;
left: 0;
right: 0;
`;

export default function HomePage () {
    return (
        <>
        <StyledContainerGlobal>
            <Header />
            <AboutBox />
            <SoftSkills />
            <SoftSkillsDates />
            <Project />
        </StyledContainerGlobal>
        </>
    );
}
import React from "react";
import styled from "styled-components";
import Header from './Header';
import NavBar from '../NavBar/NavBar';
import AboutBox from './AboutBox';
import SoftSkills from "./SoftSkills";
import SoftSkillsDates from "./SoftSkillsDates";
import AdditionalSkills from "./AdditionalSkills";
import ProjectStand from "./ProjectStand";
import ProjectStandContain from "./ProjectStandContain";
import Resume from "../Resume/Resume";
import Contact from '../Contact/Contact';
import Footer from './Footer';


const StyledContainerGlobal = styled.div`
background-color: #1d1d1f;

`;

export default function HomePage () {
    return (
        <StyledContainerGlobal  id="section-home">
            <NavBar />
            <Header />
            <AboutBox />
            <SoftSkills />
            <SoftSkillsDates />
        </StyledContainerGlobal>
    );
}
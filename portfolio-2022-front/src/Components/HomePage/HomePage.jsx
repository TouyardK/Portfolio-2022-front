import React from "react";
import styled from "styled-components";
import Header from './Header';
import AboutBox from './AboutBox';
import SoftSkills from "./SoftSkills";
import SoftSkillsDates from "./SoftSkillsDates";
import AdditionalSkills from "./AdditionalSkills";
import ProjectStand from "./ProjectStand";
import ProjectStandContain from "./ProjectStandContain";
import Partner from "../Partner/Partner";
import Contact from '../Contact/Contact';
import Footer from './Footer';


const StyledContainerGlobal = styled.div`
background-color: #1d1d1f;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
position: absolute;
letter-spacing: -.045em;
height: auto;
left: 0;
right: 0;
`;

export default function HomePage () {
    return (
        <StyledContainerGlobal>
            <Header />
                <AboutBox />
                    <SoftSkills />
                        <SoftSkillsDates />
                            <AdditionalSkills />
                         <ProjectStand />
                    <ProjectStandContain />
                    <Partner />
                <Contact />
            <Footer />
        </StyledContainerGlobal>
    );
}
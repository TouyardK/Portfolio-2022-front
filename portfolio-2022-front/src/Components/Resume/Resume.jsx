import React from "react";
import styled from "styled-components";
import PartnerCitation from "./ResumeCitation";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky } from "react-scroll-motion";

const ResumeMainContainer = styled.div`
display: block;
background-color: black;
height: 155vh;
`;


export default function Resume () {
    return (
            <ResumeMainContainer id="section-resume">
                <ScrollContainer>
                    <ScrollPage page={6}>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -800))}>
                            <PartnerCitation />
                        </Animator>
                    </ScrollPage>        
                </ScrollContainer>
            </ResumeMainContainer>
   
    );
}
import React from "react";
import styled from "styled-components";
import ContactTitle from "./ContactTitle";
import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, StickyIn, ZoomIn } from "react-scroll-motion";

const ContactMainContainer = styled.div`
display: block;
background-color: black;
height:110vh;
@media only screen and (max-width: 375px){
height:20vh;
}
@media only screen and (max-width: 425px){
height:70vh;
}
@media only screen and (max-width: 768px){
height:155vh;
}
`;


const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

export default function ContactContainer () {
    return(
        <>
            <ContactMainContainer id="section-contact">
                <ScrollContainer>
                    <ScrollPage page={7}>
                        <Animator animation={ZoomInScrollOut}>
                            <ContactTitle/>
                        </Animator>
                    </ScrollPage>        
                </ScrollContainer>
            </ContactMainContainer>
        </>
    );
}
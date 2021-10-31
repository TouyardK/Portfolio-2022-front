import React from "react";
import styled from "styled-components";
import ContactTitle from "./ContactTitle";
import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, StickyIn, ZoomIn } from "react-scroll-motion";

const ContactMainContainer = styled.div`
display: block;
background-color: black;
height:110vh;
`;


const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

export default function ContactContainer () {
    return(
        <>
            <ContactMainContainer>
                <ScrollContainer>
                    <ScrollPage page={6}>
                        <Animator animation={ZoomInScrollOut}>
                            <ContactTitle />
                        </Animator>
                    </ScrollPage>        
                </ScrollContainer>
            </ContactMainContainer>
        </>
    );
}
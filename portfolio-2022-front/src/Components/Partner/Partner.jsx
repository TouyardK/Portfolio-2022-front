import React from "react";
import styled from "styled-components";
import PartnerCitation from "./PartnerCitation";
import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, StickyIn, ZoomIn } from "react-scroll-motion";

const PartnerMainContainer = styled.div`
display: block;
background-color: black;
height:auto;
`;

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

export default function Partner () {
    return (
            <PartnerMainContainer>
                <ScrollContainer>
                    <ScrollPage page={5}>
                        <Animator animation={ZoomInScrollOut}>
                            <PartnerCitation />
                        </Animator>
                    </ScrollPage>        
                </ScrollContainer>
            </PartnerMainContainer>
   
    );
}
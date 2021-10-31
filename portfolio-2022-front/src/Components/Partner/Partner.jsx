import React from "react";
import styled from "styled-components";
import PartnerCitation from "./PartnerCitation";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky } from "react-scroll-motion";

const PartnerMainContainer = styled.div`
display: block;
background-color: black;
height:auto;
`;


export default function Partner () {
    return (
            <PartnerMainContainer>
                <ScrollContainer>
                    <ScrollPage page={5}>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -800))}>
                            <PartnerCitation />
                        </Animator>
                    </ScrollPage>        
                </ScrollContainer>
            </PartnerMainContainer>
   
    );
}
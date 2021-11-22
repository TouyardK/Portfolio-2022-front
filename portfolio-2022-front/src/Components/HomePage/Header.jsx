import React from 'react';
import styled from 'styled-components';
import Photo from '../HomePage/Photo';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, Sticky } from "react-scroll-motion";


const FadeUp = batch(Fade(), Move(), Sticky());

const HeaderContainer = styled.div`
display: block;
`;

export default function Header () {
    return (
        <HeaderContainer>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={FadeUp}>
                        <Photo />
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
        </HeaderContainer>
    );
}
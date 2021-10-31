import React from 'react';
import NavBar from '../NavBar/NavBar';
import Photo from '../HomePage/Photo';
import TitlePhoto from './TitlePhoto';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, Sticky } from "react-scroll-motion";


const FadeUp = batch(Fade(), Move(), Sticky());

export default function Header () {
    return (
    <>
        <NavBar />
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={FadeUp}>
                        <Photo />
                    <TitlePhoto />
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    </>
    );
}
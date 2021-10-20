import React from 'react';
import styled from "styled-components";
import mac from '../Assets/mac.svg';
import ProjectCarousel from './ProjectCarousel';

const BoxProjectContainer = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
height: auto;
width: 160vh;
border-radius: 35px;
border: none;
`;

const DesktopProject = styled.img`
display: flex;
height: 60vh;
width: 80vh;
`;

const CarouselPosition = styled.div`
display: block;
position: absolute;
height: 25vh;
`;

export default function ProjectBox () {
    return(
        <>
            <BoxProjectContainer>
                <DesktopProject src={mac} alt="desk"/>
            </BoxProjectContainer>
                <CarouselPosition>
                    <ProjectCarousel />
                </CarouselPosition>
        </>
    );
}
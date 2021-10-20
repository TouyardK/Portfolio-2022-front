import React from 'react';
import styled from "styled-components";
import github from '../Assets/github.png';
import linkedin from '../Assets/linkedin.png';
import smart from '../Assets/smart.png';

const PictoContainer = styled.div`
display: flex;
justify-content: space-between;
height: 10vh;
width: 25%;
`;

const PictoSize = styled.img`
height: 100px;
width: 100px;
`;

export default function ContactMePicto () {
    return (
        <>
            <PictoContainer>
                <PictoSize src={github} alt="git" />
                <PictoSize src={linkedin} alt="link" />
                <PictoSize src={smart} alt="smart" />
            </PictoContainer>
        </>
    );
}
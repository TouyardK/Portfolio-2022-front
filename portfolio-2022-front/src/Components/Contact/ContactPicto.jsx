import React from "react";
import styled from "styled-components";
import github from '../../Assets/github.png'
import linkedin from '../../Assets/linkedin.png'
import facebook from '../../Assets/facebook.png'

const PictoContainer = styled.div`
display: flex;
justify-content: space-around;
width: 30%;
`;

const PictoLink = styled.img`
background-color: whitesmoke;
height: 40px;
width: 40px;
border-radius: 28px;
`;

export default function ContactTitle () {
    return (
            <PictoContainer>
                <PictoLink src={github} alt="git"/>
                <PictoLink src={facebook} alt="fb" />
                <PictoLink src={linkedin} alt="link" />
            </PictoContainer>
    );
}
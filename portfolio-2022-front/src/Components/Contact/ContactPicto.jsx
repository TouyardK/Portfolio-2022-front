import React from "react";
import styled from "styled-components";
import github from '../../Assets/github.png'
import linkedin from '../../Assets/linkedin.png'
import facebook from '../../Assets/facebook.png'

const PictoContainer = styled.div`
display: flex;
justify-content: space-around;
width: 40%;
`;

const PictoLink = styled.img`
background-color: whitesmoke;
height: 30px;
width: 30px;
border-radius: 28px;
`;

export default function ContactTitle () {
    return (
            <PictoContainer>
                <a href="https://github.com/TouyardK" >
                    <PictoLink src={github} alt="git"/>
                </a>
                <a href="https://www.facebook.com/niss.ka.754/">
                    <PictoLink src={facebook} alt="fb" />
                </a>
                <a href="https://www.linkedin.com/in/kevin-touyard/">
                    <PictoLink src={linkedin} alt="link" />
                </a>
            </PictoContainer>
    );
}
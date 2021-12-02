import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
display: block;
background-color: black;
height: 5vh;
font-family: 'Oswald', sans-serif;
@media only screen and (max-width: 768px){
height: auto;
width: auto;
}
`;

const FooterBottom = styled.div`
display: flex;
justify-content: center;
border-top: solid 1px white;
@media only screen and (max-width: 768px){
height: auto;
width: auto;
}
`;

const FooterText = styled.p`
color: white;
font-size: 0.6rem;
letter-spacing: 12px;
padding: 10px 85px;
@media only screen and (max-width: 768px){
height: auto;
width: auto;
font-size: 6.5px;
letter-spacing: 0px;
}
`;

export default function Footer () {
    return (
            <FooterContainer>
                <FooterBottom>
                    <FooterText>© 2021 TOUYARD Kévin. All rights reserved.</FooterText>
                </FooterBottom>
            </FooterContainer>
    );
}
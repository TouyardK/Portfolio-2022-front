import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
display: block;
background-color: black;
height: 5vh;
font-family: 'Oswald', sans-serif;
`;

const FooterBottom = styled.div`
display: flex;
justify-content: center;
border-top: solid 1px white;
`;

const FooterText = styled.p`
color: white;
font-size: 0.6rem;
letter-spacing: 12px;
padding: 10px 85px;
`;

export default function Footer () {
    return (
        <>
            <FooterContainer>
                <FooterBottom>
                    <FooterText>© 2021 TOUYARD Kévin. All rights reserved.</FooterText>
                </FooterBottom>
            </FooterContainer>
        </>
    );
}
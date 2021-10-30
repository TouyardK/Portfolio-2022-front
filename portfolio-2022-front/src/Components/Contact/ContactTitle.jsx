import React from "react";
import styled from "styled-components";
import ContactPicto from './ContactPicto';

const TitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 5px;
line-height: 3px;

`;

const ContactText = styled.h1`
color: white;
font-weight: 600;
height: 5px;
letter-spacing: -.050em;
font-size: 6vh;
`;

export default function ContactTitle () {
    return (
            <TitleContainer>
                <ContactText>You founded me on :</ContactText>
                <ContactPicto />
            </TitleContainer>
    );
}
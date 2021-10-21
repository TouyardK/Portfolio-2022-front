import React from 'react';
import styled from "styled-components";
import ContactMePicto from './ContactMePicto';

const ContactMeContainer = styled.div`
display: flex;
justify-content: center;
height: 75vh;
`;

export default function ContactMe () {
    return (
        <>
            <ContactMeContainer>
                <ContactMePicto />
            </ContactMeContainer>
        </>
    );
}
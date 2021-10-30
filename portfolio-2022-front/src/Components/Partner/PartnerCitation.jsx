import React from "react";
import styled from "styled-components";

const CitationContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 5px;
line-height: 3px;

`;

const CitationText = styled.h1`
color: white;
font-weight: 600;
height: 5px;
letter-spacing: -.050em;
font-size: 6vh;
`;

export default function PartnerCitation () {
    return (
            <CitationContainer>
                <CitationText>Alone we go faster,</CitationText>
                <CitationText>Together we go further...</CitationText>
            </CitationContainer>
    );
}
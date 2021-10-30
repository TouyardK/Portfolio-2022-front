import React from "react";
import styled from "styled-components";

const ContainerGlobal = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: auto;
`;

const PartnerContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 70vh;
width: 80vh;
`;

const PartnerCase = styled.div`
background-color: grey;
border-radius: 28px;
height: 30vh;
width: 35vh;
`;

export default function PartnerBox () {
    return (
        <ContainerGlobal>
            <PartnerContainer>
                <PartnerCase />
                <PartnerCase />
            </PartnerContainer>
        </ContainerGlobal>
    );
}
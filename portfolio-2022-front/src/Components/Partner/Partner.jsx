import React from "react";
import styled from "styled-components";
import PartnerCitation from "./PartnerCitation";
import PartnerBox from "./PartnerBox";

const PartnerMainContainer = styled.div`
background-color: black;
height: 60vh;
`;

export default function Partner () {
    return (
        <>
            <PartnerMainContainer>
                <PartnerCitation />
                <PartnerBox />
            </PartnerMainContainer>
        </>
    );
}
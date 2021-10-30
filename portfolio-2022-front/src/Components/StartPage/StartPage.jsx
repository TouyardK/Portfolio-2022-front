import React from "react";
import styled from "styled-components";
import EnterButton from "./EnterButton";
import LogoStart from "./LogoStart";

const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
height: 98vh;
width:auto;
margin: 0;
left: 0;
right: 0;
`;

export default function StartPage () {
    return (
        <>
            <MainContainer>
                <LogoStart />
                <EnterButton />
            </MainContainer>
        </>
    );
}
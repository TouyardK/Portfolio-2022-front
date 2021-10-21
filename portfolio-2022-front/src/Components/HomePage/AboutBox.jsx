import React from 'react';
import styled from "styled-components";

const StyledAboutBoxContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 45vh;
width: auto;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
`;

const StyledAboutBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
border-radius: 35px;
position: absolute;
width: 160vh;
height: auto;
outline: none;
border: none;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
background-color: #1d1d1f;
background-image: linear-gradient(120deg, #eb4f56, #9d66e9);
box-shadow: 0 0 10px 5px;
`;

const StyledTitleAbout = styled.h2`
color: whitesmoke;
font-size: 3.5vh;
height: 0.8vh;
text-decoration: underline #ffffff;
`;

const StyledTextAbout = styled.p`
color: whitesmoke;
font-size: 2.5vh;
height: 10vh;
`;

const StyledBrAbout = styled.br`
`;


export default function AboutBox () {
    return (
        <>
            <StyledAboutBoxContainer>
                <StyledAboutBox>
                    <StyledTitleAbout>Introduction :</StyledTitleAbout>
                    <StyledTextAbout>I'm a former construction industry worker. As a true computer enthusiast, and manifesting a genuine interest in learning programming, I decided to move onto a Web Development / Fullstack Mobile Application training course within the Wild Code School. Specialized in JavaScript language, I have also acquired skills and knowledge about back/front-end web development as well as React / Node.Js / MySql. When it's about teambuilding or management, I'm used to working with the "Agile method", I adhere to its philosophy and prefer from this way, when it comes to dealing with people or associates co-workers etc...
                        <StyledBrAbout />
                        <StyledBrAbout />
                    </StyledTextAbout>
                    <StyledTextAbout>
                    <StyledBrAbout />At the moment I'm looking for an internship (2-4 months) or a company position, I'm always open to any job suggestion concerning my domain of expertise with the skills mentioned above.
                                    Do not hesitate to get in touch with me for any further inquiries.</StyledTextAbout>
                </StyledAboutBox>
            </StyledAboutBoxContainer>
        </>
    );
}
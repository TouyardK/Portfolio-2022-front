import React from "react";
import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';
import { StyledNavBar } from '../Styles/StyledNavBar';
import  NavBarItem  from "./NavBarItem";

const NameNavBar = styled(HashLink)`
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
color: white;
text-decoration: none;
font-size: 1.5rem;
font-weight: 900;
letter-spacing: -.025em;
&:hover,
&:focus {
  cursor: pointer;
  background: 
    linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
}
@media only screen and (max-width: 767px){
font-size: 1.2rem;
}
`;

const EndNav = styled(HashLink) `
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
color:#3997f7;
text-decoration: none;
font-size: 1.2rem;
font-weight: 900;
letter-spacing: -.025em;
&:hover,
&:focus {
  cursor: pointer;
  background: 
    linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
}
@media only screen and (max-width: 767px){
font-size: 1rem;
}
`;

export default function NavBar () {
    const navbarLinks = [
        {
            id: 1,
            content: 'PROJECTS',
            path: '/home/#section-projects',
        },
        {
            id: 3,
            content: 'RESUME',
            path: '/home/#section-resume',
        },
        {
            id: 4,
            content: 'PARTNER',
            path: '#section-partner',
        },
    ];
    return (
        <>
            <StyledNavBar>
            <NameNavBar>TOUYARD KEVIN</NameNavBar>
                <ul>
                    {navbarLinks.map((link) => (
                        <NavBarItem id={link.id} path={link.path} content={link.content} />
                    ))}
                </ul>
            <EndNav>Contact</EndNav>
            </StyledNavBar>
        </>
    );
}
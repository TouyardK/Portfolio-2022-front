import React from "react";
import { StyledNavBar } from '../Styles/StyledNavBar';
import  NavBarItem  from "./NavBarItem";

export default function NavBar () {
    const navbarLinks = [
        {
            id: 1,
            content: 'TOUYARD KEVIN',
            path: '/',
        },
        {
            id: 2,
            content: 'PROJECTS',
            path: '/',
        },
        {
            id: 3,
            content: 'RESUME',
            path: '/',
        },
        {
            id: 4,
            content: 'CONTACT-ME',
            path: '/',
        },
    ];
    return (
        <>
            <StyledNavBar>
                <ul>
                    {navbarLinks.map((link) => (
                        <NavBarItem id={link.id} path={link.path} content={link.content} />
                    ))}
                </ul>
            </StyledNavBar>
        </>
    );
}
import React from "react";
import { StyledNavBar } from '../Styles/StyledNavBar';
import  NavBarItem  from "./NavBarItem";
import TouyardK from '../../Assets/TOUYARD-Kévin.pdf';

export default function NavBar () {
    const navbarLinks = [
        {
            id: 1,
            content: 'TOUYARD KEVIN',
            path: '/home/#section-home',
        },
        {
            id: 2,
            content: 'PROJECTS',
            path: '/home/#section-projects',
        },
        {
            id: 3,
            content: 'RESUME',
            path: '/',
        },
        {
            id: 4,
            content: 'CONTACT',
            path: '#section-contact',
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
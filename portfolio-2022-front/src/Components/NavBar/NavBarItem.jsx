import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../Styles/StyledNavBar';


export const StyledNavBarItem = styled.div`
display: inline-block;
list-style: none;
font-size: 0.95rem;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
letter-spacing: -.025em;
padding: 10px 10px;
font-weight: lighter;
text-align: center;
@media only screen and (max-width: 768px){
display: none;
}
`;


export default function NavBarItem ({ id, content, path }) {
    return (
        <StyledNavBarItem>
            <li>
            <StyledLink key={id} smooth to={path}>
                {content}
            </StyledLink>
            </li>
        </StyledNavBarItem>
    );
} 
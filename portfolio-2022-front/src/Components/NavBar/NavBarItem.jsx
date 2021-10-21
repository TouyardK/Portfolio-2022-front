import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../Styles/StyledNavBar';

export const StyledNavBarItem = styled.div`
display: inline-block;
list-style: none;
font-size: 0.6rem;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
letter-spacing: 7px;
padding: 10px 85px;
font-weight: lighter;
text-align: center;
`;


export default function NavBarItem ({ id, content, path }) {
    return (
        <StyledNavBarItem>
            <li>
            <StyledLink key={id} to={path}> 
                {content}
            </StyledLink>
            </li>
        </StyledNavBarItem>
    );
} 
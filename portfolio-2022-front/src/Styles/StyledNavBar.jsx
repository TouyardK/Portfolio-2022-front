import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledNavBar = styled.nav`
display: flex;
justify-content: center;
border-bottom: solid 1px #e2e2e2;
width: auto;
height: auto;
`;

export const StyledLink = styled(Link)`
display: flex;
text-decoration: none;
color: black;
`;

import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledNavBar = styled.nav`
display: flex;
background-color: black;
justify-content: center;
border-bottom: solid 3px #A58DE3;
width: auto;
height: auto;
`;

export const StyledLink = styled(Link)`
display: flex;
text-decoration: none;
color: white;
`;

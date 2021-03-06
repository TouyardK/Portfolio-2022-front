import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';

export const StyledNavBar = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
position: fixed;
left: 0;
right: 0;
top: 0;
background-color: rgba(29, 29, 31, 0.7);
bottom: auto;
z-index: 100;
padding-top: 10px;
padding-bottom: 10px;
border-bottom: solid 1px white;
width: auto;
height: 6vh;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
@media only screen and (max-width: 768px) {
  width: auto;
}
`;

export const StyledLink = styled(HashLink)`
display: flex;
width: 30px;
text-decoration: none;
font-size: 0.7rem;
padding: 15px;
color: #ffffff;
float: left;
margin-left: 15px;
position: relative;
font-weight: 900;
top: 0;
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
`;

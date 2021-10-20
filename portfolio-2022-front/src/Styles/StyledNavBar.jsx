import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledNavBar = styled.nav`
display: flex;
align-items: center;
position: fixed;
left: 0;
right: 0;
top: 0;
background-color: black;
bottom: auto;
z-index: 100;
padding-top: 10px;
padding-bottom: 10px;
justify-content: center;
border-bottom: solid 1px white;
width: auto;
height: 6vh;
`;

export const StyledLink = styled(Link)`
display: flex;
text-decoration: none;
padding: 15px;
  background-color: rgba(0, 0, 0, 0);
  border: 1px rgba(255,255,255,.15) solid;
  box-shadow: 0px 3px 10px rgba(255,255,255,.1);
  color: #ffffff;
  width: max-content;
  float: left;
  margin-left: 15px;
  position: relative;
  transition: box-shadow .5s ease 0s, top .5s ease 0s, border .5s ease 0s, color .5s ease 0s;
  top: 0;
&:hover {
  cursor: pointer;
  box-shadow: 0px 6px 15px #ff00007f;
  top: -3px;
  border: 1px #d900ff4c solid;
}
`;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledButtonStart = styled.button`
height: 5vh;
width:10vh;
`;

export default function EnterButton() {
   return (
       <>
            <Link to="/home">
                <StyledButtonStart type="button">START</StyledButtonStart>
            </Link>
       </>
   ); 
}
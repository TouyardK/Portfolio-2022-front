import React from "react";
import styled from "styled-components";
import ResumeBox from "./ResumeBox";

const CitationContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: auto;
line-height: 3px;
@media only screen and (max-width: 768px){
  height: auto;
  width: auto;
}
`;

const CitationText = styled.h1`
letter-spacing: -.050em;
font-size: 50px;
line-height: 5vh;
background: linear-gradient(91.36deg, #ECA658 0%, #F391A6 13.02%, #E188C3 25.52%, #A58DE3 37.5%, #56ABEC 49.48%, #737EB7 63.02%, #C8638C 72.92%, #DD5D57 84.38%, #DF6C51 97.92%);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
background-repeat: repeat;
background-size: 90%;
animation: shine 15s infinite;
position: relative;
@keyframes shine {
0% {
  background-position-x: -500%;
}
100% {
  background-position-x: 500%;
}
}
@media only screen and (max-width: 768px){
  height: auto;
  width: auto;
  font-size: 1.8rem;
}
`;

export default function ResumeCitation () {
    return (
            <CitationContainer>
                <CitationText>Have a look at my resume</CitationText>
                <CitationText>Here</CitationText>
                <ResumeBox />
            </CitationContainer>
    );
}
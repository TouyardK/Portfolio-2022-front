import React from 'react';
import styled from "styled-components";
import ResponsiveBox from "./ResponsiveBox";
import JiraScrum from "./JiraScrum";

const AdditionalSkillsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: auto;
width: auto;
font-family: 'Oswald', sans-serif;
@media only screen and (max-width: 768px){
  width: auto;
  height: auto;
  padding-top: 20px;
}
`;


export default function AdditionalSkills () {
    return (
        <>  
            <AdditionalSkillsContainer>
                <ResponsiveBox/>
            </AdditionalSkillsContainer>
                <JiraScrum /> 
        </>
    );
}
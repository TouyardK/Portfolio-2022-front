import React from 'react';
import styled from "styled-components";
import javascript from '../Assets/javascript.png'
import mysql from '../Assets/mysql.png'
import nodejs from '../Assets/nodejs.png'
import react from '../Assets/react.png'

const StyledSoftSkillsDatesContainer = styled.div`
display: flex;
background-color: black;
justify-content: space-around;
height: 80vh;
`;

const StyledLeftBox = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
position: relative;
background-color: #1d1d1f;
border: 1px solid hsla(0,0%,51.4%,.16);
border-radius: 55px;
width: 75vh;
height: 42vh;
padding: 28px;
line-height: 1.1;
`;

const StyledRightBox = styled.div`
display: flex;
width: auto;
height: 55vh;
`;

const StyledCaseRepartition = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
line-height: 0.2;
letter-spacing: -.05em;
width: 44vh;
height: 48vh;
`;

const StyledLittleCase = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #1d1d1f;
border: 1px solid hsla(0,0%,51.4%,.16);
border-radius: 55px;
height: 250px;
width: 400px;
`;

const Styledh3 = styled.h3`
color: white;
font-size: 38px;
`;

const StyledText = styled.p`
color: #a3a3a3;
font-size: 30px;
`;

const StyledPicto = styled.img`
height: 200px;
width: 200px;
`;

export default function SoftSkillsDates () {
    return(
        <>
            <StyledSoftSkillsDatesContainer>
                <StyledLeftBox>
                    <Styledh3>Développeur Web FullStack 8 mois d'expérience.</Styledh3>
                    <StyledText>De part ma formation, j'ai pu apprendre et mettre en pratique les compétences acquises au travers de divers projets de groupe ainsi que deux hackathon. Nous avons été formé pour être opérationnel en tant que FullStack, être autonome et pouvoir nous lancé dans notre carrière de développeur,
                                avec de bonne bases.
                    </StyledText>
                </StyledLeftBox>
                <StyledRightBox>
                    <StyledCaseRepartition>
                        <StyledLittleCase>
                            <StyledPicto src={react} alt="react" />
                        </StyledLittleCase>
                        <StyledLittleCase>
                            <StyledPicto src={javascript} alt="js" />
                        </StyledLittleCase>
                    </StyledCaseRepartition>
                    <StyledCaseRepartition>
                        <StyledLittleCase>
                            <StyledPicto src={nodejs} alt="nodejs" />
                        </StyledLittleCase>
                        <StyledLittleCase>
                            <StyledPicto src={mysql} alt="mysql" />
                        </StyledLittleCase>
                    </StyledCaseRepartition>
                </StyledRightBox>
            </StyledSoftSkillsDatesContainer>
        </>
    );
}
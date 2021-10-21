import React from 'react';
import styled from "styled-components";
import javascript from '../../Assets/javascript.png';
import mysql from '../../Assets/mysql.png';
import nodejs from '../../Assets/nodejs.png';
import react from '../../Assets/react.png';
import types from '../../Assets/typescript.png';
import css3 from '../../Assets/css.png';

const StyledSoftSkillsDatesContainer = styled.div`
display: flex;
background-color: black;
justify-content: space-around;
height: 70vh;
font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
`;

const StyledLeftBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
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
height: 42vh;
`;

const StyledCaseRepartition = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 27vh;
height: 48vh;
`;

const StyledLittleCase = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #1d1d1f;
border: 1px solid hsla(0,0%,51.4%,.16);
border-radius: 55px;
height: 200px;
width: 200px;
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
height: 120px;
width: 120px;
`;

const Line = styled.div`
border: solid 1px;
width: 17vh;
height: 1px;
`;

export default function SoftSkillsDates () {
    return(
        <>
            <StyledSoftSkillsDatesContainer>
                <StyledLeftBox>
                    <Styledh3>FullStack Web Developer 8 months of experience.</Styledh3>
                        <Line />
                    <StyledText>Due to my training, I was able to learn and put into practice the skills acquired through various group projects as well as two hackathons. We have been trained to be operational as a FullStack, to be autonomous and to be able to launch our career as a developer,
                                with good foundations.
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
                            <StyledPicto src={types} alt="types" />
                        </StyledLittleCase>
                        <StyledLittleCase>
                            <StyledPicto src={css3} alt="css" />
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
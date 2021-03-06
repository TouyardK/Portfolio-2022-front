import React from 'react';
import styled from 'styled-components';
import javascript from '../../Assets/javascript.png';
import mysql from '../../Assets/mysql.png';
import nodejs from '../../Assets/nodejs.png';
import react from '../../Assets/react.png';
import types from '../../Assets/typescript.png';
import css3 from '../../Assets/css.png';
import html from '../../Assets/html.png';
import vue from '../../Assets/vue.svg';
import firebase from '../../Assets/firebase-icon.svg';

const StyledSoftSkillsDatesContainer = styled.div`
  display: flex;
  background-color: black;
  justify-content: space-around;
  height: 80vh;
  font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  @media only screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    height: auto;
}
`;

const StyledLeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: #1d1d1f;
  border: 1px solid hsla(0, 0%, 51.4%, 0.16);
  border-radius: 28px;
  width: 75vh;
  height: 43vh;
  padding: 28px;
  line-height: 1.1;
  @media only screen and (max-width: 768px){
  height: auto;
  width: auto;
  word-wrap: break-word;
  }
`;

const StyledRightBox = styled.div`
  display: flex;
  width: 50vh;
  @media only screen and (max-width: 768px){
  height: auto;
  width: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  }
`;

const StyledCaseRepartition = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 20vh;
  height: 48vh;
  @media only screen and (max-width: 768px){
  height: auto;
  width: auto;
  }
`;

const StyledLittleCase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d1d1f;
  border: 1px solid hsla(0, 0%, 51.4%, 0.16);
  border-radius: 28px;
  height: 130px;
  width: 130px;
  @media only screen and (max-width: 768px){
  height: 70px;
  width: 70px;
  }

`;

const Styledh3 = styled.h3`
  color: white;
  font-size: 38px;
  @media only screen and (max-width: 768px){
 font-size: 20px;
  }
`;

const StyledText = styled.p`
  color: #a3a3a3;
  font-size: 30px;
  @media only screen and (max-width: 768px){
 font-size: 17px;
  }
`;

const StyledPicto = styled.img`
  height: 90px;
  width: 90px;
  @media only screen and (max-width: 768px){
  height: 50px;
  width: 50px;
  }
`;

const Line = styled.div`
  border: solid 1px;
  width: 17vh;
  height: 1px;
`;

export default function SoftSkillsDates() {
  return (
      <StyledSoftSkillsDatesContainer>
        <StyledLeftBox>
          <Styledh3>FullStack Web Developer 8 months of experience.</Styledh3>
          <Line />
          <StyledText>
            Due to my training, I was able to learn and put into practice the skills acquired through various group projects as well as two
            hackathons. We have been trained to be operational as a FullStack, to be autonomous and to be able to launch our career as a developer,
            with good foundations.
          </StyledText>
        </StyledLeftBox>
        <StyledRightBox>
          <StyledCaseRepartition>
            <StyledLittleCase>
              <StyledPicto src={html} alt="html" />
            </StyledLittleCase>
            <StyledLittleCase>
              <StyledPicto src={css3} alt="css3" />
            </StyledLittleCase>
            <StyledLittleCase>
              <StyledPicto src={javascript} alt="js" />
            </StyledLittleCase>
          </StyledCaseRepartition>
          <StyledCaseRepartition>
            <StyledLittleCase>
              <StyledPicto src={react} alt="react" />
            </StyledLittleCase>
            <StyledLittleCase>
              <StyledPicto src={nodejs} alt="node" />
            </StyledLittleCase>
            <StyledLittleCase>
              <StyledPicto src={mysql} alt="mysql" />
            </StyledLittleCase>
          </StyledCaseRepartition>
          <StyledCaseRepartition>
            <StyledLittleCase>
              <StyledPicto src={types} alt="types" />
            </StyledLittleCase>
            <StyledLittleCase>
              <StyledPicto src={firebase} alt="fire" />
            </StyledLittleCase>
            <StyledLittleCase>
              <StyledPicto src={vue} alt="vue" />
            </StyledLittleCase>
          </StyledCaseRepartition>
        </StyledRightBox>
      </StyledSoftSkillsDatesContainer>
  );
}

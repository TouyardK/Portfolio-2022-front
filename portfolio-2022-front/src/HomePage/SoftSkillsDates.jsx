import styled from "styled-components";

const StyledSoftSkillsDatesContainer = styled.div`
display: flex;
background-color: black;
justify-content: space-around;
height: 80vh;
`;

const StyledLeftBox = styled.div`
background-color: #1d1d1f;
border: 1px solid hsla(0,0%,51.4%,.16);
border-radius: 55px;
width: 60vh;
height: 55vh;
`;

const StyledRightBox = styled.div`
display: flex;
width: 80vh;
height: 55vh;
`;

const StyledCaseRepartition = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
line-height: 0.2;
letter-spacing: -.05em;
width: 50%;
`;

const StyledLittleCase = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #1d1d1f;
border: 1px solid hsla(0,0%,51.4%,.16);
border-radius: 55px;
height: 250px;
width: 450px;
`;

const Styledh3 = styled.h3`
color: white;
font-size: 33px;
`;

const StyledText = styled.p`
color: white;
font-size: 28px;
`;

const Styledh3InCase = styled.h3`
color: white;
font-size: 65px;
`;

const StyledTextInCase = styled.p`
color: white;
font-size: 22px;
`;

export default function SoftSkillsDates () {
    return(
        <>
            <StyledSoftSkillsDatesContainer>
                <StyledLeftBox>
                    <Styledh3>Webflow developer with years of web design experience.</Styledh3>
                    <StyledText>I turn your designs into pixel-perfect Webflow sites with great attention to detail and elegant animations. Say goodbye to the stressful back and forth with developers who have no feel for design. For a limited number of selected clients, I also cover the whole process of concept, design and development.</StyledText>
                </StyledLeftBox>
                <StyledRightBox>
                    <StyledCaseRepartition>
                        <StyledLittleCase>
                            <Styledh3InCase>45</Styledh3InCase>
                            <StyledTextInCase>Happy clients</StyledTextInCase>
                        </StyledLittleCase>
                        <StyledLittleCase>
                            <Styledh3InCase>7+</Styledh3InCase>
                            <StyledTextInCase>Projects</StyledTextInCase>
                        </StyledLittleCase>
                    </StyledCaseRepartition>
                    <StyledCaseRepartition>
                        <StyledLittleCase>
                            <Styledh3InCase>8 month</Styledh3InCase>
                            <StyledTextInCase>Expériences</StyledTextInCase>
                        </StyledLittleCase>
                        <StyledLittleCase>
                            <Styledh3InCase>100%</Styledh3InCase>
                            <StyledTextInCase>Passion</StyledTextInCase>
                        </StyledLittleCase>
                    </StyledCaseRepartition>
                </StyledRightBox>
            </StyledSoftSkillsDatesContainer>
        </>
    );
}
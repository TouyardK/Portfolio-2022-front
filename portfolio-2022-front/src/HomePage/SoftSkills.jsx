import styled from "styled-components";

const StyledTitleContainer = styled.div`
display: flex;
background-color: black;
justify-content: center;
align-items: center;
border: solid 1px;
height: auto;
width: auto;
`;

const StyledTitleBox = styled.div`
display: flex;
flex-direction: column;
background-color: black;
border-radius: 25px;
width: 150vh;
height: auto;
line-height: 0.5;
padding-left: 20vh;
`;

const StyledH1 = styled.h1`
color: white;
letter-spacing: 5px;
font-size: 8vh;
`;

const StyledH2 = styled.h2`
color: grey;
font-size: 4vh;
`;

const StyledCaseContainer = styled.div`
display: flex;
height: auto;
width: auto;
`;

const StyledCaseBox = styled.div`
display: block;
background-color: #1d1d1f;
border: solid 1px #1d1d1f;
border-radius: 45px;
width: 300px;
height: 300px;
`;


export default function SoftSkills () {
    return (
        <>
            <StyledTitleContainer>
                <StyledTitleBox>
                    <StyledH2>Soft Skills</StyledH2>
                    <StyledH1>JavaScript developper</StyledH1>
                    <StyledH1>Webflow Partner.</StyledH1>
                </StyledTitleBox>
            </StyledTitleContainer>
        </>
    );
}
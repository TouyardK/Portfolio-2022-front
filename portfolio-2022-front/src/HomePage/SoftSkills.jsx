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
height: 50vh;
line-height: 0.5;
padding-left: 20vh;
`;

const StyledH1 = styled.h1`
color: white;
letter-spacing: 10px;
font-size: 8vh;
`;

const StyledH2 = styled.h2`
color: #999999;
letter-spacing: 8px;
font-size: 4vh;
`;



export default function SoftSkills () {
    return (
        <>
            <StyledTitleContainer>
                <StyledTitleBox>
                    <StyledH2>Soft Skills</StyledH2>
                    <StyledH1>JavaScript developper</StyledH1>
                    <StyledH1>Front-end Designer.</StyledH1>
                </StyledTitleBox>
            </StyledTitleContainer>
        </>
    );
}
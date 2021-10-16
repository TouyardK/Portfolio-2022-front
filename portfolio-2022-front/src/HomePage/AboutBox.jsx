import styled from "styled-components";

const StyledAboutBoxContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 45vh;
width: auto;
`;

const StyledAboutBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
border-radius: 35px;
position: absolute;
width: 160vh;
height: auto;
outline: none;
border: none;
background-color: #1d1d1f;
background-image: linear-gradient(120deg, #eb4f56, #9d66e9);
`;

const StyledTitleAbout = styled.h2`
color: whitesmoke;
font-size: 3.5vh;
`;

const StyledTextAbout = styled.p`
color: whitesmoke;
font-size: 2.5vh;
`;

const StyledBrAbout = styled.br``;

export default function AboutBox () {
    return (
        <>
            <StyledAboutBoxContainer>
                <StyledAboutBox>
                    <StyledTitleAbout>Qui suis-je ?</StyledTitleAbout>
                    <StyledTextAbout>Issu du BTP, passionné d'informatique et intéressé par la programmation, je me suis engagé dans une formation de développeur Web / Application mobile Fullstack au sein de la Wild Code School. Orienté JavaScript, j'ai acquis des compétences aussi bien en back / front-end que React / Node.Js / MySql.
                        Formé aux méthodes Agile, je suis à l'écoute des autres, à l'aise lorsqu'il sagit de travailler au sein d'une équipe.
                        <StyledBrAbout />
                        <StyledBrAbout />
                        Actuellement je recherche un stage(2 - 4 mois) ou un poste en entreprise, et je reste ouvert à toute autre proposition.
                    </StyledTextAbout>
                </StyledAboutBox>
            </StyledAboutBoxContainer>
        </>
    );
}
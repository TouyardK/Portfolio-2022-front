import styled from "styled-components";

const StyledContainerTitles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
font-weight: 700;
  text-align: center;
  font-family: Hack, sans-serif;
  text-transform: uppercase;
  background: linear-gradient(90deg, #000, orange, #000);
  letter-spacing: 5px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  background-size: 80%;
  animation: shine 8s linear;
  position: relative;
  @keyframes shine {
  0% {
    background-position-x: -500%;
  }
  100% {
    background-position-x: 500%;
  }
}
`;

const StyledTitleName = styled.h2`
font-size: 2rem;
`;

const StyledTitlePro = styled.h1`
font-size: 3rem;
`;

const StyledTitleEnd = styled.h3`
font-size: 1.5rem;
`;


export default function TitlePhoto () {
    return (
        <>
        <StyledContainerTitles>
            <StyledTitleName>Touyard Kévin</StyledTitleName>
            <StyledTitlePro>Développeur FullStack Junior.</StyledTitlePro>
            <StyledTitleEnd>Découvrez mes projets.</StyledTitleEnd>
        </StyledContainerTitles>
        </>
    );
}
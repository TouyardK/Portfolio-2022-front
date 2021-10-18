import styled from "styled-components";
import photoK from '../Assets/photoK.jpg';

const StyledContainer = styled.div`
display: flex;
justify-content: center;
`;

const StyledContainerPhoto = styled.div`
margin-bottom: 48px;
min-height: 280px;
min-width: 280px;
height: 280px;
width: 280px;
max-height: 280px;
max-height: 280px;
`;

const StyledPhoto = styled.img`
position: relative;
z-index: 3;
width: 100%;
height: 100%;
border-radius: 50%;
filter: drop-shadow(0 0 0.95rem  #9d66e9);
`;


export default function Photo () {
    return (
    <>
    <StyledContainer>
        <StyledContainerPhoto>
            <StyledPhoto src={photoK} alt="Kevin" />
        </StyledContainerPhoto>
    </StyledContainer>
    </>
    );
}
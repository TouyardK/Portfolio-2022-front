import styled from "styled-components";

const StyledProjectContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: solid 1px;
height: 45vh;
width: auto;
`;

const StyledProjectBox = styled.div`
display: block;
border: solid 1px;
border-radius: 25px;
width: 150vh;
height: 30vh;
`;

export default function Project () {
    return (
        <>
            <StyledProjectContainer>
                <StyledProjectBox>

                </StyledProjectBox>
            </StyledProjectContainer>
        </>
    );
}
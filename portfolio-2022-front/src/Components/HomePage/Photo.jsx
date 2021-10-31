import React from 'react';
import styled from "styled-components";
import PhotoK2 from '../../Assets/PhotoK2.jpg';

const StyledContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
height: 30vh;
`;

const StyledContainerPhoto = styled.div`
margin-bottom: 55px;
min-height: 280px;
min-width: 280px;
height: 260px;
width: 260px;
max-height: 280px;
max-height: 280px;
`;

const StyledPhoto = styled.img`
position: relative;
z-index: 3;
width: 300px;
height: 300px;
border-radius: 50%;
filter: drop-shadow(0 0 0.95rem  #9d66e9);
`;

export default function Photo () {
    return (
    <>
                    <StyledContainer>
                        <StyledContainerPhoto>
                            <StyledPhoto src={PhotoK2} alt="Kevin" />
                        </StyledContainerPhoto>
                    </StyledContainer>
    </>
    );
}
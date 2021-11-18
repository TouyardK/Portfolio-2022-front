import React from 'react';
import styled from "styled-components";
import PhotoK2 from '../../Assets/PhotoK2.jpg';
import TitlePhoto from './TitlePhoto';
import { device } from '../Styles/device';

const StyledContainer = styled.div`
@media ${device.mobileS}{
width: 280px;
padding: 10px;
  }
`;

const StyledContainerPhoto = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 380px;
width: 280px;
max-height: 380px;
max-height: 280px;
`;

const StyledPhoto = styled.img`
width: 300px;
height: 300px;
border-radius: 50%;
filter: drop-shadow(0 0 0.95rem  #9d66e9);
@media ${device.mobileS}{
width: 250px;
height: 250px;
padding: 17px;
  }

  @media ${device.tablet}{
  }

  @media ${device.desktop}{

  }
`;

export default function Photo () {
    return (
                    <StyledContainer id="section-home">
                        <StyledContainerPhoto>
                            <StyledPhoto src={PhotoK2} alt="Kevin" />
                            <TitlePhoto />
                        </StyledContainerPhoto>
                    </StyledContainer>
    );
}
import React from "react";
import styled from "styled-components";
import cvimg from '../../Assets/cv2.png';
import TouyardK from '../../Assets/TOUYARD-Kévin.pdf';

const ContainerGlobal = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: auto;
`;

const ResumeContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 15vh;
width: 80vh;
`;

const ResumeImg = styled.img`
background-color: grey;
border-radius: 28px;
height: 10vh;
width: 10vh;
`;

export default function ResumeBox () {
    return (
        <ContainerGlobal>
            <ResumeContainer>
                <a href={TouyardK}>
                    <ResumeImg src={cvimg} alt="cv" />
                </a>
            </ResumeContainer>
        </ContainerGlobal>
    );
}
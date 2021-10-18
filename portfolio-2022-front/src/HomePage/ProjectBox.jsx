import styled from "styled-components";
import ecran from '../Assets/ecran.png';

const BoxProjectContainer = styled.div`
display: flex;
height: auto;
width: 160vh;
border-radius: 35px;
outline: none;
border: none;
`;

const DesktopProject = styled.img`
height: 100vh;
width: 160vh;
`;

export default function ProjectBox () {
    return(
        <>
            <BoxProjectContainer>
                <DesktopProject src={ecran} alt="desk" />
            </BoxProjectContainer>
        </>
    );
}
import styled from 'styled-components';
import NavBar from '../NavBar/NavBar';
import Photo from '../HomePage/Photo';
import TitlePhoto from './TitlePhoto';

export const StyledHeader = styled.div`
`;

const Blank = styled.div`
height: 8vh;
`;

export default function Header () {
    return (
    <>
        <StyledHeader>
            <NavBar />
        </StyledHeader>
                <Blank />
            <Photo />
        <TitlePhoto />
    </>
    );
}
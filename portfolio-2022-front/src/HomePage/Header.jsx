import styled from 'styled-components';
import NavBar from '../NavBar/NavBar';

export const StyledHeader = styled.div`
`;

export default function Header () {
    return (
        <StyledHeader>
            <NavBar />
        </StyledHeader>
    );
}